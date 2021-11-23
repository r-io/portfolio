import './SecondContent.css';

import { FolderOpen } from '@mui/icons-material';
import { Container, Typography } from '@mui/material';

import ProjectItem from './ProjectItem';
import projects from './projects';

export default function SecondContent() {
  return (
    <article id="portfolio" className="second-content">
      <section>
        <Typography variant="h4">
          <FolderOpen fontSize="large" />
          Portfolio
        </Typography>
        <Container>
          {projects.map((props) => (
            <ProjectItem {...props} />
          ))}
        </Container>
      </section>
    </article>
  );
}
