import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Privatumo politika | A+ Langai",
  description: "A+ Langai privatumo politika - informacija apie tai, kaip renkame ir naudojame jūsų duomenis.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter mb-8">Privatumo politika</h1>

            <div className="prose max-w-none">
              <p className="mb-4">Paskutinį kartą atnaujinta: {new Date().toLocaleDateString("lt-LT")}</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Įvadas</h2>
              <p>
                A+ Langai (toliau – „mes", „mūsų" arba „įmonė") gerbia jūsų privatumą ir įsipareigoja saugoti jūsų
                asmens duomenis. Šioje privatumo politikoje paaiškiname, kaip renkame, naudojame ir saugome jūsų asmens
                duomenis, kai lankotės mūsų svetainėje arba naudojatės mūsų paslaugomis.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Kokius duomenis renkame</h2>
              <p>
                Mes galime rinkti, naudoti, saugoti ir perduoti įvairius jūsų asmens duomenis, kuriuos suskirstėme į
                šias kategorijas:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Tapatybės duomenys: vardas, pavardė</li>
                <li>Kontaktiniai duomenys: el. pašto adresas, telefono numeris, adresas</li>
                <li>
                  Techniniai duomenys: IP adresas, naršyklės tipas ir versija, laiko juosta, naršyklės įskiepių tipai ir
                  versijos, operacinė sistema
                </li>
                <li>Naudojimo duomenys: informacija apie tai, kaip naudojatės mūsų svetaine ir paslaugomis</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Kaip renkame jūsų asmens duomenis</h2>
              <p>Jūsų asmens duomenis renkame šiais būdais:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Tiesioginė sąveika: kai pildote formas mūsų svetainėje, susisiekiate su mumis telefonu, el. paštu ar
                  kitais būdais
                </li>
                <li>
                  Automatizuotos technologijos: kai lankotės mūsų svetainėje, galime automatiškai rinkti techninius
                  duomenis apie jūsų įrenginį, naršymo veiksmus ir modelius
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Slapukai</h2>
              <p>
                Mūsų svetainėje naudojami slapukai, kad pagerintume jūsų naršymo patirtį. Slapukai yra maži failai,
                kuriuos jūsų naršyklė saugo jūsų įrenginyje. Mes naudojame šiuos slapukų tipus:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Būtini slapukai: reikalingi svetainės veikimui</li>
                <li>Analitiniai slapukai: padeda mums suprasti, kaip lankytojai naudojasi mūsų svetaine</li>
                <li>
                  Rinkodaros slapukai: naudojami sekti lankytojus skirtingose svetainėse, siekiant rodyti aktualias
                  reklamas
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Jūsų teisės</h2>
              <p>Pagal Bendrąjį duomenų apsaugos reglamentą (BDAR) turite šias teises:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Teisė susipažinti su savo asmens duomenimis</li>
                <li>Teisė reikalauti ištaisyti savo asmens duomenis</li>
                <li>Teisė reikalauti ištrinti savo asmens duomenis</li>
                <li>Teisė apriboti savo asmens duomenų tvarkymą</li>
                <li>Teisė nesutikti su savo asmens duomenų tvarkymu</li>
                <li>Teisė į duomenų perkeliamumą</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Kontaktinė informacija</h2>
              <p>
                Jei turite klausimų apie šią privatumo politiką arba norite pasinaudoti savo teisėmis, susisiekite su
                mumis:
              </p>
              <p>
                El. paštas: info@apliuslangai.lt
                <br />
                Telefonas: +370655 62966
                <br />
                Adresas: Butrimonių g. 9, Kaunas
              </p>
            </div>
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

