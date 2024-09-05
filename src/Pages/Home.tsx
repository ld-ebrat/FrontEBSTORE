import Carousel from "../Section/Home/Carousel"
import CategoryHome from "../Section/Home/CategoryHome"
import Footer from "../Section/Home/Footer"
import NavBar from "../Components/NavBar"
import Recent from "../Section/Home/Recent"
import SpecialOffersHome from "../Section/Home/SpecialOffersHome"


const Home: React.FC = () => {
    return (
        <>
            <NavBar />
            <Carousel/>
            <CategoryHome/>
            <Recent/>
            <SpecialOffersHome/>
            <Footer/>
        </>
    )
}

export default Home