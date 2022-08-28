import { Box, Card, Typography } from '@mui/material';

export default function ProjectItem(props) {
  const { title, proficiency } = props;
  return (
    <Card>
      <Box className="outer-container">
        <Box className="title-container">
          <Typography variant="h5" component="div">
            {title}
          </Typography>
        </Box>
        <Box className="title-divider" />
        <Box className="progress-container">
          <Box className="progress" style={{ flexGrow: proficiency / 100 }}></Box>
          <Box className="proficiency-container">
            <Typography variant="h5" component="div">
              {proficiency}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
