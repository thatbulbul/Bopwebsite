'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Team() {
  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Meet Our Experts</h2>
        </div>
      </section>

      <section className="team-wrapper">
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={4}
          spaceBetween={30}
          autoplay={{ delay: 1600, disableOnInteraction: false }}
          navigation
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
          className="team-swiper"
        >
          {teamData.map((member, i) => (
            <SwiperSlide key={i}>
              <div className="team-box">
                <img src={member.img} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

const teamData = [
  { img: 'https://bopconnect.in/wp-content/uploads/2025/11/1.png', name: 'Mr. Gaurav Mavi', role: 'Co-Founder' },
  { img: 'https://bopconnect.in/wp-content/uploads/2025/11/2.png', name: 'Mr. Ankush Kadyan', role: 'Director' },
  { img: 'https://bopconnect.in/wp-content/uploads/2025/11/3.png', name: 'Mr. Chiraj Jaitley', role: 'Associate Partner' },
  { img: 'https://bopconnect.in/wp-content/uploads/2025/11/7.png', name: 'Mr. Romil Saxena', role: 'Business Head' },
  { img: 'https://bopconnect.in/wp-content/uploads/2025/11/4.png', name: 'Mr. Raghu Chona', role: 'Business Head' },
  { img: 'https://bopconnect.in/wp-content/uploads/2025/11/5.png', name: 'Mr. Navneet Kumar', role: 'Head Of Human Resources' },
  { img: 'https://bopconnect.in/wp-content/uploads/2025/11/6.png', name: 'Mr. Vishal Pandey', role: 'Business Head' },
  { img: 'https://bopconnect.in/wp-content/uploads/2025/11/8.png', name: 'Mr. Sachin Mavi', role: 'Head of Commercial' },
];
