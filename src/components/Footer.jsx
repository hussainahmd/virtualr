import { resourcesLinks, platformLinks, communityLinks } from "../constants";
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="relative inline-flex items-center justify-center overflow-hiddenx transition duration-300 ease-in-out rounded-md shadow-xl group text-neutral-300 hover:text-white">
                  <span className="absolute bottom-0 w-0 group-hover:w-full h-[1px] -z-20 transition-all duration-300 bg-white ease-in-out"></span>
                  <span className="relative">{link.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="relative inline-flex items-center justify-center overflow-hiddenx transition duration-300 ease-in-out rounded-md shadow-xl group text-neutral-300 hover:text-white">
                  <span className="absolute bottom-0 w-0 group-hover:w-full h-[1px] -z-20 transition-all duration-300 bg-white ease-in-out"></span>
                  <span className="relative">{link.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="relative inline-flex items-center justify-center overflow-hiddenx transition duration-300 ease-in-out rounded-md shadow-xl group text-neutral-300 hover:text-white">
                  <span className="absolute bottom-0 w-0 group-hover:w-full h-[1px] -z-20 transition-all duration-300 bg-white ease-in-out"></span>
                  <span className="relative">{link.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
