import { useParams } from 'react-router-dom';

const productsData = [
    {
        id: 1,
        image: "./img/c-class-coupe.png",
        image2:"./img/about-c-class-coupe.jpg",
        image3:"./img/performance-c-class-coupe.jpg",
        title: "C class Coupe",
        price: 49550,
        description: "Appearances can also be revealing",
        settings: "Its shape is sharpened. Its stance, assertive. Its details, polished. The C-Class Coupe displays its state-of-the-art innovations and turbocharged power in a muscular frame with the power to seduce.",
        performance: "Solid muscle that's taut in the curves, the C-Class body is the precise rendition of how it feels from behind the wheel. Turbo power and a paddle-shifted 9-speed fuel your spirit, without using much fuel."
    },
    {
        id: 2,
        image: "./img/c-class.png",
        image2:"./img/about-c-class.jpg",
        image3:"./img/performance-c-class.jpg",
        title: "C class",
        price: 43550,
        description: "Step up your game",
        settings: "The classic proportions and tensed muscle tone of a sport sedan envelop a spacious digital cockpit. A perennial favorite leaps into the future, to entice you, engage you, and enthrall you like never before.",
        performance: "Electrified with new mild-hybrid power, the C-Class is more energetic and more energy-conscious. It's more responsive yet more refined, advancing its sport-sedan legacy into a new era of driving fun."
    },
    {
        id: 3,
        image: "./img/e-class-coupe.png",
        image2:"./img/about-e-class-coupe.jpg",
        image3:"./img/performance-e-class-coupe.jpg",
        title: "E class Coupe",
        price: 66100,
        description: "Passionate. Phillarless. Pearless.",
        settings: "The E-Class Coupe is a tradition that never stops leaping ahead. The art of driving is elevated in elegantly sporty style. While the state of the art is advanced by intuitive technology.",
        performance: "The passion of a pillarless coupe is best enjoyed wide-open. An electrified, and electrifying engine brings its agile moves to life, and thrusts a performance legacy into the future."
    },
    {
        id: 4,
        image: "./img/e-class.png",
        title: "E class",
        price: 66100,
        description: "The standart that never stands still"
    },
    {
        id: 5,
        image: "./img/gla-suv.png",
        title: "GLA SUV",
        price: 37500,
        description: "To go farther start out ahead"
    },
    {
        id: 6,
        image: "./img/gle-suv.png",
        title: "GLE SUV",
        price: 57700,
        description: "Intelligent in nature. Or wherever you take it"
    },
    {
        id: 7,
        image: "./img/gls-suv.png",
        title: "GLS SUV",
        price: 96340,
        description: "Room to roam. Strenght to share"
    },
    {
        id: 8,
        image: "./img/s-class.png",
        title: "S class",
        price: 136345,
        description: "The heritage of the future in motion"
    },
    {
        id: 9,
        image: "./img/glb-suv.png",
        title: "GLB SUV",
        price: 39700,
        description: "Upgrade your ride. Without upsizing"
    }
]


const Product = () => {
    const { id } = useParams();

    const product = productsData.find(el => el.id === +id)
    return (

        <div className='prod-items'>
            <div >
                <h4  className='about-item-title'>{product.title}</h4>
                <img src={"/" + product.image2} alt="" className="about-item-image" />
                <h3 className='setting-title'>DESIGN</h3>
                <p className='about-item'>{product.settings}</p>
                <img src={"/" + product.image3} alt="" className="performance-image" />
                <h3 className='setting-title-2'>PERFORMANCE</h3>
                <p className='about-item'>{product.performance}</p>
                
            </div>
        </div>
    )
}
export {Product, productsData}