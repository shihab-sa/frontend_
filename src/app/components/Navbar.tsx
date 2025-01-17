import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-800 text-white p-4 fixed top-0 w-full z-50">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link href="#hero" scroll={true}>
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" scroll={true}>
            About Us
          </Link>
        </li>
        <li>
          <Link href="#agroforestry" scroll={true}>
            Agroforestry
          </Link>
        </li>
        <li>
          <Link href="#nursery" scroll={true}>
            Nursery
          </Link>
        </li>
        <li>
          <Link href="#projects" scroll={true}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="#contact" scroll={true}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
