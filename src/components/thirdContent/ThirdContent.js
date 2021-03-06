import './ThirdContent.css';

import { FolderOpen } from '@mui/icons-material';
import { Container, Typography } from '@mui/material';
import ScrollAnimation from 'react-animate-on-scroll';

import ProjectItem from './ProjectItem';
import projects from './projects';

export default function SecondContent() {
  return (
    <article id="portfolio" className="third-content">
      <section>
        <ScrollAnimation animateIn="flipInY">
          <Typography variant="h4">
            <FolderOpen fontSize="large" />
            Portfolio
          </Typography>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <Container>
            {projects.map((props) => (
              <ProjectItem {...props} />
            ))}
          </Container>
        </ScrollAnimation>
      </section>
    </article>
  );
}
