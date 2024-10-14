import { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import L from 'leaflet'
import markerIcon from '../../assets/pin-green.png'
import shadowIcon from '../../assets/pin-shadow.png'

const customMarkerIcon = new L.Icon({
    iconUrl: markerIcon,
    shadowUrl: shadowIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

export function Marcadores({ locais }){

    const map = useMap()

    useEffect(() =>{ 
        if(locais.length > 0) {
            const primeirolocal = locais[0]

            map.flyTo({
                lat: primeirolocal.latitude,
                lng: primeirolocal.longitude,
            },
            13,
            { animate: true },
        )
        }  
    }, [locais, map])

    return <>
        {locais.map(local =>(
         <Marker
            key={local.id}
            position={[parseFloat(local.latitude), parseFloat(local.longitude)]}
            icon={customMarkerIcon}
            >
            <Popup>
                <strong>{local.nome}</strong>
                <p>{local.descricao}</p>

            </Popup>
            </Marker>
        ))}
    </>
}
