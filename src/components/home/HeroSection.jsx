// import { Link } from 'react-router-dom';
// import Stack from '@mui/material/Stack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// //import logoArt from "assets/images/logo-blue-art1.png";
// import ReactPlayer from 'react-player';

// const HeroSection = () => {
//   return (
//     <Container className="fadeInUp">
//       <Stack direction="row" spacing={5} alignItems="center" justifyContent="space-between">
//         <Box sx={{ maxWidth: '700px', py: 5, mb: 5, mx: 'auto' }}>
//           <Typography
//             color="primary.main"
//             variant="h2"
//             sx={{ fontWeight: 'bold', mb: 3 }}
//             component="div"
//           >
//             Effortless Order Foods
//           </Typography>
//           <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
//             ELO is decentralized reward system, the overall system including reward will be extended
//             and we will launch extra services to make our token more valuable. People who own $ELO
//             can get more and more reward. Our community will grow so fast and surely go to the moon
//             with strong supporters and investors.
//           </Typography>
//           {/* <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
//             ...
//           </Typography> */}
//           <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontWeight: 700 }}>
//             Let's get more and more $ELO token.
//           </Typography>
//           <Stack direction="row" spacing={2}>
//             <Button
//               component={Link}
//               to="/pre-sale"
//               disableElevation
//               variant="contained"
//               endIcon={<ArrowForwardIcon />}
//             >
//               Get ELO
//             </Button>
//             <Button
//               component={Link}
//               to="/pre-sale"
//               disableElevation
//               variant="contained"
//               endIcon={<ArrowForwardIcon />}
//             >
//               ELO Whitepaper
//             </Button>
//             {/* <Button
//               component="a"
//               href={''} // elo whitepaper url
//               target="_blank"
//               rel="noopener noreferrer"
//               endIcon={<ArrowForwardIcon />}
//             >
//               ELO Whitepaper
//             </Button> */}
//           </Stack>
//         </Box>
//         <Box sx={{ display: { xs: 'none', md: 'block' } }}>
//           {/* <img
//             src={logoArt}
//             alt="ELO Logo Alt"
//             width="450"
//           /> */}
//           <ReactPlayer url="https://www.youtube.com/watch?v=VB5_R9_F8MY" />
//         </Box>
//       </Stack>
//     </Container>
//   );
// };

// export default HeroSection;

import { Link } from 'react-router-dom';
import { Stack, Button, Typography, Box, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ReactPlayer from 'react-player';

const HeroSection = () => {
  return (
    <Box sx={{ bgcolor: 'grey.50', py: { xs: 8, md: 12 } }}>
      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={5}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left Side Content */}
          <Box sx={{ maxWidth: '700px', textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              color="primary"
              variant="h2"
              sx={{ fontWeight: 'bold', mb: 3, fontSize: { xs: '2.5rem', md: '3rem' } }}
            >
              Effortless Order Foods
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
              ELO is a decentralized reward system. The overall system, including rewards, will be
              extended, and we will launch extra services to make our token more valuable. People
              who own $ELO can get more and more rewards.
            </Typography>
            <Typography variant="body1" color="text.primary" sx={{ mb: 3, fontWeight: 'bold' }}>
              Let’s get more and more $ELO tokens.
            </Typography>
            {/* CTA Buttons */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent={{ xs: 'center', md: 'start' }}
            >
              <Button
                component={Link}
                to="/pre-sale"
                disableElevation
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'green.600',
                  '&:hover': { bgcolor: 'green.700' },
                  color: 'white',
                  px: 4,
                }}
                endIcon={<ArrowForwardIcon />}
              >
                Get ELO
              </Button>
              <Button
                component={Link}
                to="/whitepaper"
                disableElevation
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'green.600',
                  color: 'green.600',
                  '&:hover': { bgcolor: 'green.50', borderColor: 'green.700', color: 'green.700' },
                  px: 4,
                  borderRadius: 4,
                }}
                endIcon={<ArrowForwardIcon />}
              >
                ELO Whitepaper
              </Button>
            </Stack>
          </Box>

          {/* Video Section */}
          <Box sx={{ width: { xs: '100%', md: '50%' }, textAlign: 'center' }}>
            <Box
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: 3,
                maxWidth: '450px',
                mx: 'auto',
              }}
            >
              <ReactPlayer
                url="https://www.youtube.com/watch?v=VB5_R9_F8MY"
                width="100%"
                height="250px"
                controls
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
