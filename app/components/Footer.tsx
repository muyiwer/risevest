import { darkLogo, redirectIcon } from "@/assets";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer
      className="grid grid-cols-4 max-md:grid-cols-2 max-md:gap-7 mt-[4rem] px-6 py-5"
      aria-label="Footer"
    >
      <div className="flex gap-5 flex-col">
        <Image src={darkLogo} alt="Rise logo" />
        <nav aria-label="Company Information">
          <ul className="flex gap-3 flex-col">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Contact Info</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Rise Impact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-5 flex-col">
        <h2 className="font-semibold">Explore</h2>
        <nav aria-label="Explore">
          <ul className="flex gap-3 flex-col">
            <li className="flex gap-2 items-center">
              <a href="#">Investment Club</a>
              <Image src={redirectIcon} alt="External link" />
            </li>
            <li className="flex gap-2 items-center">
              <a href="#">Blog</a>
              <Image src={redirectIcon} alt="External link" />
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-5 flex-col">
        <h2 className="font-semibold">Products</h2>
        <nav aria-label="Products">
          <ul className="flex gap-3 flex-col">
            <li>
              <a href="#">Rise App</a>
            </li>
            <li>
              <a href="#">Wallets</a>
            </li>
            <li>
              <a href="#">Assets Classes</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-5 flex-col">
        <h2 className="font-semibold">Contact Us</h2>
        <address className="not-italic">
          <ul className="flex gap-3 flex-col">
            <li className="flex gap-2 items-center">
              <a href="tel:08187147405">0818 714 7405</a>
              <Image src={redirectIcon} alt="Phone icon" />
            </li>
            <li className="flex gap-2 items-center">
              <a href="mailto:hello@rise.capital">hello@rise.capital</a>
              <Image src={redirectIcon} alt="Email icon" />
            </li>
            <li className="flex gap-2 items-center">
              <a href="#">Newsletter</a>
              <Image src={redirectIcon} alt="External link" />
            </li>
            <li className="flex gap-2 items-center">
              <a
                href="https://instagram.com/rise"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <Image src={redirectIcon} alt="Instagram icon" />
            </li>
            <li className="flex gap-2 items-center">
              <a
                href="https://twitter.com/rise"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <Image src={redirectIcon} alt="Twitter icon" />
            </li>
          </ul>
        </address>
      </div>
    </footer>
  );
};
