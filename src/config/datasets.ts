export const datasets = [
  {
    id: 'senamhi-data',
    name: 'SENAMHI Dataset',
    wmsUrl: 'https://idesep.senamhi.gob.pe:443/geoserver/g_08_01/08_01_013_03_001_532_0000_00_00/ows?service=WMS&version=1.1.1&request=GetMap&layers=g_08_01:08_01_013_03_001_532_0000_00_00&bbox={bbox-epsg-3857}&width=256&height=256&srs=EPSG:3857&format=image/png&transparent=true',
    description: 'National climate data from SENAMHI.'
  },
  {
    id: 'minsa-salud',
    name: 'GeoPeru Conectividad Salud',
    wmsUrl: 'https://espacialg.geoperu.gob.pe/geoserver/geoperu/peru_conect_salud_/wms?service=WMS&version=1.1.1&request=GetMap&layers=geoperu:peru_conect_salud_&bbox={bbox-epsg-3857}&width=256&height=256&srs=EPSG:3857&format=image/png&transparent=true',
    description: 'Health connectivity data from GeoPeru.'
  }
];