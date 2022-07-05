import { Skeleton } from '@mui/material';
import {
    useJsApiLoader,
    GoogleMap,
    Marker,
} from '@react-google-maps/api';



const GoogleMaps = ({ lat, lng,size }) => {
    let center;

     center = {
        lat,
        lng,
    }

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyDzUXtU-clnP7xX4Y8N5bVP6kYWEo0_b2o",
    })

    if (!isLoaded) {
        return <Skeleton animation="wave" />
    }

    return (
        <>
            <div className="d-flex position-relative flex-column align-items-center" style={{
                height: size==="big"?'50vh':'28vh',
                width: '100%',
            }}>

                <div className="d-flex flex-column align-items-center" style={{
                    zIndex: "9999",
                }}>
                </div>
                <GoogleMap center={center} zoom={15} mapContainerStyle={{
                    height: '100%',
                    width: '100%',
                }}
                >
                    <Marker position={center} />
                </GoogleMap>
            </div>
        </>
    )
}

export default GoogleMaps

