export interface DatasetEventDetail {
  id: string;
  url: string;
  name: string;
}

export interface LocationEventDetail {
  lat: number;
  lng: number;
  zoom: number;
  name: string;
  level: string;
}

declare global {
  interface WindowEventMap {
    'datasetChanged': CustomEvent<DatasetEventDetail>;
    'locationChanged': CustomEvent<LocationEventDetail>;
  }
}