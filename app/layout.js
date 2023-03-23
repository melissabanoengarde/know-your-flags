import "./globals.css";
import { Header, Footer } from "@/components";

export const metadata = {
  title: "Worldflags",
  description:
    "Challenge your geographical prowess with this game, which tests your ability to identify the countries represented by a variety of flags from across the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
