import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const level = url.searchParams.get('level') || 'National';
  const area = url.searchParams.get('area') || 'Perú';
  const datasets = url.searchParams.get('datasets')?.split(',') || [];

  // todo: add real logic

  const results = datasets.map(ds => {
    // mock
    const baseValue = level === 'National' ? 10000 : level === 'Departamento' ? 1000 : 100;
    const randomVariance = Math.floor(Math.random() * 50);

    return {
      datasetId: ds,
      datasetName: ds === 'senamhi-data' ? 'Climate Stations' : 'Health Connectivity',
      value: baseValue + randomVariance,
      metric: ds === 'senamhi-data' ? 'Active Stations' : 'Connected Centers',
      trend: Math.random() > 0.5 ? '+5%' : '-2%'
    };
  });

  return new Response(JSON.stringify({
    area,
    level,
    stats: results
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};