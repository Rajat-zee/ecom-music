import '../../landing.css'
import Cards from '../Cards';
import Footer from '../Footer';
import Navbar from '../../components/Navbar'

import HeroSection from '../HeroSection.js'
import Pricing from '../Pricing';
function Home(){
    return(
        <>
        <Navbar />
        <HeroSection />
        <Cards />
        <Pricing />
        <Footer/>
        </>
    );
}
export default Home;