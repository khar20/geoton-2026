export interface ActiveDataset {
  id: string;
  url: string;
  name: string;
  format: 'geojson' | 'shapefile';
  geometryType: 'fill' | 'circle' | 'line';
  color: string;
  nameField: string;
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

export interface ServiceResult {
  distance: number;
  name: string;
}

export interface AccessibilityStats {
  centroPoblado: string;
  salud: ServiceResult | null;
  educacion: ServiceResult | null;
  comisaria: ServiceResult | null;
  tripleCarencia: boolean;
  /** [lng, lat] of the selected centro poblado */
  coords?: [number, number];
}

export interface ThresholdEventDetail {
  thresholdKm: number;
}

export interface ScanTripleCarenciaDetail {
  thresholdKm: number;
}

export interface TripleCarenciaResultDetail {
  count: number;
  total: number;
  thresholdKm: number;
}

declare global {
  interface WindowEventMap {
    'datasetChanged': CustomEvent<DatasetEventDetail>;
    'locationChanged': CustomEvent<LocationEventDetail>;
    'accessibilityCalculated': CustomEvent<AccessibilityStats>;
    'thresholdChanged': CustomEvent<ThresholdEventDetail>;
    'scanTripleCarencia': CustomEvent<ScanTripleCarenciaDetail>;
    'tripleCarenciaResult': CustomEvent<TripleCarenciaResultDetail>;
  }
}