import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiaWxoYW1wIiwiYSI6ImNsZW9nbnE3bjAyNzczem81OXJxdjZxdWIifQ.0gPq9r5_gN65kaxtndN2dA';

const Map = (props) => {
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      interactive: false,
    });

    map.on('load', () => {
      // map.addSource('route', {
      //     'type': 'geojson',
      //     'data': {
      //         'type': 'Feature',
      //         'properties': {},
      //         'geometry': {
      //             'type': 'LineString',
      //             'coordinates': props.coordinate
      //         }
      //     }
      // });

      const geojson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'LineString',
              properties: {},
              coordinates: props.coordinate,
            },
          },
        ],
      };
      map.addSource('route', {
        type: 'geojson',
        data: geojson,
      });

      map.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#fc4c02',
          'line-width': 3,
        },
      });

      // Center map
      const coordinates = geojson.features[0].geometry.coordinates;
      const bounds = new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]);
      for (const coord of coordinates) {
        bounds.extend(coord);
      }
      map.fitBounds(bounds, {
        animate: false,
        padding: 30,
      });
    });
    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return <div className="mb-5 h-[300px]" ref={mapContainerRef} />;
};

export default Map;
