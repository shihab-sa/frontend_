import mainlogo from "../../../public/images/main_logo.png";
import Image from "next/image";

// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-footer-bg-color text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Logo and Quote Section (A) */}
        <div className="flex flex-col items-start mb-8">
          <div className="flex items-center mb-4">
            <Image src={mainlogo} alt="person_logo" width={256} height={118} />
          </div>
          <p className="font-bangla text-base leading-6 text-white">
            "De beste tijd om een boom te planten was 20 jaar geleden. De op één
            na beste tijd is nu."
          </p>
        </div>

        {/* Links and Socials Section (B and C grouped together) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Links Section (B) */}
          <div>
            <h2 className="mb-3 font-outfit text-[22px]">Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline font-bangla text-base">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/over-ons"
                  className="hover:underline font-bangla text-base"
                >
                  Over Ons
                </a>
              </li>
              <li>
                <a
                  href="/agroforestry"
                  className="hover:underline font-bangla text-base"
                >
                  Agroforestry
                </a>
              </li>
              <li>
                <a
                  href="/projecten"
                  className="hover:underline font-bangla text-base"
                >
                  Projecten & Foto's
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:underline font-bangla text-base"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Socials Section (C) */}
          <div>
            <h2 className="mb-3 font-outfit text-[22px]">Socials</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline font-bangla text-base">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline font-bangla text-base">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline font-bangla text-base">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline font-bangla text-base">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section (D) */}
        <div className="flex flex-col items-start">
          <h2 className="mb-3 font-outfit text-[22px]">NEEM CONTACT OP</h2>
          <p className="font-bangla text-base">
            Boxtelseweg 27B, 5481VE Schijndel
          </p>
          <p className="font-bangla text-base">info@jadereforestry.com</p>
          <p className="font-bangla text-base">+31 6 128 464 80</p>
          <p className="font-bangla text-base">BTW-ID: NL003417799B90</p>
          <p className="font-bangla text-base">KVK: 77106903</p>
          <p className="font-bangla text-base">IBAN: NL11 RABO 0352 2704 89</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 pt-4 text-center font-bangla text-base  text-white">
        © Jade Reforestry | 2024 | jadereforestry.nl | Web Design by Online
        Marketing Bakery
      </div>
    </footer>
  );
}
