import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#4b0055] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4b0055] via-[#6a0a78] to-[#4b0055] opacity-90" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About BOP.in
            </h1>
            <p className="text-white/80 leading-relaxed mb-8">
              Building on the best of our knowledge and the latest technology, BOP is enabling the Indian population to buy property easily and more accessible. We’ve been doing the work for nearly 2 Decades, and support more than 200,000 families in different situations they go through with our network of over 3,000 dedicated professionals to help identify houses for the dream owners and investment buyers. At BOP, we provide it all with a personal touch, that suits you best. And we take you through everything from making a property choice and understanding trends in our market, financial planning, access to legal assistance. With us by your side, the most difficult real estate decisions seem light and clear. Join us to help guide you through how to land the property you want!
            </p>

            <button className="bg-white text-[#4b0055] px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Contact Us
            </button>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/About/bop-about.jpeg"
              alt="BOP Team"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="bg-white text-[#4b0055] py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { value: "20+", label: "Years of Excellence" },
            { value: "200K+", label: "Happy Clients" },
            { value: "3.5K+", label: "Realty Experts" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold">{item.value}</h3>
              <p className="mt-2 text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 bg-[#4b0055]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div className="rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/About/mission.png"
              alt="Mission"
              width={500}
              height={200}
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <ul className="space-y-3 text-white/80">
              <li>• Facilitate investors and buyers with appropriate property decisions</li>
              <li>• Offer valued investment opportunities across NCR and India</li>
              <li>• Build trust through honesty, transparency, and professionalism</li>
            </ul>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#5f0b6b] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <p className="max-w-3xl mx-auto text-white/80 mb-14">
            With unmatched market knowledge, strategic partnerships, and a
            people-first approach, BOP.in ensures every property journey is
            seamless and rewarding.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Customers", desc: "200,000+ satisfied clients across India" },
              { title: "Tie Ups", desc: "Strong partnerships with top developers" },
              { title: "Experts", desc: "Experienced advisors & consultants" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white text-[#4b0055] rounded-2xl p-8 shadow-lg hover:scale-105 transition"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* BUSINESS VENTURES */}
      <section className="py-24 bg-[#4b0055]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Business Ventures of BOP.in
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto mb-16">
            Diversified ventures that strengthen our real estate ecosystem and
            expand value across industries.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Real Estate Consultancy",
              "Hospitality & Food Business",
              "Education & Training",
              "Property Management Services",
            ].map((item, i) => (
              <div
                key={i}
                className="border border-white/20 rounded-2xl p-6 hover:bg-white hover:text-[#4b0055] transition"
              >
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* VISION */}
      <section className="bg-[#5f0b6b] py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div className="rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/About/vision.png"
              alt="Vision"
              width={400}
              height={200}
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <ul className="space-y-3 text-white/80">
              <li>BOP.in aims to be India's most trusted real estate advisory platform. We are committed to developing a customer-centric, transparent property ecosystem where purchasing or investing in real estate is easy, well-informed, and dependable. We aim to build a future where every client is assured and comfortable with their real estate experience.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-white py-24 text-[#4b0055]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">What We Do?</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Residential & Commercial",
                desc: "Homes, offices & retail investments",
              },
              {
                title: "Real Estate Consultancy",
                desc: "Strategic advisory & market insights",
              },
              {
                title: "Property Management",
                desc: "End-to-end asset management services",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#f7e9fa] rounded-2xl p-8 shadow hover:scale-105 transition"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
