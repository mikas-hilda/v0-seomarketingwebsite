import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Susisiekite | A+ Langai",
  description:
    "Susisiekite su A+ Langai komanda dėl aukščiausios kokybės langų ir durų. Mūsų specialistai suteiks profesionalią konsultaciją.",
}

export default function ContactPage() {
  return <ContactPageClient />
}

