import type { Metadata } from "next"
import "./globals.css"


export const metadata: Metadata = {
  title: "Dra. Ana Silva - Psicóloga",
  description: "Psicóloga especializada em terapia individual, de casal e cognitivo-comportamental.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`min-h-screen flex flex-col`}>{children}</body>
    </html>
  )
}

