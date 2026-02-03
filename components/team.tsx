'use client';

import { useEffect } from 'react';

export default function Team() {
  useEffect(() => {
    // Load Swiper CSS
    const swiperCSS = document.createElement('link');
    swiperCSS.rel = 'stylesheet';
    swiperCSS.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
    document.head.appendChild(swiperCSS);

    // Load Swiper JS
    const swiperJS = document.createElement('script');
    swiperJS.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
    swiperJS.onload = () => {
      // Initialize Swiper after script loads
      setTimeout(() => {
        // @ts-ignore
        new Swiper('.team-swiper', {
          slidesPerView: 4,
          spaceBetween: 30,
          loop: false,
          autoplay: {
            delay: 1600,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          },
        });
      }, 300);
    };
    document.head.appendChild(swiperJS);

    return () => {
      // Cleanup
      if (document.head.contains(swiperCSS)) document.head.removeChild(swiperCSS);
      if (document.head.contains(swiperJS)) document.head.removeChild(swiperJS);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .team-wrapper {
          width: 100%;
          margin: auto;
          padding: 5px 0;
          position: relative;
          overflow: visible !important;
        }

        .team-title {
          font-size: 44px;
          font-weight: 700;
          margin-bottom: 45px;
          color: #0a1b3c;
        }

        .team-swiper {
          padding-bottom: 40px !important;
          overflow: visible !important;
        }

        .team-swiper .swiper-slide {
          padding-bottom: 20px;
        }

        .team-box {
          background: #fff;
          border-radius: 22px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          padding: 18px 18px 28px;
          text-align: left;
          transition: all 0.3s ease;
        }

        .team-box:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 35px rgba(0,0,0,0.12);
        }

        .team-box img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: 18px;
          margin-bottom: 18px;
        }

        .team-box h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 6px;
          color: #000 !important;
        }

        .team-box p {
          font-size: 15px;
          color: #6f6f6f !important;
        }

        .team-swiper .swiper-button-prev,
        .team-swiper .swiper-button-next {
          position: absolute !important;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0px 6px 18px rgba(0,0,0,0.15);
          color: #000;
          z-index: 20;
        }

        .team-swiper .swiper-button-prev {
          left: 5px;
        }

        .team-swiper .swiper-button-next {
          right: 5px;
        }

        .team-swiper .swiper-button-prev:after,
        .team-swiper .swiper-button-next:after {
          font-size: 20px;
        }

        @media (max-width: 1024px) {
          .team-box img {
            height: 360px;
          }
        }

        @media (max-width: 768px) {
          .team-box img {
            height: 310px;
          }

          .team-title {
            font-size: 34px;
          }

          .team-wrapper {
            padding-top: 0px;
          }

          .team-swiper .swiper-button-prev {
            left: 0;
          }

          .team-swiper .swiper-button-next {
            right: 0;
          }
        }
      `}</style>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4"> Meet Our Experts</h2>
          </div>
        </div>
      </section>

      <section className="team-wrapper">
        <div className="swiper team-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="team-box">
                <img src="https://bopconnect.in/wp-content/uploads/2025/11/1.png" alt="" />
                <h3>Mr. Gaurav Mavi</h3>
                <p>Co-Founder</p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="team-box">
                <img src="https://bopconnect.in/wp-content/uploads/2025/11/2.png" alt="" />
                <h3>Mr. Ankush Kadyan</h3>
                <p>Director</p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="team-box">
                <img src="https://bopconnect.in/wp-content/uploads/2025/11/3.png" alt="" />
                <h3>Mr. Chiraj Jaitley</h3>
                <p>Associate Partner</p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="team-box">
                <img src="https://bopconnect.in/wp-content/uploads/2025/11/7.png" alt="" />
                <h3>Mr. Romil Saxena</h3>
                <p>Business Head</p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="team-box">
                <img src="https://bopconnect.in/wp-content/uploads/2025/11/4.png" alt="" />
                <h3>Mr. Raghu Chona</h3>
                <p>Business Head</p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="team-box">
                <img src="https://bopconnect.in/wp-content/uploads/2025/11/5.png" alt="" />
                <h3>Mr. Navneet Kumar</h3>
                <p>Head Of Human Resources</p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="team-box">
                <img src="https://bopconnect.in/wp-content/uploads/2025/11/6.png" alt="" />
                <h3>Mr. Vishal Pandey</h3>
                <p>Business Head</p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="team-box">
                <img src="https://bopconnect.in/wp-content/uploads/2025/11/8.png" alt="" />
                <h3>Mr. Sachin Mavi</h3>
                <p>Head of Commercial</p>
              </div>
            </div>
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </section>
    </>
  );
}
