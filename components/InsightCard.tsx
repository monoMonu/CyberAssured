import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface InsightCardProps {
   imageUrl: string;
   category?: string;
   title?: string;
   date?: string;
   link?: string;
}

const InsightCard: React.FC<InsightCardProps> = ({
   imageUrl,
   category="",
   title="",
   date="",
   link="",
}) => {
   return (
      <Link href={link} className="flex flex-col items-center justify-center">
         <Card className="min-w-xs bg-card text-card-foreground shadow-md max-w-sm gap-0 p-0 pb-4 border-primary">
            <CardHeader className="p-0">
               <div className="relative w-full h-40 overflow-hidden rounded-t-md">
                  <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
               </div>
            </CardHeader>
            <CardContent className="p-4">
               <p className="text-xs text-muted-foreground uppercase">{category}</p>
               <h3 className="text-2xl font-semibold mt-1">{title}</h3>
               <p className="text-xs text-muted-foreground mt-2">{date}</p>
            </CardContent>
            <CardFooter className="px-4">
               <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-background">
                  Read Insight
               </Button>
            </CardFooter>
         </Card>
      </Link>
   );
};

export default InsightCard;
