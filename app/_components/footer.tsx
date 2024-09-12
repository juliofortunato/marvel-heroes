import { Card, CardContent } from "./ui/card";

const Footer = () => {
  return (
    <footer>
      <Card className="rounded-none">
        <CardContent className="space-y-1 px-5 py-6 text-xs">
          <p>Data provided by Marvel. © {new Date().getFullYear()} Marvel</p>
          <p>Coded with ❤️ by Júlio Fortunato</p>
        </CardContent>
      </Card>
    </footer>
  );
};

export default Footer;
