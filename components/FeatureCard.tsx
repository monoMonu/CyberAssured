'use client';

import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type FeaturedCardProps = {
   title: string;
   description: string;
   image: string;
   cta?: string;
   color?: string;
};

const FeaturedCard = ({
   title,
   description,
   image,
   cta = "Explore",
   color
}: FeaturedCardProps) => {
   return (
      <Card className="w-full max-w-md bg-transparent shadow-none border-none text-center gap-0">
         <CardHeader className="p-4 pb-0 flex justify-center">
            <div className="relative w-24 h-24">
               <Image
                  src={image}
                  alt={title}
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
               />
            </div>
         </CardHeader>
         <CardContent className="py-6">
            <CardTitle className="text-3xl font-semibold text-foreground/80">{title}</CardTitle>
            <CardDescription className="mt-2 text-foreground text-base">
               {description}
            </CardDescription>
         </CardContent>
         <CardFooter className="p-4 justify-center">
            <Button className={`bg-${color} hover:bg-${color}/100 cursor-pointer`}>
               {cta}
            </Button>
         </CardFooter>
      </Card>
   );
};

export default FeaturedCard;
