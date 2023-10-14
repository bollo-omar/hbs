import { Carousel } from 'react-responsive-carousel';
import img1 from "../../assets/images/img-1.jpg"
import img2 from "../../assets/images/img-2.jpg"
import img3 from "../../assets/images/img-2.jpg"

export const Slider = () => {
    return (
        <>
            <Carousel autoPlay={true} interval={5000} infiniteLoop={true}>
                <div>
                    <img src={img1} alt="img"  className="img-fluid"/>
                    <p className="legend">Image 1</p>
                </div>
                <div>
                    <img src={img2} alt="img" className="img-fluid"/>
                    <p className="legend">Image 2</p>
                </div>
                <div>
                    <img src={img3} alt="img" className="img-fluid"/>
                    <p className="legend">Image 2</p>
                </div>
            </Carousel>
        </>
    )
}