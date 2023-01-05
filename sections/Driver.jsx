'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';
import { TitleText } from '../components';


function Driver({driver}) {
    return (
        <section className={`${styles.innerWidth} mx-auto px-5 space-y-5`}>
            <TitleText
                title={<>This is one of our amazing <br className="md:block hidden" /> drivers</>}
                textStyles="text-right"
            />
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
            >


                <motion.div
                    variants={fadeIn('left', 'tween', 0.2, 1)}
                    className="relative flex-1 flex justify-center items-center"
                >
                    <img
                        src={driver?.carImage.url}
                        alt="planet-09"
                        className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
                    />
                </motion.div>


                <motion.div
                    variants={fadeIn('right', 'tween', 0.2, 1)}
                    className="flex-[.8] lg:max-w-[500px] flex justify-start flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
                >
                    <img src={driver?.profileImage.url} alt="" className='object-cover w-[250px] h-[250px] rounded-full mb-5 mx-auto' />
                    <div>
                        <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
                            {driver?.name}
                        </h4>
                        <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
                            Taxitel Driver
                        </p>
                    </div>

                    <p className="mt-[24px] font-normal sm:text-[20px] text-[15px] sm:leading-[45.6px] leading-[39.6px] text-white">
                        “{driver?.description}”
                    </p>
                </motion.div>


            </motion.div>
            {/** 
         
         <div className="flex flex-col space-x-3 flex-grow items-center">
            
            <h1 className='font-extrabold text-[24px] leading-[30.24px] text-white'>John Deo</h1>
        </div>

         */}


        </section>

    )
}

export default Driver