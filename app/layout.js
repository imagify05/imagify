import { Outfit } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
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
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className} antialiased`}>
          <main
            style={{
              background: "linear-gradient(180deg, #F2FFF9 0%, #FFF6F1 100%)",
              height: "100dvh",
              maxWidth: "100dvw",
              overflowX: "hidden",
              position: "relative",
            }}
          >
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
