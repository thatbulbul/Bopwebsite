'use client';

export default function LogoMarquee() {
  const logos = [
    { src: "https://bop.in/wp-content/uploads/2025/07/bhutani.webp", alt: "BHUTANI" },
    { src: "https://bop.in/wp-content/uploads/2025/07/gaurs-e1753943275660.webp", alt: "GAURS" },
    { src: "https://bop.in/wp-content/uploads/2025/07/EMBLICA-scaled-e1753943595570.webp", alt: "EMBLICA" },
    { src: "https://bop.in/wp-content/uploads/2025/07/M3M-Logo-scaled.webp", alt: "M3M" },
    { src: "https://bop.in/wp-content/uploads/2025/07/Prestige_Group-e1753943789266.webp", alt: "PRESTIGE" },
    { src: "https://bop.in/wp-content/uploads/2025/07/Krisumi-e1753960215590.webp", alt: "KRISUMI", style: { marginBottom: "5px" } },
    { src: "https://bop.in/wp-content/uploads/2025/10/spectrum-2.png", alt: "Spectrum Metro", style: { marginBottom: "5px" } },
    { src: "https://bop.in/wp-content/uploads/2025/10/Godrej-majesty-e1762335742379.png", alt: "Godrej", style: { marginBottom: "5px" } },
    { src: "https://bop.in/wp-content/uploads/2025/10/Jaypee-group.webp", alt: "Jaypee-group", style: { marginBottom: "5px" } },
    { src: "https://bop.in/wp-content/uploads/2025/10/Ametek.webp", alt: "Ametek", style: { marginBottom: "5px" } },
    { src: "https://bop.in/wp-content/uploads/2025/10/ace-properties.png", alt: "ace-properties", style: { marginBottom: "5px" } },
    { src: "https://bop.in/wp-content/uploads/2025/10/golden-1.png", alt: "golden-1", style: { marginBottom: "5px" } },
    { src: "https://bop.in/wp-content/uploads/2025/10/group-108-scaled.png", alt: "group-108", style: { marginBottom: "5px" } },
    { src: "https://bop.in/wp-content/uploads/2025/10/2369-tata-housing_logo.webp", alt: "Tata-Housing", style: { marginBottom: "5px" } },
    { src: "https://bop.in/wp-content/uploads/2025/10/Mahagun.png", alt: "Mahagun", style: { marginBottom: "5px" } },
    { src: "https://bop.in/wp-content/uploads/2025/10/Migsun.png", alt: "Migsun", style: { marginBottom: "5px" } },
    { src: "https://bop.in/wp-content/uploads/2025/09/share.jpg", alt: "Max Estate", style: { marginBottom: "5px" } },
    { src: "https://bop.in/wp-content/uploads/2025/10/sikka.png", alt: "Sikka", style: { marginBottom: "5px" } },
    { src: "https://bop.in/wp-content/uploads/2025/10/Dlf.webp", alt: "DLF", style: { marginBottom: "5px" } },
    { src: "https://bop.in/wp-content/uploads/2025/10/crc-building.webp", alt: "CRC", style: { marginBottom: "5px" } }
  ];

  return (
    <>
      <style jsx>{`
        .logo-marquee {
          overflow: hidden;
          white-space: nowrap;
          background: #f8f9fa;
          padding: 40px 0;
          border-top: 1px solid #e9ecef;
          border-bottom: 1px solid #e9ecef;
        }

        .logo-track {
          display: inline-flex;
          animation: scroll 30s linear infinite;
          gap: 60px;
          align-items: center;
        }

        .logo-track img {
          height: 60px;
          width: auto;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .logo-track img:hover {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.1);
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .logo-marquee:hover .logo-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="logo-marquee">
        <div className="logo-track">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <img 
              key={index} 
              src={logo.src} 
              alt={logo.alt} 
              style={logo.style || {}}
            />
          ))}
          {/* Duplicate set for smooth looping */}
          {logos.map((logo, index) => (
            <img 
              key={`duplicate-${index}`} 
              src={logo.src} 
              alt={logo.alt} 
              style={logo.style || {}}
            />
          ))}
        </div>
      </div>
    </>
  );
}