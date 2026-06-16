'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function LeafletMap() {
  const mapContainerRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;
    
    // Avoid double initialization in React StrictMode
    if (mapInstance.current) return;

    const coordinates = [37.7554, 14.3688]; 
    
    const map = L.map(mapContainerRef.current, {
      center: coordinates,
      zoom: 14,
      scrollWheelZoom: false,
      dragging: !L.Browser.mobile,
      tap: !L.Browser.mobile
    });
    
    mapInstance.current = map;

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map);

    const customIcon = L.divIcon({
      className: 'custom-map-marker',
      html: `<div style="
          width: 20px; 
          height: 20px; 
          background-color: #ff5722; 
          border: 3px solid #fff; 
          border-radius: 50%;
          box-shadow: 0 0 15px #ff5722;
          position: relative;
      ">
          <div style="
              position: absolute;
              width: 40px;
              height: 40px;
              background: rgba(255, 87, 34, 0.25);
              border-radius: 50%;
              top: -13px;
              left: -13px;
              animation: pulse-ring 2s infinite;
          "></div>
      </div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });

    const marker = L.marker(coordinates, { icon: customIcon }).addTo(map);
    
    marker.bindPopup(`
      <div style="font-family: 'Outfit', sans-serif; text-align: center;">
        <h4 style="margin: 0 0 4px; color: #ff5722; font-weight: bold; font-size: 0.95rem;">TWINS SPORT VILLAGE</h4>
        <p style="margin: 0; font-size: 0.75rem; color: #9ca3af; line-height: 1.4;">Contrada S. Paolo Bosco sn<br>Nicosia (EN), Sicilia</p>
        <a href="https://maps.google.com/?q=TWINS+SPORT+VILLAGE+Nicosia" target="_blank" style="
            display: inline-block; 
            margin-top: 8px; 
            font-size: 0.75rem; 
            color: #00e5ff; 
            text-decoration: none; 
            font-weight: bold;
        ">Ottieni Indicazioni &rarr;</a>
      </div>
    `).openPopup();

    map.on('focus', () => {
      map.scrollWheelZoom.enable();
    });
    map.on('blur', () => {
      map.scrollWheelZoom.disable();
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="map-section">
      <div className="map-overlay">
        <div className="map-label">
          <i className="fa-solid fa-map-pin"></i>
          <span>TWINS SPORT VILLAGE</span>
        </div>
      </div>
      <div ref={mapContainerRef} style={{ height: '450px', width: '100%', zIndex: 1 }}></div>
    </div>
  );
}
