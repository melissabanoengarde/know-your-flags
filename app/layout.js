import "./globals.css";
import { Source_Sans_Pro } from "next/font/google";
import { Header, Footer } from "@/components";

const ssp = Source_Sans_Pro({
  weight: ["200", "300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Worldflags",
  description:
    "Challenge your geographical prowess with this game, which tests your ability to identify the countries represented by a variety of flags from across the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`font-normal ${ssp.className}`}>
      <body>
        <Header />
        <main className="px-5 md:px-8 lg:px-16 pt-[40px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
