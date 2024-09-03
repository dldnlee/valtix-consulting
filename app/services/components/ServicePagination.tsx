import Link from "next/link";

interface ServicePaginationProps {
  text1 : string;
  link1 : string;
  text2 : string;
  link2 : string;
}

export default function ServicePagination({text1, link1, text2, link2} : ServicePaginationProps) {
  return (
    <div className="w-full 2xl:p-default-padding p-medium-padding flex justify-between font-semibold">
      <Link href={link1} className="2xl:w-[500px] w-[200px] hover:text-beige hover:border-beige 2xl:p-10 p-2 border 2xl:text-lg border-black/50 flex justify-center text-center">
        {text1}
      </Link>
      <Link href={link2} className="2xl:w-[500px] w-[200px] hover:text-beige hover:border-beige 2xl:p-10 p-2 border 2xl:text-lg border-black/50 flex justify-center text-center">
        {text2}
      </Link>
    </div>
  )
}
