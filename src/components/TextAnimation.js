import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Web', 'React Native', 'Front End', 'PHP', 'Mobile App', 'React'];

export default function TextAnimation() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 5000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h3>
      I'm a&nbsp;
      <TextTransition text={TEXTS[index % TEXTS.length]} springConfig={presets.wobbly} />
      &nbsp;Developer
    </h3>
  );
}
