import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <a href="#_" className="relative inline-flex items-center justify-center py-3 px-4 mx-3 overflow-hidden text-white transition duration-300 ease-out rounded-md shadow-xl group hover:ring-1 hover:ring-white">
          <span className="absolute w-full h-full bg-gradient-to-r from-orange-500 to-orange-800 -z-20"></span>
          <span className="absolute bottom-0 right-0 block w-full h-full transition duration-300 origin-left -z-20 transform bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 opacity-70 -translate-x-[100%] group-hover:-translate-x-[0%] ease-in-out"></span>
          <span className="relative text-white">Start for free</span>
        </a>
        <a href="#_" className="relative inline-flex items-center justify-center border py-3 px-4 mx-3 overflow-hidden text-white transition duration-300 ease-out rounded-md shadow-xl group hover:ring-white">
          <span className="absolute bottom-0 right-0 block w-full h-full transition duration-300 rounded-md -z-20 bg-white -translate-x-[100%] group-hover:-translate-x-[0%] ease-in-out"></span>
          <span className="group-hover:text-black transition-all">Documentation</span>
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          // autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 shadow-[-10px_10px_20px_-12px] mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          // autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 shadow-[10px_10px_20px_-12px] mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
