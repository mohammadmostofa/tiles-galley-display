import { Geist} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// import dns from 'node:dns'
// dns.setServers(['8.8.8.8', '8.8.4.4'])

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html
    data-theme='dark'
      lang="en"
      className={`${geistSans.variable}h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
        

      </body>
    </html>
  );
}
