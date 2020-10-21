import React from "react";
import { Switch, Route } from "react-router-dom";

//Komponen halaman private
import Pengaturan from "./pengaturan";
import Produk from "./produk";
import Transaksi from "./transaksi";
import Home from "./home";

function Private() {
  return (
    <Switch>
      <Route path="/produk" component={Produk} />
      <Route path="/transaksi" component={Transaksi} />
      <Route path="/pengaturan" component={Pengaturan} />

      {/* 
       - Route home ini harus diletakkan ke paling bawah ya, 
       - supaya tidak redirect ke halaman Home terus
      */}
      <Route component={Home} />
    </Switch>
  );
}

export default Private;
