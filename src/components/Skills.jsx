import meter1 from "../assets/img/basic-frontend.svg";
import meter2 from "../assets/img/tailwind.svg";
import meter3 from "../assets/img/react.svg";
import meter4 from "../assets/img/version-control.svg";
import meter5 from "../assets/img/responsive-design.svg";
import meter6 from "../assets/img/ux-ui.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I have a wide range of skills that I have gained through both academic and professional experiences. <br /> This is an important skill I have.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider pl-5 pr-5">
                            <div className="item mt-1"> 
                                <img src={meter1} alt="Image" />
                                <h5 className="mt-3">Basic Frontend</h5>
                            </div>
                            <div className="item mt-3">
                                <img src={meter2} alt="Image"/>
                                <h5 className="mt-4">Tailwindcss</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5 className="mt-3">React</h5>
                            </div>
                            <div className="item mt-4">
                                <img src={meter4} alt="Image" />
                                <h5 className="mt-3">Version Control</h5>
                            </div>
                            <div className="item mt-4">
                                <img src={meter5} alt="Image" />
                                <h5 className="mt-3">Responsive Design</h5>
                            </div>
                            <div className="item mt-3">
                                <img src={meter6} alt="Image" />
                                <h5 className="mt-3">UX/UI Design</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}
