
import React from "react"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
export default function Screen() {
    return (
        <main className="">
            <Navbar />

            <Outlet  />
           
            <footer>
            <section className="contact">
                <ul>  
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>YouTube</li>
                    <li>Discord</li>
                </ul>
            </section>copyright razebi hardwarek.tn</footer>
        </main>
    )
}