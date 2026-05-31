export interface ActiveDataset {
  id: string;
  url: string;
  name: string;
  format: 'geojson' | 'shapefile';
  geometryType: 'fill' | 'circle' | 'line';
  color: string;
}

export interface DatasetEventDetail {
  activeDatasets: ActiveDataset[];
}

export interface LocationEventDetail {
  lat: number;
  lng: number;
  zoom: number;
  name: string;
  level: string;
}

export interface FeatureClickEventDetail {
  title: string;
  properties: Record<string, any>;
  geometry: any;
  geometryType: 'fill' | 'circle' | 'line';
}

declare global {
  interface WindowEventMap {
    'datasetChanged': CustomEvent<DatasetEventDetail>;
    'locationChanged': CustomEvent<LocationEventDetail>;
    'featureClicked': CustomEvent<FeatureClickEventDetail>;
  }
}