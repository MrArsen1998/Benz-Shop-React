import {productsData} from "./components/product/Product";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Main({addToCard}){

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setCars(data)
        })
    }, []) 
    
    
    return(
        <div className="main">
            <div className="presentation"></div>
            {cars.map((el) => {
                return(
                    
                    <div key={el.ID} className = 'main'>
                        <div className="card">
                            <img src={el.image} alt="No data" className="images" />
                            <div className="text_box">
                                <Link to = {`/product/${el.ID}`}><h4>{el.title}</h4></Link>
                                <p className="price">{el.price}$</p>
                                <p className="description">{el.description}</p>
                            </div>
                            <button onClick={() => addToCard(el)} className="add_button">Add to Card</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}