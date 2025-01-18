import Link from "next/link";
import Image from "next/image";
import mainLogo from "../../../public/images/main_logo.png";
import search from "../../../public/images/search.png";
import downarrow from "../../../public/images/downarrow.png";
import person_logo from "../../../public/images/person_logo.png";
import shopping_bag from "../../../public/images/shopping_bag.png";

export default function Navbar() {
  return (
    <div>
      <nav className="text-white w-full z-50 fixed top-0 bg-cream">
        <div className="ml-20 mr-20">
          {/* ------------------  top section start ---------------*/}

          <div className="flex flex-wrap items-center justify-between w-full h-[112px]">
            {/* Left: Tree Icon (Placeholder) */}
            <div className="w-12 h-12 bg-[url('/tree.png')] bg-cover"></div>

            {/* Center: Search Bar */}
            <div className="flex items-center border rounded-full bg-white px-4 py-2 shadow-sm w-full md:w-1/2 mt-2 md:mt-0">
              <input
                type="text"
                placeholder="Zoeken..."
                className="flex-grow outline-none bg-transparent text-sm"
              />
              <button className="ml-2">
                <Image src={search} alt="Logo" width={32} height={32} />
              </button>
            </div>

            {/* Right: Language & Login */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mt-2 md:mt-0">
              <div className="text-sm text-green-700 cursor-pointer flex items-center space-x-1">
                <span>Netherlands</span>
                <Image src={downarrow} alt="downarrow" width={7} height={7} />
              </div>

              <button className="flex items-center space-x-2 text-sm text-green-700">
                <Image
                  src={person_logo}
                  alt="person_logo"
                  width={17}
                  height={17}
                />
                <span>Inloggen</span>
              </button>
              <Image
                src={shopping_bag}
                alt="shopping_bag"
                width={24}
                height={24}
              />
            </div>
          </div>
          {/* --------    top section end  ----------------- */}
        </div>

        {/* ------------------------------- navbar start  */}

        <div className="h-[68px] w-full bg-dark-green">
          <div className="ml-20 mr-20">
            <div className="flex items-center justify-between px-8">
              {/* Logo Section */}
              <div className="absolute top-[22px] left-[140px]">
                <Image
                  src={mainLogo}
                  alt="Logo"
                  width={353}
                  height={157}
                  className="opacity-100"
                />
              </div>

              {/* Navigation Section */}
              <ul className="space-x-8 flex mt-5 ml-auto justify-between">
                <li>
                  <Link
                    href="#hero"
                    scroll={true}
                    className="text-white hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    scroll={true}
                    className="text-white hover:underline"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#agroforestry"
                    scroll={true}
                    className="text-white hover:underline"
                  >
                    Agroforestry
                  </Link>
                </li>
                <li>
                  <Link
                    href="#nursery"
                    scroll={true}
                    className="text-white hover:underline"
                  >
                    Nursery
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    scroll={true}
                    className="text-white hover:underline"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    scroll={true}
                    className="text-white hover:underline"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ------------------------------- navbar end  */}
      </nav>
    </div>
  );
}
