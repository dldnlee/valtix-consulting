'use client'

import { useEffect } from "react"
import GlobalNavigationBar from "./global-components/GlobalNavigationBar"
import { Footer } from "./global-components/Footer";


export default function HomeTemplate({children}:
  Readonly<{children: React.ReactNode;}>
) {
  

  return (
    <div className="h-fit">
      <GlobalNavigationBar />
      {children}
      <Footer />
    </div>
  )
}