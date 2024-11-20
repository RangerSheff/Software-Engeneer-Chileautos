export interface ButtonState {
    text: string;
    isDisabled: boolean;
}

export interface ServiceStatus {
    status: string;
}

export interface AppState {
    [x: string]: any;
    buttonState: ButtonState;
    healthStatus: HealthStatus | null;
    isLoading: boolean;
}

export interface HealthStatus  {
    status: string;
    info?: {
        [key: string]: ServiceStatus;
    };
    error?: { [key: string]: string };
    details?: { [key: string]: any };
}

export interface GenericResponseDto {
    code: number;
    message: string;
    data?: responseEpisode;
    error?: any;
}

export interface responseEpisode{
    info: info;
    results: Episode | Episode[];
}

export interface info{
    count: number,
    pages: number,
    next: string,
    prev: null | number,
}
export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}
  
export interface ServiceStatus {
    status: string;
}