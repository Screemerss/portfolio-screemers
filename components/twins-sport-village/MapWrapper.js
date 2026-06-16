'use client';

import dynamic from 'next/dynamic';

// Dynamic import of the Leaflet Map component with SSR disabled
const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => (
    <div style={{ height: '450px', background: '#0e1122', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>
      Caricamento mappa...
    </div>
  ),
});

export default function MapWrapper() {
  return <LeafletMap />;
}
