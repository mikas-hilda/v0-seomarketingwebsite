"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Close menu when clicking outside (for mobile Safari)
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = () => {
      setIsOpen(false)
    }

    // Add with a slight delay to prevent immediate closing
    const timer = setTimeout(() => {
      document.addEventListener("click", handleClickOutside)
    }, 100)

    return () => {
      clearTimeout(timer)
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const toggleMenu = (e) => {
    e.stopPropagation() // Prevent event bubbling
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { href: "/", label: "Pagrindinis" },
    { href: "/langai", label: "Langai" },
    { href: "/balkonu-stiklinimas", label: "Balkonų stiklinimas" },
    { href: "/apie", label: "Apie" },
    { href: "/kontaktai", label: "Kontaktai" },
  ]

  return (
    <nav className="relative bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-gray-700 hover:text-primary transition-colors ${
                pathname === link.href ? "font-semibold text-primary" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button - Safari Fix */}
        <button
          className="md:hidden z-50 relative"
          onClick={toggleMenu}
          onTouchEnd={(e) => {
            e.preventDefault() // Prevent default behavior
            toggleMenu(e)
          }}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          type="button"
        >
          {isOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
        </button>

        {/* Mobile Navigation - Safari Fix */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-white z-40 md:hidden flex flex-col pt-20 px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xl text-gray-700 hover:text-primary transition-colors ${
                    pathname === link.href ? "font-semibold text-primary" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
