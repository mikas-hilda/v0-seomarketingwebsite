"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            {/* Update the logo path to match your actual file */}
            <img src="/logo-white.png" alt="A plius langai" className="h-10 mb-4" />
            <p className="text-gray-400 mt-2">
              Plastikinių langų, durų gamyba ir montavimas. Balkonų stiklinimas. Kokybė nuo 2020 metų.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Nuorodos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Pagrindinis
                </Link>
              </li>
              <li>
                <Link href="/langai" className="text-gray-400 hover:text-white transition-colors">
                  Langai
                </Link>
              </li>
              <li>
                <Link href="/balkonu-stiklinimas" className="text-gray-400 hover:text-white transition-colors">
                  Balkonų stiklinimas
                </Link>
              </li>
              <li>
                <Link href="/apie" className="text-gray-400 hover:text-white transition-colors">
                  Apie
                </Link>
              </li>
              <li>
                <Link href="/kontaktai" className="text-gray-400 hover:text-white transition-colors">
                  Kontaktai
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontaktai</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Butrimonių g. 9, Kaunas</li>
              <li>Tel.: +370 600 00000</li>
              <li>El. paštas: info@apliuslangai.lt</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Darbo laikas</h3>
            <ul className="space-y-2 text-gray-400">
              <li>I-V: 9:00 - 18:00</li>
              <li>VI: 10:00 - 15:00</li>
              <li>VII: Nedirbame</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} A plius langai. Visos teisės saugomos.</p>
        </div>
      </div>
    </footer>
  )
}
