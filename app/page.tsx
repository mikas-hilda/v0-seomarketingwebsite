import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh] flex items-center"
        style={{ backgroundImage: "url('/hero-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Kokybiški langai ir durys jūsų namams</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Gaminame ir montuojame aukščiausios kokybės plastikinius langus, duris ir atliekame balkonų stiklinimą.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/langai"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Mūsų langai
            </Link>
            <Link
              href="/kontaktai"
              className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Susisiekite
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Mūsų paslaugos</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/plastikiniai-langai.png"
                alt="Plastikiniai langai"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Plastikiniai langai</h3>
              <p className="text-gray-600 mb-4">
                Aukštos kokybės plastikiniai langai, užtikrinantys puikią šilumos ir garso izoliaciją.
              </p>
              <Link href="/langai" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                Sužinoti daugiau <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/mediniai-langai.png"
                alt="Mediniai langai"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Mediniai langai</h3>
              <p className="text-gray-600 mb-4">
                Natūralūs ir ekologiški mediniai langai, suteikiantys jaukumo ir šilumos jūsų namams.
              </p>
              <Link href="/langai" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                Sužinoti daugiau <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/balkonu-stiklinimo-privalumai.png"
                alt="Balkonų stiklinimas"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Balkonų stiklinimas</h3>
              <p className="text-gray-600 mb-4">
                Profesionalus balkonų stiklinimas, praplečiantis jūsų gyvenamąją erdvę.
              </p>
              <Link
                href="/balkonu-stiklinimas"
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              >
                Sužinoti daugiau <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Kodėl rinktis mus?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kokybė</h3>
              <p className="text-gray-600">Naudojame tik aukščiausios kokybės medžiagas ir komponentus.</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Patirtis</h3>
              <p className="text-gray-600">Turime ilgametę patirtį langų ir durų gamyboje bei montavime.</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Garantija</h3>
              <p className="text-gray-600">Suteikiame ilgalaikę garantiją visiems mūsų gaminiams.</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Aptarnavimas</h3>
              <p className="text-gray-600">Teikiame profesionalų aptarnavimą ir konsultacijas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pasiruošę pradėti?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Susisiekite su mumis ir gaukite nemokamą konsultaciją bei kainų pasiūlymą.
          </p>
          <Link
            href="/kontaktai"
            className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            Susisiekite dabar
          </Link>
        </div>
      </section>
    </>
  )
}
