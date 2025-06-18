'use client';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-gray-100">
  <ul className="flex flex-wrap justify-center p-4">
    <li className="mx-3 my-2">
      <Link href="/" className="text-gray-800 hover:bg-blue-500 hover:text-white px-4 py-2 rounded transition">
        หน้าแรก
      </Link>
    </li>
    <li className="mx-3 my-2">
      <Link href="/about" className="text-gray-800 hover:bg-blue-500 hover:text-white px-4 py-2 rounded transition">
        เกี่ยวกับ
      </Link>
    </li>
    <li className="mx-3 my-2">
      <Link href="/service" className="text-gray-800 hover:bg-blue-500 hover:text-white px-4 py-2 rounded transition">
        บริการของเรา
      </Link>
    </li>
    <li className="mx-3 my-2">
      <Link href="/contact" className="text-gray-800 hover:bg-blue-500 hover:text-white px-4 py-2 rounded transition">
        ติดต่อ
      </Link>
    </li>
  </ul>
</nav>
  );
}