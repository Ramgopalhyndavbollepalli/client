import * as React from "react";
import { useEffect } from "react";
import MenuComponent from "../MenuComponent/MenuComponent";


export default function LogOutComponent() {


    useEffect(()=>{
        localStorage.removeItem('token')
        window.location.href="/";
    })

  return (
    <div>
        <MenuComponent/>
        <h2>Logged out</h2>
    </div>
  );
}