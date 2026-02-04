import Header from '@/components/header'
import Hero from '@/components/hero'
import WhyChooseBop from '@/components/why-choose-bop'
import SearchSection from '@/components/search-section'
import MediaCarousel from '@/components/media-carousel'
import PropertyListings from '@/components/property-listings'
import FeaturedProjects from '@/components/featured-projects'
import Team from '@/components/team'
import Testimonials from '@/components/testimonials'
import BlogSection from '@/components/blog-section'
import ContactSection from '@/components/contact-section'
import LogoMarquee from '@/components/logo-marquee'
import Footer from '@/components/footer'


export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <SearchSection />
      <WhyChooseBop />
      <MediaCarousel />
      <PropertyListings />
      <FeaturedProjects />
      <Team />
      <Testimonials />
      <BlogSection />
      <ContactSection />
      <LogoMarquee />
      <Footer />
    </main>
  )
}
