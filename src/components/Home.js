import React from "react";
import image from "../background.jpg";
import logo from "../logo.png"


export default function Home(){
    return (
    <main>
        <img src={image} alt="Coding Background" className="absolute object -cover w-full h-full"/>
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">  
            <img src={logo} alt="" className="logo"/>
        </section>
    </main>
)
  }