import React, { useState } from 'react';
import mapboxgl, { Marker, maxParallelImageRequests } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoicml3YWh0IiwiYSI6ImNsZ21vMW41YTA3cW8zZW1tdWQ4a2hwNmYifQ.Mm19AWrD9BVC24ZeyJq-Vw';

function RealMap() {
    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 33.8831,
        longitude: 35.4790,
        zoom: 12,
    });

    const [markers, setMarkers] = useState([]);

    const handleViewportChange = (newViewport) => {
        setViewport(newViewport);
    };

    const mapContainerRef = React.useRef(null);

    React.useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/navigation-night-v1',
            center: [viewport.longitude, viewport.latitude],
            zoom: viewport.zoom,
        });
        //define nearby clubs here (7otelon locations for now can later use database)
        const nearbyClubs = [
            { "name": "AHM", latitude: 33.90636145572444, longitude: 35.50666671482372, compatibility: "67%" },
            { "name": "Ballroom Blitz", latitude: 33.898055524466976, longitude: 35.54283545397884, compatibility: "87%" },
            { "name": "Frozen Cherry", latitude: 33.9166371607967, longitude: 35.81332131534039, compatibility: "97%" },
            { "name": "The Gärten", latitude: 33.90405919896705, longitude: 35.505173230680775, compatibility: "89%" },
        ];

        //add markers to map
        const markers = nearbyClubs.map((club) => {
            const marker = new mapboxgl.Marker()
                .setLngLat([club.longitude, club.latitude])
                .setPopup(new mapboxgl.Popup().setHTML(`<h3>${club.name + " " + club.compatibility}</h3>`))
                .addTo(map);
            return marker;
        });
        setMarkers(markers)


        map.on('move', () => {
            handleViewportChange({
                latitude: map.getCenter().lat,
                longitude: map.getCenter().lng,
                zoom: map.getZoom(),
            });
        });

        markers.forEach((marker) => {
            marker.getElement().style.cursor = 'pointer';
            marker.addTo(map);
        });

        //get user location (only displays on map no feedback of current coordinates)
        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                // When active the map will receive updates to the device's location as it changes.
                trackUserLocation: true,
                // Draw an arrow next to the location dot to indicate which direction the device is heading.
                showUserHeading: true
            })
        );
        return () => map.remove();
    }, []);




    return <div ref={mapContainerRef} style={{ width: '100%', height: '1000px' }} />;
}

export default RealMap;

