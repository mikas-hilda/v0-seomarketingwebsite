"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useCookieConsent } from "@/contexts/cookie-consent-context"
import Link from "next/link"

export function GDPRBanner() {
  const { setConsent, showBanner, setShowBanner } = useCookieConsent()
  const [showPreferences, setShowPreferences] = useState(false)

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="container mx-auto p-4">
        <button
          onClick={() => setShowBanner(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Uždaryti pranešimą"
        >
          <X size={20} />
        </button>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Slapukų naudojimas</h3>
          <p className="text-sm text-gray-600">
            Mes naudojame slapukus, kad užtikrintume geriausią naršymo patirtį mūsų svetainėje, personalizuotume turinį
            ir reklamas, teiktume socialinės žiniasklaidos funkcijas ir analizuotume mūsų srautą. Taip pat dalijamės
            informacija apie jūsų naudojimąsi mūsų svetaine su savo socialinės žiniasklaidos, reklamos ir analitikos
            partneriais.
          </p>
        </div>

        {showPreferences ? (
          <div className="mb-4 border-t pt-4">
            <h4 className="font-medium mb-2">Slapukų nustatymai</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="necessary" checked disabled className="mr-2" />
                <label htmlFor="necessary" className="text-sm">
                  Būtini slapukai (visada įjungti)
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="analytics" className="mr-2" />
                <label htmlFor="analytics" className="text-sm">
                  Analitiniai slapukai
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="marketing" className="mr-2" />
                <label htmlFor="marketing" className="text-sm">
                  Rinkodaros slapukai
                </label>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                onClick={() => {
                  setConsent("necessary")
                  setShowPreferences(false)
                }}
                variant="outline"
                size="sm"
              >
                Tik būtini
              </Button>
              <Button
                onClick={() => {
                  setConsent("all")
                  setShowPreferences(false)
                }}
                size="sm"
              >
                Priimti visus
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => setShowPreferences(true)} variant="outline" size="sm">
              Nustatymai
            </Button>
            <Button onClick={() => setConsent("all")} size="sm">
              Sutinku su visais slapukais
            </Button>
          </div>
        )}

        <div className="mt-2 text-xs text-gray-500">
          Daugiau informacijos galite rasti mūsų{" "}
          <Link href="/privatumo-politika" className="underline hover:text-sky-600">
            Privatumo politikoje
          </Link>
        </div>
      </div>
    </div>
  )
}

