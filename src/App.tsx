import { Suspense, lazy } from 'react';
import Footer from './sections/Footer';
import PreviousProjects from './sections/PreviousProject';
import Navbar from './sections/NavBar';
const PartnerSection = lazy(() => import('./sections/PartnerSection'));
const CoreValues = lazy(() => import('./sections/CoreValue'));
const FellowshipProgram = lazy(() => import('./sections/FellowshipProgram'));
const LatestProduct = lazy(() => import('./sections/LastestProduct'));
const EmpowerNextGen = lazy(() => import('./sections/EmpowerNextGen'));
const PartnershipsWithImpact = lazy(() => import('./sections/PartnershipWithImpact'));

const Hero = lazy(() => import('./sections/Hero'));
const AboutUs = lazy(() => import('./sections/AboutUs'));
const CoreSolutions = lazy(() => import('./sections/CoreSolutions'));

function App() {
  //snap-y snap-mandatory 
  return (
    <>
    <Navbar/>
    
    <div className='h-screen overflow-y-scroll'>
      
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div className="text-center py-10">Loading section…</div>}>
        <AboutUs />
      </Suspense>
      <Suspense fallback={<div className="text-center py-10">Loading section…</div>}>
        <CoreSolutions />
      </Suspense>
      <Suspense fallback={<div className="text-center py-10">Loading section…</div>}>
        <PartnershipsWithImpact/>
      </Suspense>
      <Suspense fallback={<div className="text-center py-10">Loading section…</div>}>
        <EmpowerNextGen/>
      </Suspense>
      <Suspense fallback={<div className="text-center py-10">Loading section…</div>}>
        <LatestProduct/>
      </Suspense>
      <Suspense fallback={<div className="text-center py-10">Loading section…</div>}>
        <FellowshipProgram/>
      </Suspense>
      <Suspense fallback={<div className="text-center py-10">Loading section…</div>}>
        <CoreValues/>
      </Suspense>
      <PreviousProjects/>
      <Suspense fallback={<div className="text-center py-10">Loading section…</div>}>
        <PartnerSection/>
      </Suspense>
      
      <Footer/>
    </div>
    </>
  );
}

export default App;