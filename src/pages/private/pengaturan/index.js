import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Penggauna from "./pengguna";
import Toko from "./toko";

function Pengaturan() {
  return (
    <Switch>
      <Route path="/pengaturan/pengguna" component={Penggauna} />
      <Route path="/pengaturan/toko" component={Toko} />

      {/* Digunakan saat ada yang mengakses URL halaman/pengaturan saja */}
      <Redirect to="/pengaturan/pengguna" />
    </Switch>
  );
}

export default Pengaturan;
