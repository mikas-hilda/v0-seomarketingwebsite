"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from "@/app/actions/contact-form"
import { useFormStatus } from "react-dom"
import { AlertCircle, CheckCircle, MapPin, Phone, Mail, Clock } from "lucide-react"
import GoogleMap from "./GoogleMap"
import { SiteHeader } from "@/components/site-header"
import "./map-styles.css"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700" disabled={pending}>
      {pending ? "Siunčiama..." : "Siųsti užklausą"}
    </Button>
  )
}

export default function ContactPageClient() {
  const [formState, setFormState] = useState<{
    success?: boolean
    message?: string
    errors?: Record<string, string[]>
  }>({})

  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(formData: FormData) {
    const result = await submitContactForm(formData)
    setFormState(result)

    if (result.success && formRef.current) {
      formRef.current.reset()
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter mb-4">Susisiekite su mumis</h1>
                <p className="text-muted-foreground mb-8">
                  Turite klausimų? Susisiekite su mumis ir mūsų specialistai mielai jums padės.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Telefonas</h3>
                      <p className="text-muted-foreground">+370655 62966</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">El. paštas</h3>
                      <p className="text-muted-foreground">info@apliuslangai.lt</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Adresas</h3>
                      <p className="text-muted-foreground">Butrimonių g. 9, Kaunas</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center mr-4">
                      <Clock className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Darbo laikas</h3>
                      <p className="text-muted-foreground">I-V: 9:00 - 18:00</p>
                      <p className="text-muted-foreground">VI: 10:00 - 15:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <form ref={formRef} action={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg">
                  {formState.message && (
                    <div
                      className={`p-4 mb-4 rounded-md ${formState.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
                    >
                      <div className="flex items-center">
                        {formState.success ? (
                          <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                        ) : (
                          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                        )}
                        <p>{formState.message}</p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Vardas
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Jūsų vardas"
                        required
                        className={formState.errors?.name ? "border-red-500" : ""}
                      />
                      {formState.errors?.name && <p className="text-xs text-red-500">{formState.errors.name[0]}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        El. paštas
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jusu@pastas.lt"
                        required
                        className={formState.errors?.email ? "border-red-500" : ""}
                      />
                      {formState.errors?.email && <p className="text-xs text-red-500">{formState.errors.email[0]}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Telefonas
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+370 600 00000"
                      required
                      className={formState.errors?.phone ? "border-red-500" : ""}
                    />
                    {formState.errors?.phone && <p className="text-xs text-red-500">{formState.errors.phone[0]}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Tema
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Užklausos tema"
                      required
                      className={formState.errors?.subject ? "border-red-500" : ""}
                    />
                    {formState.errors?.subject && <p className="text-xs text-red-500">{formState.errors.subject[0]}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Žinutė
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Jūsų žinutė..."
                      className={`min-h-[120px] ${formState.errors?.message ? "border-red-500" : ""}`}
                      required
                    />
                    {formState.errors?.message && <p className="text-xs text-red-500">{formState.errors.message[0]}</p>}
                  </div>
                  <SubmitButton />
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">Mūsų vieta</h2>
              <p className="text-muted-foreground">Aplankykite mūsų saloną</p>
            </div>
            <div className="h-[500px] rounded-lg overflow-hidden shadow-md">
              <GoogleMap />
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

