import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Apie mus | A+ Langai",
  description: "Sužinokite daugiau apie A+ Langai - aukščiausios kokybės langų ir durų gamintoją Lietuvoje.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-24 bg-sky-700">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4">Apie A+ Langai</h1>
            <p className="max-w-[800px] mx-auto text-white/90 md:text-xl">
              Jūsų patikimas langų ir durų partneris nuo 2005 metų
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                <div className="text-gray-400">A+ Langai komanda</div>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Mūsų istorija</h2>
                <p className="text-muted-foreground mb-6">
                  A+ Langai įkurta 2005 metais, siekiant teikti aukščiausios kokybės langų ir durų sprendimus Lietuvos
                  rinkai. Per daugiau nei 15 metų veiklos, tapome vienu iš lyderių langų ir durų gamybos bei montavimo
                  srityje.
                </p>
                <p className="text-muted-foreground mb-6">
                  Mūsų komandą sudaro patyrę specialistai, kurie nuolat tobulina savo žinias ir įgūdžius, kad galėtų
                  pasiūlyti geriausius sprendimus mūsų klientams. Mes didžiuojamės galėdami pasiūlyti platų produktų
                  asortimentą, atitinkantį aukščiausius kokybės standartus.
                </p>
                <p className="text-muted-foreground">
                  Mūsų tikslas - užtikrinti, kad kiekvienas klientas gautų kokybiškus produktus ir profesionalų
                  aptarnavimą, kuris viršytų jų lūkesčius.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-2">Mūsų vertybės</h2>
              <p className="text-muted-foreground md:text-lg">Principai, kuriais vadovaujamės kasdienėje veikloje</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-sky-600"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Kokybė</h3>
                <p className="text-muted-foreground">
                  Naudojame tik aukščiausios kokybės medžiagas ir komponentus, užtikrinančius ilgaamžiškumą ir
                  patikimumą.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-sky-600"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Klientų aptarnavimas</h3>
                <p className="text-muted-foreground">
                  Mūsų klientai yra mūsų prioritetas. Siekiame užtikrinti sklandų ir malonų bendradarbiavimą nuo pirmojo
                  kontakto iki projekto užbaigimo.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-sky-600"
                  >
                    <path d="M12 2v20"></path>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Konkurencingos kainos</h3>
                <p className="text-muted-foreground">
                  Siūlome aukščiausios kokybės produktus už konkurencingas kainas, užtikrindami geriausią kainos ir
                  kokybės santykį.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 bg-sky-700 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Pasiruošę bendradarbiauti?</h2>
            <p className="max-w-[600px] mx-auto text-sky-100 md:text-lg mb-8">
              Susisiekite su mumis jau šiandien ir leiskite mums padėti jums rasti geriausią sprendimą jūsų namams.
            </p>
            <Link href="/kontaktai">
              <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-black">
                Susisiekite dabar
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 text-gray-800">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image src="/logo.png" alt="A+ Langai logotipas" width={150} height={50} className="mb-4 h-auto" />
              <p className="text-sm">Aukščiausios kokybės langai ir durys Jūsų namams nuo 2005 metų.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Produktai</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/langai/plastikiniai" className="hover:text-sky-600">
                    Plastikiniai langai
                  </Link>
                </li>
                <li>
                  <Link href="/langai/mediniai" className="hover:text-sky-600">
                    Mediniai langai
                  </Link>
                </li>
                <li>
                  <Link href="/langai/aliuminio" className="hover:text-sky-600">
                    Aliuminio langai
                  </Link>
                </li>
                <li>
                  <Link href="/durys/lauko" className="hover:text-sky-600">
                    Lauko durys
                  </Link>
                </li>
                <li>
                  <Link href="/durys/vidaus" className="hover:text-sky-600">
                    Vidaus durys
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Informacija</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/apie" className="hover:text-sky-600">
                    Apie mus
                  </Link>
                </li>
                <li>
                  <Link href="/kontaktai" className="hover:text-sky-600">
                    Kontaktai
                  </Link>
                </li>
                <li>
                  <Link href="/privatumo-politika" className="hover:text-sky-600">
                    Privatumo politika
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Kontaktai</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 mt-0.5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>+370655 62966</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 mt-0.5"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>info@apliuslangai.lt</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 mt-0.5"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Butrimonių g. 9, Kaunas</span>
                </li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <Link href="https://facebook.com" className="hover:text-sky-600">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="https://instagram.com" className="hover:text-sky-600">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-sm text-center">
            <p>© {new Date().getFullYear()} A+ Langai. Visos teisės saugomos.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

