import MapWrapper from '@/components/twins-sport-village/MapWrapper';
import Navbar from '@/components/twins-sport-village/Navbar';
import Hero from '@/components/twins-sport-village/Hero';
import Stats from '@/components/twins-sport-village/Stats';
import Impianti from '@/components/twins-sport-village/Impianti';
import ChiSiamo from '@/components/twins-sport-village/ChiSiamo';
import Prenota from '@/components/twins-sport-village/Prenota';
import Contatti from '@/components/twins-sport-village/Contatti';
import Footer from '@/components/twins-sport-village/Footer';

export default function TwinsSportVillagePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Impianti />
        <ChiSiamo />
        <Prenota />
        <Contatti />
        <MapWrapper />
      </main>
      <Footer />
    </>
  );
}
