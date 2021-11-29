import Cards from "../components/Cards"
import Slider from "../components/Slider"

const Home = () => {
    return (
        <div>
            <Slider/>
            <div className = 'container'>
                <div className = 'title'>
                    <h1>Наши Преимущества</h1>
                </div>
            <Cards/>
            </div>
        </div>
    )
}
export {Home}