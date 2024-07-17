'use client'

import { useEffect } from "react"
import GlobalNavigationBar from "./global-components/GlobalNavigationBar"



export default function HomeTemplate({children}:
  Readonly<{children: React.ReactNode;}>
) {
  

  return (
    <div className="h-fit">
      <GlobalNavigationBar />
      {children}
    </div>
  )
}