import { Download, GitHub, Language, Photo, Shop } from '@mui/icons-material';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import Slider from 'react-slick';

function SimpleDialog(props) {
  const { onClose, open, id, count, title, landscape } = props;

  const handleClose = () => {
    onClose();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: landscape ? 1 : 3,
    slidesToScroll: 1,
    responsive: landscape
      ? undefined
      : [
          {
            breakpoint: 1080,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true,
              infinite: true,
            },
          },
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              infinite: true,
            },
          },
        ],
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="lg">
      <DialogContent>
        <Slider {...settings}>
          {new Array(count).fill().map((_, index) => (
            <img
              className={landscape ? 'landscape-screenshot-image' : 'screenshot-image'}
              key={index}
              src={'/projects/' + id + '-' + (index + 1) + '.jpg'}
              alt={title}
              loading="lazy"
            />
          ))}
        </Slider>
      </DialogContent>
    </Dialog>
  );
}

export default function ProjectItem(props) {
  const { id, title, description, website, github, shop, apk } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="195"
        image={'/projects/' + id + '.jpg'}
        alt={title}
        onClick={handleClickOpen}
      />
      <Divider />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title="View images">
          <IconButton size="large" onClick={handleClickOpen} color="primary">
            <Photo />
          </IconButton>
        </Tooltip>
        {website && (
          <Tooltip title="Visit Website">
            <IconButton size="large" href={website} target="_blank" color="primary">
              <Language />
            </IconButton>
          </Tooltip>
        )}
        {github && (
          <Tooltip title="View github repository">
            <IconButton size="large" href={github} target="_blank" color="primary">
              <GitHub />
            </IconButton>
          </Tooltip>
        )}
        {shop && (
          <Tooltip title="View on Google Play Store">
            <IconButton size="large" href={shop} target="_blank" color="primary">
              <Shop />
            </IconButton>
          </Tooltip>
        )}
        {apk && (
          <Tooltip title="Download APK of the incomplete version">
            <IconButton size="large" href={'/projects/' + id + '-incomplete.apk'} color="primary">
              <Download />
            </IconButton>
          </Tooltip>
        )}
      </CardActions>
      <SimpleDialog {...props} open={open} onClose={handleClose} />
    </Card>
  );
}
