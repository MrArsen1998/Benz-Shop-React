import {productsData} from "./Product";
import { Link } from "react-router-dom";


export default function Main({addToCard}){
    return(
        <div className="main">
            <div className="presentation"></div>
            {productsData.map((el) => {
                return(
                    
                    <div key={el.id} className = 'main'>
                        <div className="card">
                            <img src={el.image} alt="No data" className="images" />
                            <div className="text_box">
                                <Link to = {`/product/${el.id}`}><h4>{el.title}</h4></Link>
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