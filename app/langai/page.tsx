import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Langai | A+ Langai",
  description:
    "Aukščiausios kokybės plastikiniai, mediniai ir aliuminio langai jūsų namams. A++ energinio efektyvumo klasė, profesionalus montavimas.",
}

export default function WindowsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-24 bg-sky-700">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4">Langai</h1>
            <p className="max-w-[800px] mx-auto text-white/90 md:text-xl">
              Aukščiausios kokybės langai, atitinkantys jūsų poreikius ir namo stilių
            </p>
          </div>
        </section>

        {/* Windows Types */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-2">Langų tipai</h2>
              <p className="text-muted-foreground md:text-lg">Pasirinkite langus pagal savo poreikius ir namo stilių</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border">
                <div className="relative h-[200px] sm:h-[300px] bg-gray-200 flex items-center justify-center">
                  <div className="text-gray-400">Plastikiniai langai</div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold">Plastikiniai langai</h3>
                  <p className="mt-2 text-muted-foreground">
                    Ekonomiški ir ilgaamžiai langai, užtikrinantys puikią šilumos izoliaciją.
                  </p>
                  <Link href="/kontaktai">
                    <Button className="mt-8 bg-amber-400 hover:bg-amber-500 text-black">Skaičiuoti!</Button>
                  </Link>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border">
                <div className="relative h-[200px] sm:h-[300px] bg-gray-200 flex items-center justify-center">
                  <div className="text-gray-400">Mediniai langai</div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold">Mediniai langai</h3>
                  <p className="mt-2 text-muted-foreground">
                    Natūralūs ir ekologiški langai, suteikiantys namams jaukumo ir šilumos.
                  </p>
                  <Link href="/kontaktai">
                    <Button className="mt-8 bg-amber-400 hover:bg-amber-500 text-black">Skaičiuoti!</Button>
                  </Link>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border">
                <div className="relative h-[200px] sm:h-[300px] bg-gray-200 flex items-center justify-center">
                  <div className="text-gray-400">Aliuminio langai</div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold">Aliuminio langai</h3>
                  <p className="mt-2 text-muted-foreground">
                    Modernūs ir tvirti langai, idealiai tinkantys komercinėms patalpoms ir moderniems namams.
                  </p>
                  <Link href="/kontaktai">
                    <Button className="mt-8 bg-amber-400 hover:bg-amber-500 text-black">Skaičiuoti!</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Energy Efficiency */}
        <section className="py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Energinis efektyvumas</h2>
                <p className="text-muted-foreground mb-6">
                  Mūsų langai pasižymi aukščiausiu energiniu efektyvumu, padedančiu taupyti šildymo išlaidas ir mažinti
                  poveikį aplinkai.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-sky-600 mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-medium">A++ klasė</h3>
                      <p className="text-muted-foreground">
                        Aukščiausias energinis efektyvumas, idealiai tinkantis pasyviems namams.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-sky-600 mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-medium">A+ klasė</h3>
                      <p className="text-muted-foreground">
                        Puikus energinis efektyvumas, užtikrinantis optimalų šilumos išsaugojimą.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-sky-600 mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-medium">A klasė</h3>
                      <p className="text-muted-foreground">Geras energinis efektyvumas, tinkantis daugumai namų.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                <div className="text-gray-400">Energinis efektyvumas</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 bg-sky-700 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Norite sužinoti daugiau?</h2>
            <p className="max-w-[600px] mx-auto text-sky-100 md:text-lg mb-8">
              Susisiekite su mumis ir gaukite nemokamą konsultaciją bei kainų pasiūlymą.
            </p>
            <Link href="/kontaktai">
              <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-black">
                Gauti pasiūlymą
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

