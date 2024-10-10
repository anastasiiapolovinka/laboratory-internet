import { HeroSection } from "./components/HeroSection";
import { HowWorkSection } from "./components/HowWorkSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { QuestionsSection } from "./components/QuestionsSection";
import { UsingCreditSection } from "./components/UsingCreditSection";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <HeroSection />
      <HowWorkSection />
      <ReviewsSection />
      <QuestionsSection />
      <UsingCreditSection />
      <Form />
      <Footer />
    </>
  );
}

export default App;
