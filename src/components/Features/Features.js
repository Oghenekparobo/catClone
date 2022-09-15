import grass from "../../assets/grass.png";
const Features = () => {
  return (
    <section className="relative">
      <div className=" py-20 px-4 text-center bg-fuchsia-100 mx-2">
        <h1 className="font-bold text-2xl ">WHY CHOOSE US</h1>
        <div className="flex flex-col justify-center items-center space-y-4 py-4">
          <img src={grass} alt="grass" width="35" />
          <p className="opacity-50 font-bold max-w-5xl pb-4">
            THERE ARE MANY VARIATIONS OF PASSAGES OF LOREM IPSUM AVAILABLE, BUT
            THE MAJORITY HAVE SUFFERED ALTERATION IN SOME FORM, BY INJECTED
            HUMOUR.
          </p>
        </div>
      </div>
      <div className="px-4 pt-4 top-[15rem] left-[13%] offer-wrapper flex justify-center items-center md:mx-0 md:absolute">
        <div className="offers grid grid-cols-1 md:grid-cols-2 space-y-6">
          <div className="offer-box bg-white shadow-sm  flex space-x-8 py-8 px-4 w-11/12">
            <div className="offer-logo text-lime-500  relative top-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
                />
              </svg>
            </div>
            <div className="offer-content items-center">
              <h2 className="font-bold text-2xl ">100% Organic Products</h2>
              <p className="max-w-lg text-sm py-2">
                Duis aute irure dolor in reprehenderit voluptate velit esse seds
                cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.
              </p>
            </div>
          </div>
          <div className="offer-box bg-white shadow-sm  flex space-x-8 py-8 px-4 w-11/12">
            <div className="offer-logo text-lime-500  relative top-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
                />
              </svg>
            </div>
            <div className="offer-content items-center">
              <h2 className="font-bold text-2xl ">100% Organic Products</h2>
              <p className="max-w-lg text-sm py-2">
                Duis aute irure dolor in reprehenderit voluptate velit esse seds
                cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.
              </p>
            </div>
          </div>

          <div className="offer-box bg-white shadow-sm  flex space-x-8 py-8 px-4 w-11/12">
            <div className="offer-logo text-lime-500  relative top-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
                />
              </svg>
            </div>
            <div className="offer-content items-center">
              <h2 className="font-bold text-2xl ">100% Organic Products</h2>
              <p className="max-w-lg text-sm py-2">
                Duis aute irure dolor in reprehenderit voluptate velit esse seds
                cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.
              </p>
            </div>
          </div>

          <div className="offer-box bg-white shadow-sm  flex space-x-8 py-8 px-4 w-11/12">
            <div className="offer-logo text-lime-500  relative top-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
                />
              </svg>
            </div>
            <div className="offer-content items-center">
              <h2 className="font-bold text-2xl ">100% Organic Products</h2>
              <p className="max-w-lg text-sm py-2">
                Duis aute irure dolor in reprehenderit voluptate velit esse seds
                cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
