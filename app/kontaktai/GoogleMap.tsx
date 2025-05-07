"use client"

import { useEffect, useRef, useState } from "react"
import { Loader } from "@googlemaps/js-api-loader"
import { MapPin, ExternalLink } from "lucide-react"

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapError, setMapError] = useState(false)

  // Define the location coordinates for Butrimonių g. 9, Kaunas
  const latitude = 54.898521
  const longitude = 23.88952
  const companyName = "A+ Langai"
  const address = "Butrimonių g. 9, Kaunas"

  useEffect(() => {
    // Get the API key from environment variables
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""

    if (!apiKey) {
      setMapError(true)
      return
    }

    const initMap = async () => {
      try {
        const loader = new Loader({
          apiKey,
          version: "weekly",
          libraries: ["places"],
        })

        const { Map } = await loader.importLibrary("maps")
        const { AdvancedMarkerElement } = (await loader.importLibrary("marker")) as any

        if (!mapRef.current) return

        // Create the map
        const mapOptions = {
          center: { lat: latitude, lng: longitude },
          zoom: 15,
          mapId: "DEMO_MAP_ID",
          mapTypeControl: false,
          fullscreenControl: false,
          streetViewControl: false,
          zoomControl: true,
          zoomControlOptions: {
            position: 2, // RIGHT_CENTER
          },
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],
        }

        const map = new Map(mapRef.current, mapOptions)

        // Create a custom marker
        const markerPosition = { lat: latitude, lng: longitude }

        // Create a custom marker element
        const markerElement = document.createElement("div")
        markerElement.className = "custom-marker"
        markerElement.innerHTML = `
          <div class="bg-sky-600 text-white p-3 rounded-lg shadow-lg">
            <div class="font-bold">${companyName}</div>
            <div class="text-sm">${address}</div>
          </div>
        `

        // Create the advanced marker
        new AdvancedMarkerElement({
          map,
          position: markerPosition,
          content: markerElement,
        })

        setMapLoaded(true)
      } catch (error) {
        console.error("Error loading Google Maps:", error)
        setMapError(true)
      }
    }

    initMap()
  }, [])

  if (mapError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-600">
        <div className="text-center p-8">
          <h3 className="text-lg font-medium mb-2">Mūsų adresas</h3>
          <p>{address}</p>
          <p className="mt-4 text-sm">
            Žemėlapio rodymas laikinai nepasiekiamas. Prašome naudoti navigacijos programas adresui rasti.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full">
      <div ref={mapRef} className="w-full h-full rounded-lg overflow-hidden" style={{ minHeight: "400px" }} />

      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600"></div>
        </div>
      )}

      <div className="absolute bottom-4 right-4 z-10">
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md text-sky-600 hover:bg-sky-50 transition-colors"
        >
          <MapPin size={16} />
          <span className="text-sm font-medium">Gauti nuorodas</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  )
}

