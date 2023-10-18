import { Providers } from "@/components/providers";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import { UserProvider, useUser } from "@auth0/nextjs-auth0/client";
export const metadata = {
  title: "Injury Reporting System",
  description: "Injury reporting system",
  themeColor:"#00000"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel='manifest' href='/manifest.json'/>
      <body className={inter.className}>
        <UserProvider>
          <Providers>
                <Navbar />
                {children}
          </Providers>
        </UserProvider>
      </body>
    </html>
  );
}
