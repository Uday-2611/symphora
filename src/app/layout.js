import { Inter } from "next/font/google";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'
import Sidebar from "@/components/Sidebar";
import { PlayerProvider } from "@/context/PlayerContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Symphora",
  description: "A spotify clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PlayerProvider>
          <div className='bg-neutral-950 w-screen min-h-screen flex gap-4 relative'>
            <div className="w-[22.5%] h-screen fixed">
              <Sidebar />
            </div>
            <main className="w-[77.5%] h-screen fixed right-0 overflow-y-auto">
              {children}
            </main>
          </div>
        </PlayerProvider>
      </body>
    </html>
  );
}
