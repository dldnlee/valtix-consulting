import { useEffect, useState } from "react"


export default function GlobalNavigationBar() {
  const [GNBStyle, setGNBStyle] = useState();

  useEffect(() => {
    const link = window.location.href;
    console.log(link);
  }, [])

  return (
    <div className={`w-full bg-white h-[50px] sticky top-0 ${GNBStyle}`}>
      <h1>hello</h1>
    </div>
  )
}