import { Inter } from "next/font/google";
import "@/app/_styles/globals.css";
import Menu from "./_components/Menu";
import { Lumiflex } from "uvcanvas";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nextjs & gsap Animated Navigation",
  description: "Tania's web proj2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
