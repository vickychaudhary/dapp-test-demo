import { Typography, Box, Container } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const stageData = [
  {
    phase: 'Phase I',
    tasks: ['1K Holders', 'Presale Launch', 'Stage 1 Marketing', '1% Airdrop'],
    completed: true,
    icon: <RocketLaunchIcon />,
  },
  {
    phase: 'Phase II',
    tasks: ['3K Holders', 'Add to DEX', 'Stage 2 Marketing'],
    completed: false,
    icon: <TrendingUpIcon />,
  },
  {
    phase: 'Phase III',
    tasks: ['Stage 3 Marketing', 'Add to CEX'],
    completed: false,
    icon: <StorefrontIcon />,
  },
  {
    phase: 'Phase IV',
    tasks: ['5K Holders', 'Staking Pool Launch', 'Community Growth'],
    completed: false,
    icon: <MonetizationOnIcon />,
  },
  {
    phase: 'Phase V',
    tasks: ['10K Holders', 'Ordering Reward Launch', '1% Airdrop', 'Go to the moon 🚀'],
    completed: false,
    icon: <RocketLaunchIcon />,
  },
];

const Roadmap = () => {
  return (
    <Box sx={{ py: 10, background: 'linear-gradient(to bottom, #f8f9fa, #ffffff)' }}>
      <Container>
        <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 2, color: '#333' }}>
          🚀 Roadmap
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 5 }}>
          This roadmap outlines our future plans and development milestones.
        </Typography>

        <Timeline position="alternate">
          {stageData.map((stage, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent sx={{ display: { xs: 'none', md: 'block' } }}>
                <Typography variant="h6" fontWeight="bold">
                  {stage.phase}
                </Typography>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: '#d1d1d1' }} />
                <TimelineDot
                  variant={stage.completed ? 'filled' : 'outlined'}
                  color={stage.completed ? 'success' : 'primary'}
                  sx={{ boxShadow: 'none' }}
                >
                  {stage.icon}
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: '#d1d1d1' }} />
              </TimelineSeparator>

              <TimelineContent sx={{ py: '12px' }}>
                <Typography variant="h6" fontWeight="bold" sx={{ color: '#555' }}>
                  {stage.phase}
                </Typography>
                {stage.tasks.map((task, i) => (
                  <Typography
                    key={i}
                    variant="body1"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      fontSize: '1rem',
                      color: '#666',
                      mt: 1,
                    }}
                  >
                    • {task}
                  </Typography>
                ))}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};

export default Roadmap;
