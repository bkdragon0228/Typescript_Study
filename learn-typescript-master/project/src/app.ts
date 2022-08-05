// 라이브러리
import axios, { AxiosResponse } from 'axios';
import { Chart } from 'chart.js';

// 변수, 함수 임포트
import {
    CovidSummaryResponse,
    CovidStatus,
    CountrySummaryResponse,
    Country,
    CountrySummaryInfo,
} from './covid/index';

// utils
function $(selector: string) {
    // dom을 가져오는 함수, selector는 html 요소
    return document.querySelector(selector);
}
function getUnixTimestamp(date: Date | string | number) {
    return new Date(date).getTime(); // 내장 객체는 마우스 올려보면 타입 추론을 해준다.
}

// DOM
// let a: Element | HTMLElement | HTMLParagraphElement;
const confirmedTotal = $('.confirmed-total') as HTMLSpanElement;
const deathsTotal = $('.deaths') as HTMLParagraphElement; // 타입 단언
const recoveredTotal = $('.recovered') as HTMLParagraphElement;
const lastUpdatedTime = $('.last-updated-time') as HTMLParagraphElement;
const rankList = $('.rank-list') as HTMLOListElement;
const deathsList = $('.deaths-list') as HTMLOListElement;
const recoveredList = $('.recovered-list') as HTMLOListElement;
const deathSpinner = createSpinnerElement('deaths-spinner');
const recoveredSpinner = createSpinnerElement('recovered-spinner');

function createSpinnerElement(id: string) {
    const wrapperDiv = document.createElement('div');
    wrapperDiv.setAttribute('id', id);
    wrapperDiv.setAttribute(
        'class',
        'spinner-wrapper flex justify-center align-center'
    );
    const spinnerDiv = document.createElement('div');
    spinnerDiv.setAttribute('class', 'ripple-spinner');
    spinnerDiv.appendChild(document.createElement('div'));
    spinnerDiv.appendChild(document.createElement('div'));
    wrapperDiv.appendChild(spinnerDiv);
    return wrapperDiv;
}

// state
let isDeathLoading = false;
// const isRecoveredLoading = false;

// api
function fetchCovidSummary(): Promise<AxiosResponse<CovidSummaryResponse>> {
    // 요약 정보
    const url = 'https://api.covid19api.com/summary';
    return axios.get(url); // 형태가 궁금하면 개발자 도구 네트워크 패널을 통해 확인 가능하다.
}
// fetchCovidSummary().then(res => res.data.Countries); //사용할 수 있는 옵션이 다  나온다.

function fetchCountryInfo(
    countryCode: string | undefined,
    status: CovidStatus
): Promise<AxiosResponse<CountrySummaryResponse>> {
    // 특정 국가의 코로나 정보
    // status params: confirmed, recovered, deaths
    const url = `https://api.covid19api.com/country/${countryCode}/status/${status}`;
    return axios.get(url);
}

// methods
function startApp() {
    setupData();
    initEvents();
}

// events
function initEvents() {
    if (!rankList) {
        return;
    } // null 처리
    rankList.addEventListener('click', handleListClick);
}

// Event UIEvent MouseEvent 우측일 수록 상위 타입
async function handleListClick(event: Event) {
    let selectedId;
    if (
        event.target instanceof HTMLParagraphElement ||
        event.target instanceof HTMLSpanElement
    ) {
        // if문 안쓰고 삼항연사자 사용
        selectedId = event.target.parentElement
            ? event.target.parentElement.id
            : undefined;
    }
    if (event.target instanceof HTMLLIElement) {
        selectedId = event.target.id;
    }
    if (isDeathLoading) {
        return;
    }
    clearDeathList();
    clearRecoveredList();
    startLoadingAnimation();
    isDeathLoading = true;
    const { data: deathResponse } = await fetchCountryInfo(
        selectedId,
        CovidStatus.Deaths
    );
    const { data: recoveredResponse } = await fetchCountryInfo(
        selectedId,
        CovidStatus.Recovered
    );
    const { data: confirmedResponse } = await fetchCountryInfo(
        selectedId,
        CovidStatus.Confirmed
    );
    endLoadingAnimation();
    setDeathsList(deathResponse);
    setTotalDeathsByCountry(deathResponse);
    setRecoveredList(recoveredResponse);
    setTotalRecoveredByCountry(recoveredResponse);
    setChartData(confirmedResponse);
    isDeathLoading = false;
}

function setDeathsList(data: CountrySummaryResponse) {
    const sorted = data.sort(
        (a: CountrySummaryInfo, b: CountrySummaryInfo) =>
            getUnixTimestamp(b.Date) - getUnixTimestamp(a.Date)
    );
    sorted.forEach((value: CountrySummaryInfo) => {
        const li = document.createElement('li');
        li.setAttribute('class', 'list-item-b flex align-center');
        const span = document.createElement('span');
        span.textContent = value.Cases.toString();
        span.setAttribute('class', 'deaths');
        const p = document.createElement('p');
        p.textContent = new Date(value.Date).toLocaleDateString().slice(0, -1);
        li.appendChild(span);
        li.appendChild(p);
        //non-null assertion 널이 아니라고 알려주는
        // 주의해서 사용
        deathsList!.appendChild(li);
    });
}

