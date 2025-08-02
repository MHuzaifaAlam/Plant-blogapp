import vase from "../assets/images/vase.png";

const LandingPage = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-green-700 p-10 mx-auto">
      <div className="md:w-1/2 text- ml-20 text-centerans uppercase md:text-left ">
        <h1 className="text-4xl md:text-6xl  font-bold mb-4 ease-in duration-200 ">Welcome to Plant Blogs</h1>
        <p className="text-lg md:text-xl">Discover, Learn, and Grow with Nature.</p>
        
</div>
      <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center  ">
        <img src={vase} alt="Vase" className="w-60 md:w-500  ease-in " />
      </div>
      </div>
      </>
      
  );
};

export default LandingPage;
