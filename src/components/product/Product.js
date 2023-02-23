import { useParams } from 'react-router-dom';
import './product.css'

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
        image2:"./img/about-e-class.jpg",
        image3:"./img/performance-e-class.jpg",
        title: "E class",
        price: 66100,
        description: "The standart that never stands still",
        settings: "The E-Class body always reflects its soul. So its many enhancements are wrapped in a timelessly modern design. A sporty grille and LED headlamps lead the way, while the shapely LED taillamps leave a lasting impression.",
        performance: "The measure of an E-Class is how it moves, and the way it moves you. Agile and athletic, it's engineered and tuned to evoke your confidence and inspire your joy on city streets, open highways, and the road to the future."
    },
    {
        id: 5,
        image: "./img/gla-suv.png",
        image2:"./img/about-gla-suv.jpg",
        image3:"./img/performance-gla-suv.jpg",
        title: "GLA SUV",
        price: 37500,
        description: "To go farther start out ahead",
        settings: "More than a commanding view of the road ahead, the GLA offers a rewarding view of what's next. It not only puts more sport in compact SUVs, it puts more you.",
        performance: "From a tight corner of the city, to a tight corner of a back road, the GLA is agile and easy to maneuver. Turbo power and a solid stance make it quick on its feet, confident in your hands."
    },
    {
        id: 6,
        image: "./img/gle-suv.png",
        image2:"./img/about-gle-suv.jpg",
        image3:"./img/performance-gle-suv.jpg",
        title: "GLE SUV",
        price: 57700,
        description: "Intelligent in nature. Or wherever you take it",
        settings: "The luxury SUV that started the segment continues to lead the way. Roomy and refined, it's also agile and aerodynamic. And from LED headlamps to a bold yet elegant cabin, it wraps first-in-class tech in finely tailored style.",
        performance: "Countless SUV firsts came to market with the GLE's previous generations. The 2023 GLE's advanced performance, efficiency, handling and capability aim to benefit future generations. All while inspiring drivers in the here and now."
    },
    {
        id: 7,
        image: "./img/gls-suv.png",
        image2:"./img/about-gls-suv.jpg",
        image3:"./img/performance-gls-suv.jpg",
        title: "GLS SUV",
        price: 96340,
        description: "Room to roam. Strenght to share",
        settings: "In an ever-more-crowded field of luxury SUVs, treat yourself to some room. The sleek, spacious GLS wraps class-leading innovations in bold yet elegant style.",
        performance: "GLS capability has many dimensions, but they all aim to outmeasure any other large luxury SUV. Rigid standards create a flexible vehicle that's spacious yet agile. At home on a trail, with a trailer, or coddling you in its fine tailoring."
    },
    {
        id: 8,
        image: "./img/s-class.png",
        image2:"./img/about-s-class.jpg",
        image3:"./img/performance-s-class.jpg",
        title: "S class",
        price: 136345,
        description: "The heritage of the future in motion",
        settings: "Signature details, majestic proportions and a windswept sportiness unite in a line of sedans that's undeniably modern yet unmistakably an S-Class. The gleaming Star stands proud above the iconic grille, a beacon of inspiration for all cars to follow.",
        performance: "Forward-thinking performance pairs turbo and electric boost for more than 400 hp in every model. Two 4MATIC sedans can precisely meter their torque to all four air-suspended wheels for year-round confidence."
    },
    {
        id: 9,
        image: "./img/glb-suv.png",
        image2:"./img/about-glb-suv.jpg",
        image3:"./img/performance-glb-suv.jpg",
        title: "GLB SUV",
        price: 39700,
        description: "Upgrade your ride. Without upsizing",
        settings: "Has any SUV ever fit so much into such a compact package? Seating for up to seven. Rugged in all the right places. Looks to match. So smart it can carry on a conversation, and carry out your wishes. And all priced to please.",
        performance: "It can take you new places, or make old favorite roads feel fresh. It can take up to six of your friends, or make easy work of the weekend chores. And wherever you take it, it'll outperform to make every mile memorable."
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