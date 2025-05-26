import { Outfit } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Imagify",
  description:
    "Unleash your creativity with AI. Turn your imagination into visual art in seconds - just type, and watch the magic happen",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
      }}
    >
      <html lang="en">
        <body className={`${outfit.className} antialiased`}>
          <main
            style={{
              background: "linear-gradient(180deg, #F2FFF9 0%, #FFF6F1 100%)",
              height: "100vh",
              maxWidth: "100vw",
              overflowX: "hidden",
              position: "relative",
            }}
          >
            {children}
            <Toaster />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
