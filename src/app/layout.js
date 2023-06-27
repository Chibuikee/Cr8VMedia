import FixedBtn from "../components/fixedBtn";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BUZO PORTFOLIO",
  description: "Portfolio of Chibuzo a Media Creative with a decade experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <FixedBtn />
      </body>
    </html>
  );
}
