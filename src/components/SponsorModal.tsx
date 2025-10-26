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
    name: 'Rapid Biomedical',
    logo: '/images/rapid.png',
    description: 'RAPID Biomedical GmbH is specialized in the development and production of biomedical devices. The high-frequency coils for MR imaging are used by researchers worldwide for advanced disease diagnostics. Each of these coils is developed by highly qualified experts, tailored to specific customer requirements or created in small series. The entire development and production process takes place at the company site in Rimpar/Germany. In this way, RAPID guarantees its customers both the highest quality "made in Germany" and quick and cost-effective solutions.',
  },
  {
    name: 'National Neuroimaging Facility',
    logo: '/images/nif-logo.svg',
    description: 'National Imaging Facility is Australia\'s advanced imaging network. Our vision is to enable Australian imaging science to unlock solutions to major challenges. Our mission is to make cutting-edge imaging capabilities accessible to Australian researchers and industry, to enable significant impacts on national health challenges and to accelerate Australian innovation. NIF provides a full suite of advanced imaging capability including preclinical and human imaging, radiochemistry, and analysis of imaging data. We are experts in developing new technologies, interpreting data, and applying imaging to solve complex problems.',
  },
  {
    name: 'United Imaging',
    logo: '/images/united-imaging.png',
    description: 'United Imaging Healthcare Co., Ltd. is dedicated to providing, developing and producing high-performance advanced medical imaging, radiotherapy equipment, life science instruments and offers intelligent digital solutions to customers worldwide. UIH is committed to creating more value for our customers and constantly improving the global accessibility of high-end medical equipment and services through in-depth cooperation with hospitals, universities, research institutions, and industry partners.',
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