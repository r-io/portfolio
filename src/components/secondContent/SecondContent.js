import './SecondContent.css';

import { Devices, Equalizer, Lightbulb, RocketLaunch, Speed } from '@mui/icons-material';
import { Card, Container, Paper, Typography } from '@mui/material';
import ScrollAnimation from 'react-animate-on-scroll';

import BarItem from './BarItem';

export default function SecondContent() {
  return (
    <article id="about" className="second-content">
      <section>
        <ScrollAnimation animateIn="flipInY">
          <Typography variant="h4">
            <Equalizer fontSize="large" />
            About
          </Typography>
        </ScrollAnimation>
        <Container className="top-container">
          <Card>
            <Paper>
              <Speed fontSize="large" />
            </Paper>
            <Typography variant="h6">Fast</Typography>
            <Typography variant="p" textAlign="center">
              Fast load times and free of lag.
            </Typography>
          </Card>
          <Card>
            <Paper>
              <Devices fontSize="large" />
            </Paper>
            <Typography variant="h6">Responsive</Typography>
            <Typography variant="p" textAlign="center">
              Work on any device, big or small.
            </Typography>
          </Card>
          <Card>
            <Paper>
              <RocketLaunch fontSize="large" />
            </Paper>
            <Typography variant="h6">Dynamic</Typography>
            <Typography variant="p" textAlign="center">
              Contains the latest information.
            </Typography>
          </Card>
          <Card>
            <Paper>
              <Lightbulb fontSize="large" />
            </Paper>
            <Typography variant="h6">Easy</Typography>
            <Typography variant="p" textAlign="center">
              Easy to use and intuitive UX/UI.
            </Typography>
          </Card>
        </Container>
        <ScrollAnimation animateIn="fadeIn">
          <Container className="bottom-container">
            <BarItem title={'HTML'} proficiency={90} />
            <BarItem title={'CSS'} proficiency={90} />
            <BarItem title={'Javascript'} proficiency={80} />
            <BarItem title={'React'} proficiency={80} />
            <BarItem title={'Node.js'} proficiency={75} />
            <BarItem title={'PHP'} proficiency={70} />
            <BarItem title={'Photoshop'} proficiency={65} />
            <BarItem title={'UI Design'} proficiency={60} />
          </Container>
        </ScrollAnimation>
      </section>
    </article>
  );
}
