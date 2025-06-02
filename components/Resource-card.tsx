import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type ResourceCardProps = {
   title: string
   description: string
   imageUrl: string
   link: string
}

export default function ResourceCard({
   title,
   description,
   imageUrl,
   link,
}: ResourceCardProps) {
   return (
      <Card className="flex flex-col justify-between h-full border border-[--border] bg-[--card] text-[--card-foreground] shadow-md transition hover:shadow-xl">
         <CardContent className="px-6 py-3 flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row justify-between gap-4">
               <div>
                  <h3 className="text-2xl font-bold text-[--foreground]">{title}</h3>
                  <p className="mt-2 text-base text-[--muted-foreground]">{description}</p>
                  <Link href={link}  className="mt-5 inline-block">
                     <Button variant={"outline"}>   
                        View report
                     </Button>
                  </Link>
               </div>
               <div className="flex-shrink-0 w-full max-w-[150px] mx-auto lg:mx-0">
                  <Image
                     src={imageUrl}
                     alt={title}
                     width={200}
                     height={150}
                     className="object-cover border rounded shadow h-full"
                  />
               </div>
            </div>
         </CardContent>
      </Card>
   )
}
