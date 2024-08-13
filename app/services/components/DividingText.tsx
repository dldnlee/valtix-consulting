
export default function DividingText({text, styling="w-[500px]"} : {text:string, styling?:string}) {
  return (
    <div className="flex w-full items-center">
      <hr className="border-black/20 w-full"/>
      <p className={`w-[500px] text-center text-xl font-bold ${styling}`}>{text}</p>
      <hr className="border-black/20 w-full"/>
    </div>
  )
}