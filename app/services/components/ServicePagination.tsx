import Link from "next/link";

interface ServicePaginationProps {
  text1 : string;
  link1 : string;
  text2 : string;
  link2 : string;
}

export default function ServicePagination({text1, link1, text2, link2} : ServicePaginationProps) {
  return (
    <div className="w-full p-default-padding flex justify-between font-semibold">
      <Link href={link1} className="w-[500px] hover:text-beige hover:border-beige p-10 border text-lg border-black/50 flex justify-center text-center">
        {text1}
      </Link>
      <Link href={link2} className="w-[500px] hover:text-beige hover:border-beige p-10 border text-lg border-black/50 flex justify-center text-center">
        {text2}
      </Link>
    </div>
  )
}
