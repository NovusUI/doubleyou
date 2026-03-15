import Footer from "../sections/Footer";
import Navbar from "../sections/NavBar";
import SEO from "../components/SEO";

const QuestQuiz = () => {
  return (
    <>
      <SEO 
        title="Doubleyou - The Quest Quiz" 
        description="Take The Quest Quiz with Doubleyou." 
        url="/quest-quiz" 
        image="/hero.png" 
      />
      <Navbar />
      
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col pt-20">
        <div className="flex-grow w-full max-w-5xl mx-auto px-4 py-12 flex flex-col items-center">
          <div className="w-full bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100 flex flex-col items-center">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdXY2DuZfU6oomZwpI2WyVzIcM2BrMPecONnuGFUqvZq_UGrA/viewform?embedded=true" 
              width="100%" 
              height="6037" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              title="The Quest Quiz Google Form"
              className="w-full"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default QuestQuiz;
