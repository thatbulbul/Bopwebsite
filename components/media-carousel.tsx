'use client';

import { useEffect, useRef } from 'react';

export default function MediaCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let autoScroll: NodeJS.Timeout;

    const scrollNext = () => {
      track.scrollBy({ left: track.clientWidth, behavior: "smooth" });
    };

    const scrollPrev = () => {
      track.scrollBy({ left: -track.clientWidth, behavior: "smooth" });
    };

    // Auto-scroll on desktop only
    if (window.innerWidth > 768) {
      autoScroll = setInterval(scrollNext, 4000);

      // Pause auto-scroll on hover
      track.addEventListener("mouseenter", () => clearInterval(autoScroll));
      track.addEventListener("mouseleave", () => {
        autoScroll = setInterval(scrollNext, 4000);
      });
    }

    // Navigation buttons
    const nextBtn = document.querySelector(".media-next") as HTMLButtonElement;
    const prevBtn = document.querySelector(".media-prev") as HTMLButtonElement;

    if (nextBtn && prevBtn) {
      nextBtn.addEventListener("click", scrollNext);
      prevBtn.addEventListener("click", scrollPrev);
    }

    return () => {
      if (autoScroll) clearInterval(autoScroll);
      if (nextBtn && prevBtn) {
        nextBtn.removeEventListener("click", scrollNext);
        prevBtn.removeEventListener("click", scrollPrev);
      }
    };
  }, []);

  const mediaCards = [
    {
      img: "https://bop.in/wp-content/uploads/2025/11/pti-img.png",
      title: "BOP.in Celebrates 20 Years of Building Trust, Growth, and Dreams",
      description: "What began in 2006 as a small, passionate venture in Delhi-NCR",
      link: "https://www.ptinews.com/press-release/bop-in-celebrates-20-years-of-building-trust-growth-and-dreams/3101230"
    },
    {
      img: "https://bop.in/wp-content/uploads/2025/11/logos-of-media-.png",
      title: "How infrastructure is powering Delhi-NCR's real estate boom",
      description: "Delhi-NCR has always been a magnet for real estate",
      link: "https://www.thehindu.com/life-and-style/homes-and-gardens/how-infrastructure-is-powering-delhi-ncrs-real-estate-boom/article69905465.ece"
    },
    {
      img: "https://bop.in/wp-content/uploads/2025/11/10.png",
      title: "bop.in Encourages Young Investors to Secure",
      description: "As India experiences fast-paced development of infrastructure",
      link: "https://www.magicbricks.com/blog/6-reasons-to-invest--buy-property-in-noida/124307.html"
    },
    {
      img: "https://bop.in/wp-content/uploads/2025/11/19.png",
      title: "Is Your Home Habitable?",
      description: "When you buy a new home, the excitement of finally moving in",
      link: "https://timesproperty.com/news/post/is-your-home-habitable-there-is-only-one-way-to-find-out-blid7870"
    },
    {
      img: "https://bop.in/wp-content/uploads/2025/11/1.png",
      title: "Gaurav Mavi Encourages Youth to Invest",
      description: "Mr. Mavi believes that investments in commercial ventures",
      link: "https://www.apnnews.com/bop-ins-co-founder-gaurav-mavi-encourages-youth-to-invest-in-commercial-projects-for-a-secure-future-on-world-realtors-day/"
    },
    {
      img: "https://bop.in/wp-content/uploads/2025/11/17.png",
      title: "Bop.in Resumes to the Field with Delhi Tigers",
      description: "BOP.in continues to champion sports as a medium of inspiration",
      link: "https://sportsz.news/sports/bop-in-resumes-to-the-field-in-collaboration-with-new-delhi-tigers-for-adpl-t20/"
    },
    {
      img: "https://bop.in/wp-content/uploads/2025/11/7.png",
      title: "Protect Your Property Rights",
      description: "Gaurav Mavi, Co-founder of BOP.in, Speaks on World Consumer Rights Day",
      link: "https://m.dailyhunt.in/news/india/english/news+patrolling-epaper-newspatr/bopin+unveils+revolutionary+investment+schemes+for+investors-newsid-n654358944?sm=Y"
    },
    {
      img: "https://bop.in/wp-content/uploads/2025/11/13.png",
      title: "India's Office Leasing Boom Accelerates",
      description: "India's commercial sector is undergoing a transformative phase",
      link: "https://www.outlookindia.com/announcements/news-media-wire/indias-office-leasing-boom-accelerates"
    }
  ];

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured in Media</h2>
            <p className="text-xl text-gray-600">Recognized by leading publications and media outlets</p>
          </div>

          
        </div>
      </section>

      <style jsx>{`
        .as-seen-on-media {
          text-align: center;
          padding: 40px 0;
          background: #f9fafb;
        }

        .media-carousel {
          position: relative;
          width: 90%;
          margin: 0 auto;
          overflow: hidden;
        }

        .media-track {
          display: flex;
          gap: 20px;
          transition: transform 0.5s ease-in-out;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }

        .media-track::-webkit-scrollbar {
          display: none;
        }

        .media-card {
          flex: 0 0 calc(25% - 15px);
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          padding: 20px 15px;
          display: flex;
          flex-direction: column;
          text-align: left;
          height: 350px;
          justify-content: space-between;
        }

        .media-card-img {
          width: 100%;
          height: 120px;
          object-fit: contain;
          display: block;
          margin-bottom: 12px;
        }

        .media-card-title {
          font-size: 1rem;
          font-weight: 600;
          color: #222;
          margin-bottom: 10px;
          min-height: 55px;
        }

        .media-card-description {
          color: #555;
          font-size: 0.95rem;
          line-height: 1.5;
          min-height: 60px;
          margin-bottom: 12px;
        }

        .media-card-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .read-more-btn {
          background: #EC268F;
          color: #fff;
          padding: 8px 16px;
          border-radius: 10px;
          font-size: 0.85rem;
          text-decoration: none;
          border: 2px solid #EC268F;
          transition: 0.3s;
        }

        .read-more-btn:hover {
          background: #fff;
          color: #EC268F;
        }

        .share-icon {
          color: #60045D;
          font-size: 1.2rem;
        }

        .media-prev, .media-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          border: none;
          font-size: 1.4rem;
          color: #EC268F;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(0,0,0,0.15);
          opacity: 0;
          visibility: hidden;
          transition: 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .media-carousel:hover .media-prev,
        .media-carousel:hover .media-next {
          opacity: 1;
          visibility: visible;
        }

        .media-prev { left: 10px; }
        .media-next { right: 10px; }

        @media (max-width: 1024px) {
          .media-card {
            flex: 0 0 calc(33.33% - 14px);
          }
        }

        @media (max-width: 768px) {
          .media-track {
            padding: 0 5px;
            padding-bottom: 12px;
          }

          .media-card {
            flex: 0 0 80%;
            margin-right: 10px;
          }

          .media-prev, .media-next {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .media-card {
            flex: 0 0 90%;
          }
        }
      `}</style>

      <section className="as-seen-on-media">
        <div className="media-carousel">
          <button className="media-prev">&#10094;</button>

          <div className="media-track" ref={trackRef}>
            {mediaCards.map((card, index) => (
              <div key={index} className="media-card">
                <img src={card.img} alt={`media-${index}`} className="media-card-img" />
                <h3 className="media-card-title">{card.title}</h3>
                <p className="media-card-description">{card.description}</p>
                <div className="media-card-actions">
                  <a href={card.link} className="read-more-btn">Read More</a>
                  <a 
                    href={`https://wa.me/?text=Check out this amazing article:${card.link}`} 
                    target="_blank" 
                    className="share-icon" 
                    title="Share on WhatsApp"
                  >
                    <i className="fas fa-share-alt"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button className="media-next">&#10095;</button>
        </div>
      </section>
    </>
  );
}