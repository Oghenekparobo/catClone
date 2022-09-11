import Carousel from "react-bootstrap/Carousel";
import corn from "../../assets/corn.jpg";
import cashew from "../../assets/cashew.jpg";
import general from "../../assets/general.jpg"
import {BiStreetView} from 'react-icons/bi';

function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className="relative">
          <img
            className="d-block w-100 h-[40rem]   object-cover"
            src={corn}
            alt="First slide"
          />
          <div className="caption hidden   relative bottom-60 text-red-500 z-50 md:block ">
            <Carousel.Caption>
              <div className="content">
                <h3 className="font-bold border-2 border-slate-500 w-[45rem] tracking-widest py-8 px-2 text-6xl ml-44 ">
                  ORGANIC STORE
                </h3>
                <p className="font-bold capitalize py-2">
                  fruits ~ vegetable ~ vibes ~ style
                </p>
                <p className="font-bold capitalize">
                  providing services that you will use and say it's going
                </p>
              </div>
            </Carousel.Caption>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 mix-blend-multiply"></div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="">
          <div className="relative">
            <img
              className="d-block w-100 h-[40rem]   object-cover"
              src={cashew}
              alt="First slide"
            />
            <div className="caption hidden   relative bottom-60 text-red-500 z-50 md:block ">
              <Carousel.Caption>
                <div className="flex justify-end text-left">
                  <div className="content">
                    <h3 className="tracking-wide text-5xl max-w-xl font-bold py-4">
                      GET SPECIAL DUMMY PACK WITH 50% OFF YIKES!
                    </h3>
                    <p className="max-w-xl font-bold pb-4">
                      great explorer of the truth, the master builder of human
                      happiness, no seed one rejects, becomes dislike or avoid
                      pleasure itself
                    </p>
                    <button className="bg-lime-500 text-white font-bold py-2 px-4">SHOP NOW</button>
                  </div>
                </div>
              </Carousel.Caption>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 mix-blend-multiply"></div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="relative">
          <img
            className="d-block w-100 h-[40rem]   object-cover"
            src={general}
            alt="First slide"
          />
          <div className="caption hidden   relative bottom-60 text-red-500 z-50 md:block ">
            <Carousel.Caption>
              <div className="content">
             
                <div className="font-bold text-white flex justify-center items-center space-x-4 text-xl tracking-tighter">
                  <span>we provide</span> <span><BiStreetView/></span> <span>100% organic</span>
                </div>

                <h3 className="tracking-wide text-5xl  font-bold py-4">
                      GET SPECIAL DUMMY PACK WITH 50% OFF YIKES!
                    </h3>
               
                <p className="font-bold pb-4 text-sm">
                      great explorer of the truth, the master builder of human
                      happiness, no seed one rejects, becomes dislike or avoid
                      pleasure itself
                    </p>
                <p className="font-bold italic text-sm">
                  izz going
                </p>
              </div>
            </Carousel.Caption>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 mix-blend-multiply"></div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
