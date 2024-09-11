import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion";
import { ReactNode } from "react";

interface CharacterSectionProps {
  content: ReactNode;
  title: string;
  value: string;
}

const CharacterSection = ({ content, title, value }: CharacterSectionProps) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="text-2xl font-bold hover:no-underline">
        {title}
      </AccordionTrigger>
      <AccordionContent>{content}</AccordionContent>
    </AccordionItem>
  );
};

export default CharacterSection;
