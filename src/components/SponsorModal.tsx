import { useState } from 'react';
import './SponsorModal.css';

interface Sponsor {
  name: string;
  logo: string;
  description: string;
}

const sponsors: Sponsor[] = [
  {
    name: 'Siemens Healthineers',
    logo: '/images/siemens.png',
    description: 'Siemens Healthineers enables healthcare providers to increase value by empowering them on their journey towards expanding precision medicine, transforming care delivery, and improving patient experience, all enabled by digitalizing healthcare. An estimated five million patients worldwide everyday benefit from innovative technologies and services in the areas of diagnostic and therapeutic imaging, laboratory diagnostics and molecular medicine as well as digital health and enterprise services. We\'re a leading medical technology company with over 120 years of experience and 18,500 patents globally. With over 50,000 employees in more than 70 countries, we\'ll continue to innovate and shape the future of healthcare.',
  },
  {
    name: 'Bruker',
    logo: '/images/bruker.png',
    description: 'Bruker is enabling scientists to make breakthrough discoveries and develop new applications that improve the quality of human life. Bruker\'s high-performance scientific instruments and high-value analytical and diagnostic solutions enable scientists to explore life and materials at molecular, cellular and microscopic levels. In close cooperation with our customers, Bruker is enabling innovation, improved productivity and customer success in life science molecular research, in applied and pharma applications, in microscopy and nanoanalysis, and in industrial applications, as well as in cell biology, preclinical imaging, clinical phenomics and proteomics research and clinical microbiology.',
  },
  {
    name: 'Rapid Biomedical',
    logo: '/images/rapid.png',
    description: 'RAPID Biomedical GmbH is specialized in the development and production of biomedical devices. The high-frequency coils for MR imaging are used by researchers worldwide for advanced disease diagnostics. Each of these coils is developed by highly qualified experts, tailored to specific customer requirements or created in small series. The entire development and production process takes place at the company site in Rimpar/Germany. In this way, RAPID guarantees its customers both the highest quality "made in Germany" and quick and cost-effective solutions.',
  },
];

export default function SponsorModal() {
  const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null);

  const openModal = (sponsor: Sponsor) => {
    setSelectedSponsor(sponsor);
  };

  const closeModal = () => {
    setSelectedSponsor(null);
  };

  return (
    <>
      <div className="sponsors-grid">
        {sponsors.map((sponsor) => (
          <button
            key={sponsor.name}
            className="sponsor-card-button"
            onClick={() => openModal(sponsor)}
            aria-label={`Learn more about ${sponsor.name}`}
          >
            <div className="sponsor-logo">
              <img src={sponsor.logo} alt={sponsor.name} />
            </div>
            <h3>{sponsor.name}</h3>
          </button>
        ))}
      </div>

      {selectedSponsor && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="modal-logo">
              <img src={selectedSponsor.logo} alt={selectedSponsor.name} />
            </div>
            <h2>{selectedSponsor.name}</h2>
            <p>{selectedSponsor.description}</p>
          </div>
        </div>
      )}
    </>
  );
}