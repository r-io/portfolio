import './SecondContent.css';
import 'react-svg-radar-chart/build/css/index.css';

import { Devices, Equalizer, Lightbulb, RocketLaunch, Speed } from '@mui/icons-material';
import { Card, Container, Paper, Typography } from '@mui/material';
import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from 'chart.js';
import ScrollAnimation from 'react-animate-on-scroll';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

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
        <Container>
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
          <Container className="chart-container">
            <Radar
              options={{
                // responsive: true,
                maintainAspectRatio: true,
                scales: {
                  Radar: {
                    beginAtZero: true,
                    max: 100,
                    pointLabels: {
                      font: {
                        size: 15,
                      },
                    },
                  },
                },
              }}
              data={{
                labels: ['HTML', 'React', 'UI Design', 'CSS', 'Javascript', 'Node.js'],
                datasets: [
                  {
                    label: 'Proficiency',
                    data: [90, 80, 50, 90, 80, 70],
                    backgroundColor: 'rgba(9, 125, 242, 0.2)',
                    borderColor: 'rgba(9, 125, 242, 1)',
                    borderWidth: 2,
                  },
                ],
              }}
            />
          </Container>
        </ScrollAnimation>
      </section>
    </article>
  );
}
