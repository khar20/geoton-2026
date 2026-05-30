export interface Dataset {
  id: string;
  name: string;
  targetBaseUrl: string;
  clientUrl: string;
  description: string;
}

export const datasets: Dataset[] = [
  {
    id: 'senamhi-data',
    name: 'SENAMHI Dataset',
    targetBaseUrl: 'https://idesep.senamhi.gob.pe:443/geoserver/g_08_01/08_01_013_03_001_532_0000_00_00/ows?service=WMS&version=1.1.1&request=GetMap&layers=g_08_01:08_01_013_03_001_532_0000_00_00',
    clientUrl: '/api/wms?dataset=senamhi-data&bbox={bbox-epsg-3857}',
    description: 'National climate data from SENAMHI.'
  },
  {
    id: 'minsa-salud',
    name: 'GeoPeru Conectividad Salud',
    targetBaseUrl: 'https://espacialg.geoperu.gob.pe/geoserver/geoperu/peru_conect_salud_/wms?service=WMS&version=1.1.1&request=GetMap&layers=geoperu:peru_conect_salud_',
    clientUrl: '/api/wms?dataset=minsa-salud&bbox={bbox-epsg-3857}',
    description: 'Health connectivity data from GeoPeru.'
  }
];