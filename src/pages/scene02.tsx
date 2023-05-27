import Layout from '@components/common/layout';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/router';

const paths = [
  '/scene01/r.png',
  '/scene01/o.png',
  '/scene01/b.png',
  '/scene01/e.png',
  '/scene01/r_1.png',
  '/scene01/t.png',
  '/scene01/m.png',
  '/scene01/a.png',
  '/scene01/s.png',
  '/scene01/s_1.png',
  '/scene01/i.png',
  '/scene01/n.png',
];

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 200,
    rotateZ: 0,
  },
  shake: {
    opacity: 1,
    y: 0,
    rotateZ: [
      0, 10, -10, 10, -10, 0, 10, -10, 0, 10, -10, 0, 10, -10, 0, 10, -10, 0,
    ],
  },
  shake2: {
    opacity: 1,
    y: 0,
    rotateZ: [
      0, -10, 10, -10, 10, 0, -10, 10, 0, -10, 10, 0, 10, -10, 0, 10, -10, 0,
    ],
  },
  shoot: {
    y: -4000,
    x: 4000,
    opacity: 1,
    transition: {
      duration: 4,
      easings: 'easeInOut',
    },
  },
};

export default function Scene() {
  const [animatienEnd, setAnimatienEnd] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  console.log(animatienEnd);
  const router = useRouter();
  return (
    <motion.div>
      <div className="w-full relative overflow-hidden  font-Balsamiq h-full flex justify-center items-center">
        <div className="relative overflow-hidden bg-[#CBCBCB] w-full flex px-40 justify-between items-center h-screen">
          <motion.div
            initial={{ opacity: 0, x: 200, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ ease: 'easeOut', duration: 1, delay: 1 }}
            onAnimationComplete={() => {
              const newArr = [...animatienEnd];
              newArr[0] = true;
              setAnimatienEnd(newArr);
            }}
            className="absolute -left-40 -bottom-40 w-[50rem] h-[50rem]"
          >
            <Image
              src="/scene02/man1.png"
              fill
              className="object-contain scale-x-[-1] transform"
              alt="man"
            />
          </motion.div>
          {animatienEnd[0] && (
            <div className="absolute z-99 top-10">
              <motion.div
                initial={{ x: -100, scale: 1, opacity: 1, rotateZ: 0 }}
                animate={{
                  x: 800,
                  scale: 1.2,
                  opacity: 0,
                  rotateZ: [0, 2, -2, 2, -2, 0, 2, -2, 0, 2, -2, 0],
                }}
                transition={{ ease: 'circOut', duration: 5 }}
                className="relative w-[28rem] h-[28rem]"
                onAnimationComplete={() => {
                  const newArr = [...animatienEnd];
                  newArr[1] = true;
                  setAnimatienEnd(newArr);
                }}
              >
                <Image
                  src="/scene02/man-word1.png"
                  fill
                  className="object-contain rotate-[-20deg] transform"
                  alt="word"
                />
              </motion.div>
            </div>
          )}
          {animatienEnd[1] && (
            <div className="absolute z-99 top-10">
              <motion.div
                initial={{ x: 800, scale: 1, opacity: 1, rotateZ: 0 }}
                animate={{
                  x: -100,
                  scale: 1.2,
                  opacity: 0,
                  rotateZ: [0, 2, -2, 2, -2, 0, 2, -2, 0, 2, -2, 0],
                }}
                transition={{ ease: 'circOut', duration: 5 }}
                className="relative w-[40rem] h-[40rem]"
                onAnimationStart={() => {
                  const newArr = [...animatienEnd];
                  newArr[2] = true;
                  setAnimatienEnd(newArr);
                }}
              >
                <Image
                  src="/scene02/woman-word1.png"
                  fill
                  className="object-contain rotate-[20deg] transform"
                  alt="word"
                />
              </motion.div>
            </div>
          )}
          <motion.div
            initial={{ opacity: 0, x: -200, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ ease: 'easeOut', duration: 1 }}
            className="absolute -right-40 -bottom-40 w-[50rem] h-[50rem]"
          >
            <Image
              src="/scene02/woman1.png"
              fill
              className="object-contain scale-x-[-1] transform"
              alt="woman"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
