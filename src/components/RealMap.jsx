import React, { useState } from 'react';
import mapboxgl, { Marker, maxParallelImageRequests } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoicml3YWh0IiwiYSI6ImNsZ21vMW41YTA3cW8zZW1tdWQ4a2hwNmYifQ.Mm19AWrD9BVC24ZeyJq-Vw';

function RealMap() {
    const genres = new Set(["pop", "r&b", "soul", "hip-hop", "rock", "country", "edm", "house", "electronic", "latin"]);
    const currGenre = localStorage.getItem("genre");
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
        const allClubs = [
            { "name": "AHM", latitude: 33.90636145572444, longitude: 35.50666671482372, genres: ["pop", "electronic", "soul", "house"] },
            { "name": "Ballroom Blitz", latitude: 33.898055524466976, longitude: 35.54283545397884, genres: ["pop", "r&b", "house", "edm"] },
            { "name": "Frozen Cherry", latitude: 33.9166371607967, longitude: 35.81332131534039, genres: ["pop", "r&b", "hip-hop"] },
            { "name": "The Gärten", latitude: 33.90405919896705, longitude: 35.505173230680775, genres: ["pop", "soul", "country", "latin"] },
            { "name": "The Grand Factory", latitude: 33.9001564148395, longitude: 35.544151882407235, genres: ["pop", "electronic", "rock"] },
            { "name": "White Beirut", latitude: 33.89761507430294, longitude: 35.557965499999995, genres: ["country", "edm", "house", "soul"] },
            { "name": "Caprice", latitude: 33.89750868308361, longitude: 35.558021515341316, genres: ["soul", "country", "electronic"] },
            { "name": "Posh Club", latitude: 33.897701873668396, longitude: 35.54145618465868, genres: ["pop", "rock", "latin"] },
            { "name": "Karma Beirut", latitude: 33.896734558860366, longitude: 35.522307830682635, genres: ["house", "r&b", "edm"] },
            { "name": "Tiaga Beirut", latitude: 33.88929851013777, longitude: 35.50777393863472, genres: ["pop", "soul", "country", "hip-hop"] },
            { "name": "Tiaga Batroun", latitude: 34.25615266602302, longitude: 35.66052190738923, genres: ["pop", "soul", "country", "hip-hop"] },
            { "name": "Sunrise Beirut", latitude: 33.89551817983631, longitude: 35.5200868808091, genres: ["pop", "r&b", "electronic", "house"] },
            { "name": "Raw Beirut", latitude: 33.89721196899911, longitude: 35.562068007389236, genres: ["pop", "latin", "edm", "house"] },
            { "name": "Projekt", latitude: 33.911198459150526, longitude: 35.57885855397605, genres: ["r&b", "soul", "hip-hop"] },
            { "name": "ARCH Beirut", latitude: 33.8948249720217, longitude: 35.54854892329341, genres: ["pop", "r&b", "electronic", "soul"] },
            { "name": "Pitch Black", latitude: 33.88614903181012, longitude: 35.54539813863473, genres: ["r&b", "soul", "edm", "house"] },
            { "name": "Pitch Blue", latitude: 33.90171978494907, longitude: 35.47448299092219, genres: ["pop", "country", "latin"] },
            { "name": "B 018", latitude: 33.89916368386137, longitude: 35.53468086875451, genres: ["pop", "r&b", "soul", "hip-hop"] },
            { "name": "NOA Rooftop", latitude: 33.97445170144153, longitude: 35.60907770795209, genres: ["hip-hop", "rock", "edm", "house"] },
            { "name": "Castello Halat", latitude: 34.089510415220055, longitude: 35.65226365341318, genres: ["soul", "country", "rock", "latin"] },
            { "name": "ACE The Club", latitude: 34.10680011062868, longitude: 35.65460785341319, genres: ["pop", "house", "electronic", "edm"] },
            { "name": "ODD Rooftop", latitude: 34.21238131240847, longitude: 35.65028092273055, genres: ["house", "latin", "electronic"] },
            { "name": "Phantom Zahleh", latitude: 33.83183345899651, longitude: 35.90361495397604, genres: ["pop", "rock", "hip-hop", "country"] },
            { "name": "Seen Beirut", latitude: 33.94454124879371, longitude: 35.590866792047905, genres: ["hip-hop", "r&b", "soul", "electronic"] },
            { "name": "Etiolle the Club", latitude: 34.254252974379796, longitude: 35.66024916931737, genres: ["pop", "latin", "edm", "country"] },
        ];

        //get nearby clubs based on genre 
        var nearbyClubs = [];
        if (genres.has(currGenre)) {
            for (var i = 0; i < allClubs.length; i++) {
                if (allClubs[i].genres.includes(currGenre)) {
                    nearbyClubs.push(allClubs[i]);
                }
            }
        }

        else {
            nearbyClubs = allClubs;
        }

        //add markers to map
        const markers = nearbyClubs.map((club) => {


            const marker = new mapboxgl.Marker()
                .setLngLat([club.longitude, club.latitude])
                .setPopup(new mapboxgl.Popup().setHTML(`<h3>${club.name}</h3>`))
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

