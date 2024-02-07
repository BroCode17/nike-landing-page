import{
  Hero,
  PopularProduct,
  Services,
  Subscribe,
  SpecialOffer,
  CustomerReviews,
  Footer,
  SuperQuality
} from './sections/index.js'
import Nav from './components/Nav.jsx';


const App = () =>(
<main className="relative">
  <Nav />
  <section className="xl:padding-l wide:padding-r padding-b">
    <Hero />
  </section>
  <section className="padding">
    <PopularProduct /> 
  </section>
  <section className="padding">
    <SuperQuality />
  </section>
  <section className="padding-x py-10">
    <Services />
  </section>
  <section className="padding">
    <SpecialOffer /> 
  </section>
  <section className="bg-pale-blue padding">
    <CustomerReviews /> 
  </section>
  <section className="padding-x sm:py-32 py-16 w-full">
    <Subscribe />
  </section>
  <section className="padding-x padding-t bp-8 bg-black">
    <Footer />
  </section>
</main>
);

export default App