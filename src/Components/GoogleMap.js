import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";

import   Autocomplete  from "react-google-autocomplete";
import { usePlacesWidget } from "react-google-autocomplete";
import Geocode from "react-geocode";

import Marker from "../assets/marker-google-map-png-Transparent-Images.png";

const AnyReactComponent = ({ text }) => {
  return (
    <>
      <div className="">
        
        <img style={{draggable:"true"}} src={Marker} alt="" className="logo"   />
      </div>
    </>
  );
};

export function GoogleMap({ latitude, longitude }) {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [currentPosition, setCurrentPosition] = useState({});
  const [address, setAddress] = useState();
  // const [newAddress, setNewAddress] = useState();

  Geocode.setApiKey("AIzaSyA0qhEhmmi_8XUbZAln4_2XSD2re04qizA");
  Geocode.setLanguage("en");
  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });

  const PrintCoordinates = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      // setStatus("Locating...");
      setLat(currentPosition.lat);
      setLng(currentPosition.lng);
    }
  };

  const handleDragEnd = (event) => {
    console.log(event);
    console.log(event.latLng.lat());
    
    Geocode.fromLatLng(event.latLng.lat(), event.latLng.lng()).then(
      (response) => {
        const address = response.results[0].formatted_address;
        setAddress(address);
      },
      (error) => {
        console.error(error);
      }
    );
    console.log(Geocode.formatted_address);

  };
  Geocode.fromAddress("Eiffel Tower").then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      // console.log(lat, lng);
    },
    (error) => {
      console.error(error);
    }
  );
  const { ref } = usePlacesWidget;
  

  const RenderMarkers=(map, maps,ref)=> {
    let marker = new maps.Marker({
      position: currentPosition,
      map,
      title: "Location",
      draggable: true,
    });
    marker.addListener("dragend", handleDragEnd);
    // marker.setPosition(setCurrentPosition({
    //   lat: place.geometry.location.lat(),
    //   lng: place.geometry.location.lng(),
    // }));
    
    console.log(marker);
    
    // console.log(marker);
    return marker;
  }

  return (
    <>
      <div style={{ height: "300px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA0qhEhmmi_8XUbZAln4_2XSD2re04qizA" }}
          center={currentPosition}
          defaultZoom={13}
         
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps}) => RenderMarkers(map, maps)}
        >
         
          <AnyReactComponent
            // lat={28.6183637}
            lat={currentPosition.lat}
            // lng={77.3784426}
            lng={currentPosition.lng}
            text="My Marker"
            
           
            
          />
          
        </GoogleMapReact>
      </div>

      <div style={{ marginTop: "50px", width: "100%" }}>
        {" "}
        <button onClick={PrintCoordinates}>Print lat & lng</button>
        {/* <input type="text" ref={inputRef} /> <br /> */}
        <p>{status}</p>
        {lat && <p>Latitude: {lat}</p>}
        {lng && <p>Longitude: {lng}</p>}
        <Autocomplete
          style={{ marginTop: "50px", width: "30%", height: "5vh" }}
          apiKey={"AIzaSyA0qhEhmmi_8XUbZAln4_2XSD2re04qizA"}
          // address={address}
          onPlaceSelected={(place) => {
            console.log(place);
             
            setCurrentPosition({
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            });
            setAddress(place.formatted_address);
          }}
        />
        <h3>Address=[ {address} ]</h3>
      </div>
    </>
  );
}

export default GoogleMap;
