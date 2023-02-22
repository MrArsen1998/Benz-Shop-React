import { useParams } from 'react-router-dom';

const productsData = [
    {
        id: 1,
        image: "./img/c-class-coupe.png",
        title: "C class Coupe",
        price: "$49,550",
        description: "Appearances can also be revealing"
    },
    {
        id: 2,
        image: "./img/c-class.png",
        title: "C class",
        price: "$43,550",
        description: "Step up your game"
    },
    {
        id: 3,
        image: "./img/e-class-coupe.png",
        title: "E class Coupe",
        price: "$66,100",
        description: "Passionate. Phillarless. Pearless."
    },
    {
        id: 4,
        image: "./img/e-class.png",
        title: "E class",
        price: "$66,100",
        description: "The standart that never stands still"
    },
    {
        id: 5,
        image: "./img/gla-suv.png",
        title: "GLA SUV",
        price: "$37,500",
        description: "To go farther start out ahead"
    },
    {
        id: 6,
        image: "./img/gle-suv.png",
        title: "GLE SUV",
        price: "$57,700",
        description: "Intelligent in nature. Or wherever you take it"
    },
    {
        id: 7,
        image: "./img/gls-suv.png",
        title: "GLS SUV",
        price: "$96,340",
        description: "Room to roam. Strenght to share"
    },
    {
        id: 8,
        image: "./img/s-class.png",
        title: "S class",
        price: "$136,345",
        description: "The heritage of the future in motion"
    },
    {
        id: 9,
        image: "./img/glb-suv.png",
        title: "GLB SUV",
        price: "$39,700",
        description: "Upgrade your ride. Without upsizing"
    }
]


const Product = () => {
    const { id } = useParams();

    const product = productsData.find(el => el.id === +id)
    return (

        <div className='prod-items'>
            <div >

                <img src={"/" + product.image} alt="" className="images" />
                <h4  className='prod-item'>{product.title}</h4>
                <p className='prod-item'>{product.price}</p>
                <p className='prod-item'>{product.description}</p>

            </div>
        </div>
    )
}
export {Product, productsData}