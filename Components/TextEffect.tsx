import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Front-End Developer',
        1000, // wait 1s before replacing
        'Ui & Ux Developer',
        1000,
        'Web Developer',
        1000,
        'Programmer',
        1000,
      ]}
      wrapper='span'
      speed={50}
      className='lg:text-4xl md:text-2xl text-lg font-bold text-[#55e6a5] uppercase'
      repeat={Infinity}
    />
  );
};
export default TextEffect;