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
    id: 'hospitales',
    name: 'Hospitales',
    url: '/data/Hospitales.zip',
    format: 'shapefile',
    geometryType: 'circle',
    color: '#e74c3c', // Red points
    description: 'Hospitales del Perú.'
  },
  {
    id: 'centro-poblado-poblacion',
    name: 'Centros Poblados',
    url: '/data/centro-poblado-poblacion.geojson',
    format: 'geojson',
    geometryType: 'circle',
    color: '#2ecc71', // Green points
    description: 'Centros Poblados del Perú.'
  }
];