import React from "react";
import data from "./data";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function cardRender(item){
  return <Card 
        key={item.id}
        {...item}/>
}

function App(){
  
  return <div>
    <Navbar/>
    {data.map(cardRender)}
  </div>

}

export default App