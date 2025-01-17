import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Over Ons</Link>
        </li>
        <li>
          <Link href="/agroforestry">Agroforestry</Link>
        </li>
        <li>
          <Link href="/nursery">De Kwekerij</Link>
        </li>
        <li>
          <Link href="/projects">Projecten & Foto's</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
