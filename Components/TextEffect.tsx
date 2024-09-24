import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Front-End Developer',
        3000, // wait 3s before replacing
        'Ui & Ux Developer',
        1000,
        'Web Developer',
        1000,
        'Programmer',
        1000,
      ]}
      wrapper='span'
      speed={50}
      className='text-effect'
      repeat={Infinity}
    />
  );
};
export default TextEffect;