import { Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import certik from 'assets/images/partners/certik.svg';
import binancechain from 'assets/images/partners/binancechain.svg';
import coinmarketcap from 'assets/images/partners/coinmarketcap.svg';
import fairyproof from 'assets/images/partners/fairyproof.png';

const partners = [
  { label: 'binancechain', src: binancechain },
  { label: 'coinmarketcap', src: coinmarketcap },
  { label: 'certik', src: certik },
  { label: 'fairyproof', src: fairyproof, width: 150 },
  { label: 'binancechain', src: binancechain },
  { label: 'coinmarketcap', src: coinmarketcap },
  { label: 'certik', src: certik },
  { label: 'fairyproof', src: fairyproof, width: 150 },
];

const PartnersSection = () => {
  return (
    <Container sx={{ py: 5 }} className="fadeInUp">
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 3 },
          960: { slidesPerView: 4 },
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
      >
        {partners.map((partner, i) => (
          <SwiperSlide key={i} style={{ textAlign: 'center' }}>
            <a
              href={partner.href}
              target="_blank"
              rel="noreferrer"
              style={{ filter: 'grayscale(100%)' }}
            >
              <img src={partner.src} alt={partner.label} width={partner.width || 160} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default PartnersSection;
