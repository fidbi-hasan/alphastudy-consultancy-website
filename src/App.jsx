import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Partners from "./sections/Partners"; // New
import Services from "./sections/Services";
import Destinations from "./sections/Destinations"; // New
import AssessmentForm from "./sections/AssessmentForm";
import Footer from "./sections/Footer";
import WhatsAppButton from "./sections/WhatsAppButton";
import IELTSScreen from "./IELTSScreen";
import SuccessStories from "./SuccessStories";
import ContactMap from "./sections/ContactMap";

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <Destinations />
      <IELTSScreen /> 
      <SuccessStories />
      <AssessmentForm />
      <ContactMap />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default App;