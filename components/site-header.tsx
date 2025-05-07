import Image from "next/image"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"

export const SiteHeader = () => {
  const links = [
    { href: "/", label: "Pagrindinis" },
    { href: "/apie", label: "Apie mus" },
    { href: "/langai", label: "Langai" },
    { href: "/durys", label: "Durys" },
    { href: "/duru-ispardavimas", label: "Išpardavimas" },
    { href: "/kontaktai", label: "Kontaktai" },
  ]

  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="container px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="A+ Langai logotipas" width={120} height={40} className="h-auto" />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium transition-colors hover:text-sky-600">
              {link.label}
            </Link>
          ))}
        </nav>

        <MobileNav links={links} />
      </div>
    </header>
  )
}

