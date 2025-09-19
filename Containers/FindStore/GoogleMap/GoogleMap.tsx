import React from "react";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";

const GoogleMap = () => {
  // const branch = useSelector((state: any) => state.branch.branch);
  // let lat;
  // let lng;
  // if (branch?.length > 0) {
  //   lat = branch[0]?.lat;
  //   lng = branch[0]?.lon;
  // }

  // console.log("lat", lat);
  // console.log("lng", lng);

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 9,
  };

  return (
    <div className="google-map-container flex-1 w-full h-[90vh] mt-10">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCwliPAwa4UxcftD8RLxq2825G6_wxgjhQ" }}
        defaultCenter={{
          lat: 51.1152,
          lng: 0.1893,
        }}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
