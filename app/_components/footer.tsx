import { Card, CardContent } from "./ui/card";

const Footer = () => {
  return (
    <footer>
      <Card className="rounded-none">
        <CardContent className="px-5 py-6 text-xs">
          Data provided by Marvel. © {new Date().getFullYear()} Marvel
        </CardContent>
      </Card>
    </footer>
  );
};

export default Footer;
