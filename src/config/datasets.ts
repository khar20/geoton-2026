export interface Dataset {
  id: string;
  name: string;
  url: string;
  format: 'geojson' | 'shapefile';
  geometryType: 'fill' | 'circle' | 'line';
  color: string;
  description: string;
}

export const datasets: Dataset[] = [
  {
    id: 'centros-poblados',
    name: 'Centros Poblados',
    url: '/data/pi_cpoblado.geojson',
    format: 'geojson',
    geometryType: 'circle',
    color: '#7f8c8d', // Gris
    description: 'Puntos de centros poblados a nivel nacional.'
  },
  {
    id: 'salud',
    name: 'Establecimientos de Salud',
    url: '/data/20250730114336___Hospitales_jul25.zip',
    format: 'shapefile',
    geometryType: 'circle',
    color: '#e74c3c', // Rojo
    description: 'Postas, centros médicos y hospitales.'
  },
  {
    id: 'educacion',
    name: 'Instituciones Educativas',
    url: '/data/20241216123259___Ins_Educ_Fisc_ene_dic_2023.zip',
    format: 'shapefile',
    geometryType: 'circle',
    color: '#3498db', // Azul
    description: 'Colegios públicos y privados.'
  },
  {
    id: 'comisarias',
    name: 'Comisarías',
    url: '/data/peru_internet_comisarias_.zip',
    format: 'shapefile',
    geometryType: 'circle',
    color: '#2ecc71', // Verde
    description: 'Comisarías PNP.'
  },
  {
    id: 'accesibilidad',
    name: 'Vías / Accesibilidad',
    url: '/data/peru_accesibilidad_capitales_.zip',
    format: 'shapefile',
    geometryType: 'line',
    color: '#f39c12', // Naranja
    description: 'Red vial nacional y vecinal.'
  }
];