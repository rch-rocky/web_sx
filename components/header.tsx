"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-['Pacifico'] text-primary">
            logo
          </Link>
        </div>

        <nav
          className={`${mobileMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none items-start md:items-center space-y-4 md:space-y-0 space-x-0 md:space-x-8 p-6 md:p-0`}
        >
          <Link href="/" className="text-gray-800 font-medium hover:text-primary transition-colors">
            首页
          </Link>
          <Link href="/about" className="text-gray-800 font-medium hover:text-primary transition-colors">
            关于我们
          </Link>
          <Link href="/products" className="text-gray-800 font-medium hover:text-primary transition-colors">
            产品服务
          </Link>
          <Link href="/contact" className="text-gray-800 font-medium hover:text-primary transition-colors">
            联系我们
          </Link>
          <div className="language-switcher ml-0 md:ml-4 flex items-center text-gray-700">
            <span className="flex items-center">
              中文 <i className="ri-arrow-down-s-line ml-1"></i>
            </span>
            <div className="language-options w-24">
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                中文
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                English
              </Link>
            </div>
          </div>
        </nav>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}
