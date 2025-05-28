import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
  category = "",
  title = "",
  date = "",
  link = "",
}) => {
  return (
    <Link href={link} className="h-full">
      <Card className="h-full flex flex-col justify-between overflow-hidden rounded-xl border border-muted shadow-md p-0">

        {/* ✅ Image flush with top */}
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* ✅ Text section */}
        <CardContent className="p-5 flex flex-col justify-between flex-grow">
          {category && (
            <p className="text-xs text-muted-foreground uppercase mb-1">
              {category}
            </p>
          )}
          <h3 className="text-lg font-semibold leading-snug line-clamp-3">{title}</h3>
          <p className="text-xs text-muted-foreground mt-2">{date}</p>
        </CardContent>

        {/* ✅ Button section */}
        <CardFooter className="px-5 pb-5">
          <Button
            variant="outline"
            className="w-full text-primary border-primary hover:bg-primary hover:text-white"
          >
            Read Insight
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default InsightCard;
