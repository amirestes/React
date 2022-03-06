import React from "react"
import Header from "./components/Header"
import data from "./data"
import Card from "./components/Card"

export default function App() { 
    const cards = data.map((item) => {
        return (
            <Card 
                key={item.id}
                item={item}
            />
        )
    })   
        return (
            <div>
                <Header />
                <section className="cards-list">
                    {cards}
                    
                </section>
            </div>
        )
}