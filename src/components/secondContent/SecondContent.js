import './SecondContent.css';

import { Container, Typography } from '@mui/material';

import ProjectItem from './ProjectItem';

export default function SecondContent() {
  return (
    <article className="second-content">
      <section>
        <Typography variant="h4">Upcoming Projects</Typography>
        <Container>
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </Container>
      </section>
    </article>
  );
}
