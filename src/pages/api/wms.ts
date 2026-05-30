import type { APIRoute } from 'astro';
import { datasets } from '../../config/datasets';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const datasetId = url.searchParams.get('dataset');
  const bbox = url.searchParams.get('bbox');

  if (!datasetId || !bbox) {
    return new Response('Missing dataset or bbox parameters', { status: 400 });
  }

  const dataset = datasets.find(d => d.id === datasetId);
  if (!dataset) {
    return new Response('Dataset not found', { status: 404 });
  }

  // construct the full WMS GetMap URL
  const targetUrl = `${dataset.targetBaseUrl}&bbox=${bbox}&width=256&height=256&srs=EPSG:3857&format=image/png&transparent=true`;

  try {
    const response = await fetch(targetUrl);

    if (!response.ok) {
      throw new Error(`WMS Server responded with ${response.status}`);
    }

    const buffer = await response.arrayBuffer();

    // return the image securely to the frontend
    return new Response(buffer, {
      status: 200,
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'image/png',
        'Cache-Control': 'public, max-age=3600', // cache tiles for 1 hour
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    console.error('WMS Proxy Error:', error);
    return new Response('Error fetching WMS data', { status: 500 });
  }
};