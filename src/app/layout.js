import localFont from "next/font/local";
// import { Geo } from "next/font/google";
import "./globals.css";

const minecraftia = localFont({
  src: "./fonts/Minecraftia-Regular.ttf",
  variable: "--font-minecraftia"
})

export const metadata = {
  title: "HackClubTCG",
  description: "in development!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={minecraftia.className}>
        {children}
      </body>
    </html>
  );
}
