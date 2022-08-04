// covid 관련 api
// 타입 정의

export enum CovidStatus {
    Confirmed = 'confirmed',
    Recovered = 'recovered',
    Deaths = 'deaths',
}

export interface Country {
    Country: string;
    CountryCode: string;
    Date: string;
    ID: string;
    NewConfirmed: number;
    NewDeaths: number;
    NewRecovered: number;
    Premium: object;
    Slug: string;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
}

interface Global {
    Date: string;
    NewConfirmed: number;
    NewDeaths: number;
    NewRecovered: number;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
}

export interface CovidSummaryResponse {
    Countries: Country[];
    Date: string;
    Global: Global;
    ID: string;
    Message: string;
}

interface CountrySummaryInfo {
    Cases: number;
    City: string;
    CityCode: string;
    Country: string;
    CountryCode: string;
    Date: string;
    Lat: string;
    Lon: string;
    Province: string;
    Status: string;
}
export type CountrySummaryResponse = CountrySummaryInfo[]; // 배열 형태는 타입으로
