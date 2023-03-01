import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken =
    'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';


const Map = (props) => {
    console.log(props.coordinate)
    const mapContainerRef = useRef(null);

    // Initialize map when component mounts
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
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
                'type': 'FeatureCollection',
                'features': [
                    {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'LineString',
                            'properties': {},
                            'coordinates': props.coordinate
                        },
                    }
                ]
            }
            map.addSource('route', {
                'type': 'geojson',
                'data': geojson
            })

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

            // Center map
            const coordinates = geojson.features[0].geometry.coordinates;
            const bounds = new mapboxgl.LngLatBounds(
                coordinates[0],
                coordinates[0]
            );
            for (const coord of coordinates) {
                bounds.extend(coord);
            }
            map.fitBounds(bounds, {
                padding: 20
            });
        });
        // Clean up on unmount
        return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className='rounded-r-lg rounded-l-lg mb-5 map-container' ref={mapContainerRef} />
    );
};

export default Map;