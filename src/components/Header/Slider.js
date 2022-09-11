import Carousel from "react-bootstrap/Carousel";
import corn from "../../assets/corn.jpg";
import cashew from "../../assets/cashew.jpg";
import general from "../../assets/general.jpg";
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

          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-300 mix-blend-multiply"></div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="relative">
          <img
            className="d-block w-100 h-[40rem]   object-cover"
            src={cashew}
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

          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-300 mix-blend-multiply"></div>
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

          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-300 mix-blend-multiply"></div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
