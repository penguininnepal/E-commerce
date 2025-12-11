import Category from '@/Components/ProductShowcase/Category/ProductCategory';
import HeroSection from '../Components/Home/HeroSection'
import FeaturedProducts from '../Components/ProductShowcase/ProductCards/FeaturedProducts'
import JustForYou from '@/Components/ProductShowcase/ProductCards/JustForYou';

const Home = () => { 
  return (
    <div className='bg-gray-100'>
        
        <HeroSection />
        <Category/>
        <FeaturedProducts />
        <JustForYou />
        

    </div>
  )

  }


export default Home
