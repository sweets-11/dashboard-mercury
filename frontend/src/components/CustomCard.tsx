import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CustomCardProps {
    title: string;
    children: ReactNode;
    extraHeaderContent?: ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, children, extraHeaderContent }) => {
    return (
        <Card className="w-[500px] sm:mt-8 xl:mt-0 ml-3 p-2">
            <CardHeader className="flex flex-col items-stretch space-y-0 p-0 sm:flex-row">
                <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
                    <CardTitle className='text-2xl'>{title}</CardTitle>
                    {extraHeaderContent && extraHeaderContent}
                </div>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    );
};

export default CustomCard;
