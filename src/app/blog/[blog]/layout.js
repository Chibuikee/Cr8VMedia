// import FixedBtn from "@/components/fixedBtn";
// import "../../globals.css";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function BlogLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        {children}
        {/* <FixedBtn /> */}
      </body>
    </html>
  );
}
