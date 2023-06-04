import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/router';

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
  ]);

  const router = useRouter();
  return (
    <motion.div>
      <div className="cursor-none relative overflow-hidden  font-Balsamiq w-full aspect-video flex justify-center items-center">
        <div className="relative overflow-hidden bg-[#CBCBCB] w-full aspect-video flex-col px-40 justify-between items-center h-screen">
          <motion.div
            initial={{ opacity: 0, x: -0, scale: 0.9 }}
            animate={{ opacity: 1, x: 100, scale: 1.5 }}
            transition={{ ease: 'easeOut', duration: 1, delay: 1 }}
            whileHover={{
              rotateZ: [0, 2, -2, 2, -2, 0],
              transition: { duration: 2, yoyo: Infinity },
            }}
            onAnimationComplete={() => {
              const newArr = [...animatienEnd];
              newArr[0] = true;
              setAnimatienEnd(newArr);
            }}
            className="absolute -left-72 -bottom-40 w-[900px] h-[900px]"
          >
            <Image
              src="/scene03/people.png"
              fill
              className="object-contain scale-x-[-1] transform"
              alt="man"
            />
          </motion.div>
          <div className="translate-x-[1000px] ">
            <div className="w-full  mt-60 flex scale-150">
              <motion.div
                animate={{
                  opacity: [0, 1],
                  scale: [1, 3, 1],
                  x: ['0%', '100%', '0%'], // 좌우로 반전되는 애니메이션 설정
                  rotate: [0, 360], // 요소가 뒤집히는 애니메이션 설정
                }}
                transition={{
                  duration: 10,
                }}
                className="relative w-28 h-60"
              >
                <Image
                  src="/scene03/r_1.png"
                  fill
                  className="object-contain"
                  alt="m"
                />
              </motion.div>
              <motion.div
                animate={{
                  rotateY: [0, 360],
                  opacity: [0, 1],
                  y: ['0%', '10%', '-10%', '0%'],
                }}
                transition={{ duration: 10, yoyo: Infinity }}
                className="relative w-28 h-48 -ml-4"
              >
                <Image
                  src="/scene03/o.png"
                  fill
                  className="object-contain"
                  alt="m"
                />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 0.8, 1],
                  opacity: [0, 1],
                }}
                transition={{
                  duration: 10,
                  yoyo: Infinity,
                }}
                className="relative w-32 h-66 -ml-8"
              >
                <Image
                  src="/scene03/b.png"
                  fill
                  className="object-contain"
                  alt="m"
                />
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  x: '100%',
                  scale: 1.5, // 1.5배 크기로 변형
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 10, // 10초 동안 애니메이션이 진행
                  yoyo: Infinity, // 애니메이션을 반복해서 진행하고 제자리로 돌아옴
                }}
                className="relative w-28 h-60"
              >
                <Image
                  src="/scene03/r_2.png"
                  fill
                  className="object-contain -ml-8"
                  alt="m"
                />
              </motion.div>
            </div>
            <div className="w-full ml-20  flex scale-150">
              <motion.div
                initial={{
                  opacity: 0,
                  x: '-100%',
                  y: '100%',
                  scale: 1.5, // 1.5배 크기로 변형
                }}
                animate={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 10, // 10초 동안 애니메이션이 진행
                  yoyo: Infinity, // 애니메이션을 반복해서 진행하고 제자리로 돌아옴
                }}
                className="relative w-40 h-52"
              >
                <Image
                  src="/scene03/e.png"
                  fill
                  className="object-contain"
                  alt="m"
                />
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.1,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 10, // 10초 동안 애니메이션이 진행
                  yoyo: Infinity, // 애니메이션을 반복해서 진행하고 제자리로 돌아옴
                }}
                className="relative -ml-12 w-28 h-60"
              >
                <Image
                  src="/scene03/t.png"
                  fill
                  className="object-contain"
                  alt="m"
                />
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.1,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10, // 10초 동안 애니메이션이 진행
                  yoyo: Infinity, // 애니메이션을 반복해서 진행하고 제자리로 돌아옴
                }}
                className="relative -ml-6 mt-4 w-32 h-48"
              >
                <Image
                  src="/scene03/m.png"
                  fill
                  className="object-contain"
                  alt="m"
                />
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  x: '100%',
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scaleX: [1, -1, 1],
                }}
                transition={{
                  duration: 10, // 10초 동안 애니메이션이 진행
                  yoyo: Infinity, // 애니메이션을 반복해서 진행하고 제자리로 돌아옴
                }}
                className="relative -ml-6 -translate-y-12 w-40 h-60"
              >
                <Image
                  src="/scene03/a.png"
                  fill
                  className="object-contain"
                  alt="m"
                />
              </motion.div>
            </div>
            <div className="w-full translate-x-40 -mt-16 flex scale-150">
              <motion.div
                initial={{
                  y: '100%',
                  x: '-50%',
                }}
                animate={{
                  y: 0,
                  x: 0,
                  opacity: [0, 1],
                  scaleX: [1, -1, 1],
                }}
                transition={{
                  duration: 10,
                }}
                className="relative w-40 h-72"
              >
                <Image
                  src="/scene03/s_1.png"
                  fill
                  className="object-contain"
                  alt="m"
                />
              </motion.div>
              <motion.div
                initial={{
                  y: '100%',
                  x: '-50%',
                }}
                animate={{
                  y: 0,
                  x: 0,
                  opacity: [0, 1],
                  scaleY: [1, -1, 1],
                }}
                transition={{
                  duration: 10,
                }}
                className="relative  -ml-16  w-40 h-72"
              >
                <Image
                  src="/scene03/s_2.png"
                  fill
                  className="object-contain"
                  alt="m"
                />
              </motion.div>
              <motion.div
                initial={{
                  y: '100%',
                  x: '50%',
                }}
                animate={{
                  y: 0,
                  x: 0,
                  rotate: [0, 360],
                  opacity: [0, 1],
                  scaleY: [1, -1, 1],
                }}
                transition={{
                  duration: 10,
                  yoyo: Infinity,
                }}
                className="relative -ml-8 mt-16 w-16 h-44"
              >
                <Image
                  src="/scene03/i.png"
                  fill
                  className="object-contain"
                  alt="m"
                />
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  x: '100%',
                  y: '50%',
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scaleX: [1, -1, 1],
                }}
                transition={{
                  duration: 10, // 10초 동안 애니메이션이 진행
                  yoyo: Infinity, // 애니메이션을 반복해서 진행하고 제자리로 돌아옴
                }}
                className="relative w-28 h-60"
              >
                <Image
                  src="/scene03/n.png"
                  fill
                  className="object-contain"
                  alt="m"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
