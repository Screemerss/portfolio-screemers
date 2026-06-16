import { Metadata } from 'next';
import { Outfit, Montserrat, Inter } from "next/font/google";
import './twins-globals.css';

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Twins Sport Village | Centro Sportivo Polifunzionale Nicosia",
  description: "Benvenuti al Twins Sport Village di Nicosia (EN). Tennis in resina ammortizzata, Padel in erba sintetica, Calcio a 5/6, Bocce e area relax con idromassaggio. Prenota ora!",
};

export default function TwinsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${outfit.variable} ${montserrat.variable} ${inter.variable} scroll-smooth`}>
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" 
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer" 
      />
      {children}
    </div>
  );
}
