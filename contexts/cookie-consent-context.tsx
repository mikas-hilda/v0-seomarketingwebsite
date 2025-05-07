"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type CookieConsentType = "all" | "necessary" | "none" | null

interface CookieConsentContextType {
  consent: CookieConsentType
  setConsent: (consent: CookieConsentType) => void
  showBanner: boolean
  setShowBanner: (show: boolean) => void
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined)

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsentState] = useState<CookieConsentType>(null)
  const [showBanner, setShowBanner] = useState<boolean>(false)

  useEffect(() => {
    // Check if consent has been given before
    const storedConsent = localStorage.getItem("cookie-consent")
    if (storedConsent) {
      setConsentState(storedConsent as CookieConsentType)
    } else {
      // If no consent has been given, show the banner
      setShowBanner(true)
    }
  }, [])

  const setConsent = (newConsent: CookieConsentType) => {
    setConsentState(newConsent)
    if (newConsent) {
      localStorage.setItem("cookie-consent", newConsent)
      setShowBanner(false)
    }
  }

  return (
    <CookieConsentContext.Provider value={{ consent, setConsent, showBanner, setShowBanner }}>
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (context === undefined) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider")
  }
  return context
}

