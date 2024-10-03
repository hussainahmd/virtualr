import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl shadow-[inset_0_0_10px_4px_rgb(255,255,255,0.1)]">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              {/* <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Subscribe
              </a> */}
              <a href="#_" className="relative inline-flex items-center justify-center border border-orange-900 w-full h-12 p-5 mt-20 overflow-hidden text-xl text-white transition duration-300 ease-out rounded-md shadow-xl group">
                <span className="absolute bottom-0 right-[50%] block w-[50%] h-full transition duration-300 -z-20 bg-orange-600 -translate-x-[100%] group-hover:-translate-x-[0%] ease-in-out"></span>
                <span className="absolute bottom-0 right-0 block w-[50%] h-full duration-300 -z-21 bg-orange-600 translate-x-[100%] group-hover:translate-x-[0%] transition-all ease-in-out"></span>
                <span className="transition-all z-10">Subscribe</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
