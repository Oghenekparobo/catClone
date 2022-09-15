import grass from "../../assets/grass.png";
const Features = () => {
  return (
    <section>
      <div className=" py-8 px-4 text-center bg-fuchsia-100 mx-2">
        <h1 className="font-bold text-2xl pt-10">WHY  CHOOSE US</h1>
        <div className="flex flex-col justify-center items-center space-y-4 py-4">
          <img src={grass} alt="grass" width="35" />
          <p className="opacity-50 font-bold max-w-5xl">
          THERE ARE MANY VARIATIONS OF PASSAGES OF LOREM IPSUM AVAILABLE, BUT
          THE MAJORITY HAVE SUFFERED ALTERATION IN SOME FORM, BY INJECTED
          HUMOUR.
        </p>
        </div>
      
      </div>
    </section>
  );
};

export default Features;
