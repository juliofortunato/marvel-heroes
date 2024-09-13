import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "./_components/footer";
import ReactQueryClientProvider from "./_providers/react-query-client-provider";
import "./globals.css";

const gilroy = localFont({
  src: [
    {
      path: "../public/fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
});

export const metadata: Metadata = {
  title: "Marvel Heroes",
  description: "Digital gallery for Marvel characters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gilroy.className} antialiased`}>
        <ReactQueryClientProvider>
          <div className="flex h-screen flex-col">
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
