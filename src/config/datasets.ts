export interface Dataset {
  id: string;
  name: string;
  url: string;
  format: 'geojson' | 'shapefile';
  geometryType: 'fill' | 'circle' | 'line';
  color: string;
  description: string;
  nameField: string;
  /** Which service category this dataset represents for accessibility analysis */
  serviceCategory?: 'salud' | 'educacion' | 'comisaria';
}

export const datasets: Dataset[] = [
  {
    id: 'centros-poblados',
    name: 'Centros Poblados',
    url: '/data/pi_cpoblado.geojson',
    format: 'geojson',
    geometryType: 'circle',
    color: '#7f8c8d',
    description: 'Puntos de centros poblados a nivel nacional.',
    nameField: 'nombccpp',
  },
  {
    id: 'salud',
    name: 'Establecimientos de Salud',
    url: '/data/20250730114336___Hospitales_jul25.zip',
    format: 'shapefile',
    geometryType: 'circle',
    color: '#e74c3c',
    description: 'Postas, centros médicos y hospitales.',
    nameField: 'NOMBRE',
    serviceCategory: 'salud',
  },
  {
    id: 'educacion',
    name: 'Instituciones Educativas',
    url: '/data/20241216123259___Ins_Educ_Fisc_ene_dic_2023.zip',
    format: 'shapefile',
    geometryType: 'circle',
    color: '#3498db',
    description: 'Colegios públicos y privados.',
    nameField: 'INSTITUC',
    serviceCategory: 'educacion',
  },
  {
    id: 'comisarias',
    name: 'Comisarías',
    url: '/data/peru_internet_comisarias_.zip',
    format: 'shapefile',
    geometryType: 'circle',
    color: '#2ecc71',
    description: 'Comisarías PNP.',
    nameField: 'NOMBRE_COM',
    serviceCategory: 'comisaria',
  },
];

/** Thresholds in km for accessibility classification */
export const ACCESS_THRESHOLDS = {
  good: 2,    // ≤ 2 km — buena accesibilidad
  warn: 5,    // ≤ 5 km — accesibilidad limitada
  // > warn  — carencia
} as const;