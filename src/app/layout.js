import Head from "next/head";
import FixedBtn from "../components/fixedBtn";
import "./globals.css";
import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
});

export const metadata = {
  title: "BUZO PORTFOLIO",
  description: "Portfolio of Chibuzo a Media Creative with a decade experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${hind.variable} font-sans`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Eczar:wght@400;500;600;700&family=Hind:wght@300;400;500;600&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <FixedBtn />
      </body>
    </html>
  );
}
