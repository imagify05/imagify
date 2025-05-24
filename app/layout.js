import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Imagify",
  description:
    "Unleash your creativity with AI. Turn your imagination into visual art in seconds – just type, and watch the magic happen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
