import { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

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
            >
            <Popup>
                <strong>{local.nome}</strong>
                <p>{local.descricao}</p>

            </Popup>
            </Marker>
        ))}
    </>
}

