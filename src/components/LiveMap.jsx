import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const LiveMap = ({ pickupCoords, dropoffCoords }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: pickupCoords,
      zoom: 11,
    });

    new mapboxgl.Marker({ color: 'gold' }).setLngLat(pickupCoords).addTo(map);
    new mapboxgl.Marker({ color: 'black' }).setLngLat(dropoffCoords).addTo(map);

    return () => map.remove();
  }, [pickupCoords, dropoffCoords]);

  return <div ref={mapContainerRef} className="w-full h-96 mt-4 rounded border shadow" />;
};

export default LiveMap;
