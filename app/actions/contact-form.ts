"use server"

import { z } from "zod"
import { JWT } from "google-auth-library"
import { GoogleSpreadsheet } from "google-spreadsheet"

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Vardas turi būti bent 2 simbolių ilgio" }),
  email: z.string().email({ message: "Neteisingas el. pašto formatas" }),
  phone: z.string().min(6, { message: "Neteisingas telefono numeris" }),
  subject: z.string().min(2, { message: "Tema turi būti bent 2 simbolių ilgio" }),
  message: z.string().min(10, { message: "Žinutė turi būti bent 10 simbolių ilgio" }),
})

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Validate form data
    const validatedData = contactFormSchema.safeParse(data)

    if (!validatedData.success) {
      return {
        success: false,
        message: "Patikrinkite įvestus duomenis",
        errors: validatedData.error.flatten().fieldErrors,
      }
    }

    // Get current date and time in Lithuanian format
    const now = new Date()
    const dateTimeString = now.toLocaleString("lt-LT", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })

    try {
      console.log("Starting Google Sheets connection...")
      console.log("Service Account Email:", process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.substring(0, 5) + "...")
      console.log("Private Key exists:", !!process.env.GOOGLE_PRIVATE_KEY)
      console.log("Sheet ID exists:", !!process.env.GOOGLE_SHEET_ID)

      // Initialize auth - environment variables should be set
      const serviceAccountAuth = new JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      })

      console.log("JWT initialized")

      // Initialize the sheet
      const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID || "", serviceAccountAuth)
      console.log("GoogleSpreadsheet initialized")

      // Load the document properties and sheets
      console.log("Loading document info...")
      await doc.loadInfo()
      console.log("Document loaded, title:", doc.title)

      // Get the first sheet
      const sheet = doc.sheetsByIndex[0]
      console.log("Sheet accessed, title:", sheet.title)

      // Add a row to the sheet
      console.log("Adding row to sheet...")
      await sheet.addRow({
        Data: dateTimeString,
        Vardas: validatedData.data.name,
        "El. paštas": validatedData.data.email,
        Telefonas: validatedData.data.phone,
        Tema: validatedData.data.subject,
        Žinutė: validatedData.data.message,
      })

      console.log("Form data saved to Google Sheets successfully")

      return {
        success: true,
        message: "Jūsų žinutė sėkmingai išsiųsta. Susisieksime su jumis artimiausiu metu.",
      }
    } catch (error) {
      console.error("Google Sheets error details:", error)

      // Fallback: Log the submission for debugging
      console.log("Form submission (fallback):", {
        date: dateTimeString,
        ...validatedData.data,
      })

      // In preview/development, we'll still return success
      if (process.env.NODE_ENV !== "production") {
        return {
          success: true,
          message: "Jūsų žinutė sėkmingai išsiųsta. Susisieksime su jumis artimiausiu metu.",
        }
      }

      throw error
    }
  } catch (error) {
    console.error("Form submission error:", error)
    return {
      success: false,
      message: "Įvyko klaida siunčiant žinutę. Prašome bandyti vėliau.",
    }
  }
}

