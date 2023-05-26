import Layout from '@components/common/layout';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

export default function Home() {
  const shakeVariants = {
    initial: {
      opacity: 0,
      y: 200,
      rotateZ: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      rotateZ: [
        0, 10, -10, 10, -10, 0, 10, -10, 0, 10, -10, 0, 10, -10, 0, 10, -10, 0,
      ],
      transition: {
        delay: 0.5,
        duration: 4,
        damping: 10,
        stiffness: 100,
        yoyo: Infinity,
      },
    },
  };

  const shakeVariants2 = {
    initial: {
      opacity: 0,
      y: 200,
      rotateZ: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      rotateZ: [
        0, -10, 10, -10, 10, 0, -10, 10, 0, -10, 10, 0, 10, -10, 0, 10, -10, 0,
      ],
      transition: {
        delay: 0.5,
        duration: 4,
        damping: 10,
        stiffness: 100,
        yoyo: Infinity,
      },
    },
  };

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
              animate="animate"
              variants={{
                ...shakeVariants,
                animate: {
                  ...shakeVariants.animate,
                  transition: {
                    ...shakeVariants.animate.transition,
                    delay: 0.5 + index * 0.2,
                  },
                },
              }}
            >
              <Image src={path} fill className="object-contain" alt="r" />
            </motion.div>
          ) : (
            <motion.div
              key={path}
              id={path}
              className="relative w-28 h-28"
              initial="initial"
              animate="animate"
              variants={{
                ...shakeVariants2,
                animate: {
                  ...shakeVariants2.animate,
                  transition: {
                    ...shakeVariants2.animate.transition,
                    delay: 0.5 + index * 0.2,
                  },
                },
              }}
            >
              <Image src={path} fill className="object-contain" alt="r" />
            </motion.div>
          ),
        )}
      </div>
    </Layout>
  );
}
