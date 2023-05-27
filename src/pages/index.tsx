import Layout from '@components/common/layout';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';

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

export default function Home() {
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

  return (
    <Layout>
      <div className="relative overflow-hidden bg-[#CBCBCB] w-full flex justify-center items-center h-screen">
        {paths.map((path, index) =>
          index % 2 === 0 ? (
            <motion.div
              key={path}
              id={path}
              className="relative w-28 h-28"
              initial="initial"
              animate={animatienEnd[index] ? 'shoot' : 'shake'}
              variants={{
                ...variants,
                shake: {
                  ...variants.shake,
                  transition: {
                    duration: 2,
                    delay: 0.5 + index * 0.2,
                  },
                },
              }}
              onAnimationComplete={(curr) =>
                setTimeout(() => {
                  setAnimatienEnd((prev) => {
                    const newArr = [...prev];
                    newArr[index] = true;
                    return newArr;
                  });
                }, 1000)
              }
            >
              <Image src={path} fill className="object-contain" alt="r" />
            </motion.div>
          ) : (
            <motion.div
              key={path}
              id={path}
              className="relative w-28 h-28"
              initial="initial"
              animate={animatienEnd[index] ? 'shoot' : 'shake2'}
              variants={{
                ...variants,
                shake2: {
                  ...variants.shake2,
                  transition: {
                    duration: 2,
                    delay: 0.5 + index * 0.2,
                  },
                },
              }}
              onAnimationComplete={(curr) =>
                setTimeout(() => {
                  setAnimatienEnd((prev) => {
                    const newArr = [...prev];
                    newArr[index] = true;
                    return newArr;
                  });
                }, 1000)
              }
            >
              <Image src={path} fill className="object-contain" alt="r" />
            </motion.div>
          ),
        )}
      </div>
    </Layout>
  );
}
