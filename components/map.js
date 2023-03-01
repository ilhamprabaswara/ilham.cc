import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
    'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';


const Map = (props) => {

    const mapContainerRef = useRef(null);

    const [lng, setLng] = useState(5);
    const [lat, setLat] = useState(34);
    const [zoom, setZoom] = useState(15);
    // Initialize map when component mounts
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: props.coordinate[0],
            zoom: zoom
        });
        map.on('load', () => {
            map.addSource('route', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': props.coordinate
                    }
                }
            });
            map.addLayer({
                'id': 'route',
                'type': 'line',
                'source': 'route',
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                'paint': {
                    'line-color': '#fc4c02',
                    'line-width': 3
                }
            });
            // map.fitBounds([
            //     props.coordinate[0],
            //     props.coordinate[1],
            // ]);
        });
        // Clean up on unmount
        return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div>
            <div className='map-container' ref={mapContainerRef} />
        </div>
    );
};

export default Map;