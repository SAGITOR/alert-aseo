import React from "react";
import MapaLeaftlet from "../../components/MapaLeaflet";
import AccountLayout from "../../layouts/AccountLayout";
import Routing from "../../components/Routing";

const Rutas = () => {
  return (
    <AccountLayout>
      <MapaLeaftlet height="400px" width="100%">
        <Routing />
      </MapaLeaftlet>
    </AccountLayout>
  );
};

export default Rutas;
