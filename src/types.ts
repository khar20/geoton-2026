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

export interface AccessibilityStats {
  centroPoblado: string;
  salud: { distance: number; name: string } | null;
  educacion: { distance: number; name: string } | null;
  comisaria: { distance: number; name: string } | null;
  tripleCarencia: boolean;
}

declare global {
  interface WindowEventMap {
    'datasetChanged': CustomEvent<DatasetEventDetail>;
    'locationChanged': CustomEvent<LocationEventDetail>;
    'accessibilityCalculated': CustomEvent<AccessibilityStats>;
  }
}