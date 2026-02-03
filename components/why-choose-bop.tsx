export default function WhyChooseBop() {
  return (
    <section className="why-choose-bop">
      <div className="bop-container">
        <div className="bop-image">
          <img src="https://bop.in/wp-content/uploads/2025/10/award2.jpg" alt="BOP Award Ceremony" />
        </div>
        <div className="bop-content">
          <h2>Why Choose <span>BOP.in?</span></h2>
          <p>
            BOP.in has been recognized as India's Most Trusted Real Estate Consultant by ET Now, 
            a testament to our unwavering commitment to transparency, expertise, and client success.
          </p>
          <p>
            Property investment decisions are milestones — whether you're buying your first home, 
            upgrading your lifestyle, or exploring premium investment opportunities. 
            At BOP.in, we ensure your journey is simpler, smarter, and more rewarding.
          </p>
          <p>
            With nearly two decades of market experience, our award-winning team combines deep 
            industry knowledge, strong networks, and honest advisory to help you find the right 
            property at the right price — across residential, commercial, and investment segments 
            in NCR and beyond.
          </p>

          <ul className="bop-points">
            <li>Simple. Smart. Real Estate.</li>
            <li>Turning Real Estate Dreams Into Reality.</li>
            <li>Find the Right Property, the Right Way.</li>
          </ul>
          
          <a href="https://bop.in/properties/" className="btn-property">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            Explore More
          </a>
        </div>
      </div>
    </section>
  )
}