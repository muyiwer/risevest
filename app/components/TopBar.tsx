import { arrowDown, logo, menuIcon } from "@/assets";
import Image from "next/image";

export const TopBar = () => {
  return (
    <header className="flex justify-between items-center p-4" role="banner">
      {/* Logo */}
      <a href="/" className="focus:outline-none">
        <Image src={logo} alt="Company Logo" />
      </a>

      {/* Navigation bar */}
      <nav aria-label="Main navigation" className="max-md:hidden">
        <ul className="flex gap-5 text-primary text-[1rem]">
          <li>
            <a
              href="/"
              className="font-bold focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
            >
              Home
            </a>
          </li>
          <li className="relative">
            <button
              aria-haspopup="true"
              aria-expanded="false"
              className="flex gap-1 items-center focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
            >
              Product <Image src={arrowDown} alt="Dropdown arrow" />
            </button>
          </li>
          <li>
            <a
              href="/"
              className="focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer active:!border-none"
            >
              Investment Club
            </a>
          </li>
          <li>
            <a
              href="/"
              className="focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/"
              className="focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/"
              className="focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
            >
              FAQs
            </a>
          </li>
        </ul>
      </nav>

      <button
        aria-label="Open menu"
        className="md:hidden focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <Image src={menuIcon} alt="Menu icon" />
      </button>
    </header>
  );
};
