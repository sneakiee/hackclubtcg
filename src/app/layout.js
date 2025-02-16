import localFont from "next/font/local";
// import { Geo } from "next/font/google";
import "./globals.css";

const minecraftia = localFont({
  src: "./fonts/Minecraftia-Regular.ttf",
  variable: "--font-minecraftia"
})

/*const geo = Geo({
  weight: "400",
  subsets: "latin",
  display: "swap",
  variable: "--font-geo"
})*/

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "HackClubTCG",
  description: "in development!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
