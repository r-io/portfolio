import './SecondContent.css';

import { Container, Typography } from '@mui/material';

import ProjectItem from './ProjectItem';
import projects from './projects';

export default function SecondContent() {
  return (
    <article className="second-content">
      <section>
        <Typography variant="h4">Projects</Typography>
        <Container>
          {projects.map((props) => (
            <ProjectItem {...props} />
          ))}
        </Container>
      </section>
    </article>
  );
}