function clearDeathList() {
    if (!deathsList) {
        return;
    }
    deathsList.innerHTML = '';
}

function setTotalDeathsByCountry(data: CountrySummaryResponse) {
    deathsTotal.innerText = data[0].Cases.toString();
}

function setRecoveredList(data: CountrySummaryResponse) {
    const sorted = data.sort(
        (a: CountrySummaryInfo, b: CountrySummaryInfo) =>
            getUnixTimestamp(b.Date) - getUnixTimestamp(a.Date)
    );
    sorted.forEach((value: CountrySummaryInfo) => {
        const li = document.createElement('li');
        li.setAttribute('class', 'list-item-b flex align-center');
        const span = document.createElement('span');
        span.textContent = value.Cases.toString();
        span.setAttribute('class', 'recovered');
        const p = document.createElement('p');
        p.textContent = new Date(value.Date).toLocaleDateString().slice(0, -1);
        li.appendChild(span);
        li.appendChild(p);
        // 옵셔널 체이닝 오퍼레이터
        recoveredList?.appendChild(li);
        // 아래와 같은 작업
        // if(recoveredList === null || recoveredList  === undefined) {
        //     return;
        // } else {
        //     recoveredList.appendChild(li)
        // }
    });
}

function clearRecoveredList() {
    recoveredList.innerHTML = '';
}

function setTotalRecoveredByCountry(data: CountrySummaryResponse) {
    recoveredTotal.innerText = data[0].Cases.toString();
}

function startLoadingAnimation() {
    deathsList.appendChild(deathSpinner);
    recoveredList.appendChild(recoveredSpinner);
}

function endLoadingAnimation() {
    deathsList.removeChild(deathSpinner);
    recoveredList.removeChild(recoveredSpinner);
}

async function setupData() {
    const { data } = await fetchCovidSummary();
    setTotalConfirmedNumber(data);
    setTotalDeathsByWorld(data);
    setTotalRecoveredByWorld(data);
    setCountryRanksByConfirmedCases(data);
    setLastUpdatedTimestamp(data);
}

function renderChart(data: number[], labels: string[]) {
    const lineChart = $('#lineChart') as HTMLCanvasElement;
    const ctx = lineChart.getContext('2d');
    Chart.defaults.color = '#f5eaea';
    Chart.defaults.font.family = 'Exo 2';
    new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [
                {
                    label: 'Confirmed for the last two weeks',
                    backgroundColor: '#feb72b',
                    borderColor: '#feb72b',
                    data,
                },
            ],
        },
        options: {},
    });
}

function setChartData(data: CountrySummaryResponse) {
    const chartData = data
        .slice(-14)
        .map((value: CountrySummaryInfo) => value.Cases);
    const chartLabel = data
        .slice(-14)
        .map((value: CountrySummaryInfo) =>
            new Date(value.Date).toLocaleDateString().slice(5, -1)
        );
    renderChart(chartData, chartLabel);
}

function setTotalConfirmedNumber(data: CovidSummaryResponse) {
    confirmedTotal.innerText = data.Countries.reduce(
        (total: number, current: Country) => (total += current.TotalConfirmed),
        0
    ).toString();
}

function setTotalDeathsByWorld(data: CovidSummaryResponse) {
    deathsTotal.innerText = data.Countries.reduce(
        (total: number, current: Country) => (total += current.TotalDeaths),
        0
    ).toString();
}

function setTotalRecoveredByWorld(data: CovidSummaryResponse) {
    recoveredTotal.innerText = data.Countries.reduce(
        (total: number, current: Country) => (total += current.TotalRecovered),
        0
    ).toString();
}

function setCountryRanksByConfirmedCases(data: CovidSummaryResponse) {
    const sorted = data.Countries.sort(
        (a: Country, b: Country) => b.TotalConfirmed - a.TotalConfirmed
    );
    sorted.forEach((value: Country) => {
        const li = document.createElement('li');
        li.setAttribute('class', 'list-item flex align-center');
        li.setAttribute('id', value.Slug);
        const span = document.createElement('span');
        span.textContent = value.TotalConfirmed.toString();
        span.setAttribute('class', 'cases');
        const p = document.createElement('p');
        p.setAttribute('class', 'country');
        p.textContent = value.Country;
        li.appendChild(span);
        li.appendChild(p);
        rankList.appendChild(li);
    });
}

function setLastUpdatedTimestamp(data: CovidSummaryResponse) {
    lastUpdatedTime.innerText = new Date(data.Date).toLocaleString();
}

startApp();
