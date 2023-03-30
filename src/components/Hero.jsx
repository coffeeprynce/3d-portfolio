import { motion } from 'framer-motion';

import {styles } from '../styles';
import { ComputersCanvas } from './canvas';
import herobanner from '../assets/profilepic.jpg';
import { AdamCanvas } from './canvas';


const Hero = () => {
  return (
   <section className='relative w-full h-screen mx-auto'>
    <div className={`${styles.paddingX} absolute
    inset-0 top-[120px] max-w-7xl mx-auto flex
    flex-row items-start gap-5`}>
      <div className='flex flex-col
      justify-center items-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-[#77d6a0]' />
        <div className='w-1 sm:h-80 h-40 violet-gradient' />
      </div>
      <div>
        <h1 className={`${styles.heroHeadText}
        text-white`}>Hi, I'm <span className='text-[#5effb7]'>Kyle</span></h1>
        <p className={`${styles.heroSubText} mt-2
        text-white-100`}>
          I am a full stack <br
          className='sm:block hidden' />
          web developer
        </p>
        <img src={herobanner} alt="bannerpic" className="w-25
        h-25 justify-right opacity-50 br-50"/>
      </div>
    </div>
    {/* <AdamCanvas /> */}
    {/* <ComputersCanvas /> */}

    {/* <div className="relative xs:bottom-10
    bottom-32 top-3 w-full flex justify-center
    items-center">
      <a href="#about">
        <div className="w-[35px] h-[64px]
        rounded-3xl border-4 border-secondary
        flex justify-center items-start p-2">
          <motion.dev
          animate={{
            y: [0, 24, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop'
          }}
          className="w-3 h-3 rounded-full
          bg-secondary mb-1"
          />

        </div>
      </a>

    </div> */}
    <div>
    </div>
   </section>
  )
}

export default Hero