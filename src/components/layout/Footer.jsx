// import Typography from '@mui/material/Typography';
// //import GitHubIcon from '@mui/icons-material/GitHub';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import Stack from '@mui/material/Stack';
// import Grid from '@mui/material/Grid';
// import IconButton from '@mui/material/IconButton';
// import Container from '@mui/material/Container';
// import EmailIcon from '@mui/icons-material/Email';
// //import RedditIcon from '@mui/icons-material/Reddit';
// import TelegramIcon from '@mui/icons-material/Telegram';
// //import InstagramIcon from '@mui/icons-material/Instagram';
// import MediumIcon from '../ui/icons/Medium';
// import DiscordIcon from '../ui/icons/Discord';
// import certik from 'assets/images/partners/certik.svg';
// import fairyproof from 'assets/images/partners/fairyproof.png';

// const partners = [
//   {
//     label: 'certik',
//     src: certik,
//     width: 150,
//     //href: "https://www.certik.com/"
//   },
//   {
//     label: 'fairyproof',
//     src: fairyproof,
//     //href: "",
//     width: 130,
//   },
// ];

// const socialLinks = [
//   {
//     label: 'Twitter',
//     icon: <TwitterIcon />,
//     href: 'https://twitter.com/',
//   },
//   {
//     label: 'Telegram',
//     icon: <TelegramIcon />,
//     href: 'https://t.me/',
//   },
//   {
//     label: 'Discord',
//     icon: <DiscordIcon />,
//     href: 'https://discord.gg',
//   },
// ];

// const Footer = () => {
//   return (
//     <Container sx={{ mt: 5 }}>
//       <Typography sx={{ color: 'text.secondary', textAlign: 'center' }}>Audited by</Typography>
//       <Stack direction="row" spacing={2} mt={2} alignItems="center" justifyContent="center">
//         {partners.map((partner, i) => (
//           <a
//             key={i}
//             href={partner.href}
//             target="_blank"
//             rel="noreferrer"
//             style={{ filter: 'grayscale(100%)' }}
//           >
//             <img src={partner.src} alt={partner.label} width={partner.width} />
//           </a>
//         ))}
//       </Stack>
//       <Grid container spacing={2} alignItems="center" justifyContent="center" my={2}>
//         {socialLinks.map((link) => (
//           <Grid item xs={2} md={1} sx={{ textAlign: 'center' }} key={link.label}>
//             <IconButton component="a" href={link.href} target="_blank" aria-label={link.label}>
//               {link.icon}
//             </IconButton>
//           </Grid>
//         ))}
//         <Grid item xs={2} md={1} sx={{ textAlign: 'center' }}>
//           <IconButton component="a" href="" aria-label="Email">
//             <EmailIcon />
//           </IconButton>
//         </Grid>
//       </Grid>
//       <Typography
//         variant="caption"
//         display="block"
//         color="text.secondary"
//         sx={{ mt: 3, pb: 3, textAlign: 'center' }}
//       >
//         {'Copyright © '} {new Date().getFullYear()} ELO. All rights reserved.
//       </Typography>
//     </Container>
//   );
// };

// export default Footer;

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import Box from '@mui/material/Box';
import DiscordIcon from '../ui/icons/Discord';
import certik from 'assets/images/partners/certik.svg';
import fairyproof from 'assets/images/partners/fairyproof.png';

const partners = [
  {
    label: 'certik',
    src: certik,
    href: 'https://www.certik.com/',
    width: 120,
  },
  {
    label: 'fairyproof',
    src: fairyproof,
    href: 'https://fairyproof.com/',
    width: 110,
  },
];

const socialLinks = [
  {
    label: 'Twitter',
    icon: <TwitterIcon fontSize="large" />,
    href: 'https://twitter.com/',
  },
  {
    label: 'Telegram',
    icon: <TelegramIcon fontSize="large" />,
    href: 'https://t.me/',
  },
  {
    label: 'Discord',
    icon: <DiscordIcon fontSize="large" />,
    href: 'https://discord.gg',
  },
  {
    label: 'Email',
    icon: <EmailIcon fontSize="large" />,
    href: 'mailto:support@elo.com',
  },
];

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'grey.100', py: 5, mt: 8 }}>
      <Container>
        {/* Audited Section */}
        <Typography
          variant="h6"
          sx={{ color: 'text.primary', textAlign: 'center', fontWeight: 'bold', mb: 1 }}
        >
          Audited by
        </Typography>
        <Stack direction="row" spacing={3} alignItems="center" justifyContent="center" mb={3}>
          {partners.map((partner, i) => (
            <a
              key={i}
              href={partner.href}
              target="_blank"
              rel="noreferrer"
              style={{ filter: 'grayscale(100%)', transition: 'filter 0.3s' }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%)')}
              onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(100%)')}
            >
              <img src={partner.src} alt={partner.label} width={partner.width} />
            </a>
          ))}
        </Stack>

        {/* Social Icons */}
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          {socialLinks.map((link, index) => (
            <Grid item key={index}>
              <IconButton
                component="a"
                href={link.href}
                target="_blank"
                aria-label={link.label}
                sx={{
                  color: 'grey.700',
                  transition: 'transform 0.2s, color 0.3s',
                  '&:hover': { transform: 'scale(1.1)', color: 'primary.main' },
                }}
              >
                {link.icon}
              </IconButton>
            </Grid>
          ))}
        </Grid>

        {/* Copyright Section */}
        <Typography
          variant="caption"
          display="block"
          color="text.secondary"
          sx={{ mt: 4, textAlign: 'center' }}
        >
          {'Copyright © '} {new Date().getFullYear()} ELO. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
