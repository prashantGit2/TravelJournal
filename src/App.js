import React from "react"
import Header from "./components/Header"
import data from "./data.js"
import Card from "./components/Card"
export default function App(){
    let cardArr = data.map(location => 
    <Card 
        key = {location.id}
        {...location}
    />
    
    )
    
    return (
        <div className="page">
            <Header />
            <section className="cards">
                {cardArr}
            </section>
        </div>
    )
}