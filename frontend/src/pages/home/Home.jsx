import {Navbar} from "../../common/navbar/Navbar.jsx";
import {Slider} from "../../common/carousel/Slider.jsx";

export const Home = () => {
    return (
        <>
            <Navbar/>
            <section className="m-3" style={{height:"80vh"}}>
                <Slider/>
            </section>
        </>
    )
}