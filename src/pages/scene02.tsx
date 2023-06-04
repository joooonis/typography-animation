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
        <div className="relative overflow-hidden bg-[#CBCBCB] w-full aspect-video flex px-40 justify-between items-center h-screen">
          <motion.div
            initial={{ opacity: 0, x: 200, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
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
            className="absolute -left-40 -bottom-40 w-[900px] h-[900px]"
          >
            <Image
              src="/scene02/man1.png"
              fill
              className="object-contain scale-x-[-1] transform"
              alt="man"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -200, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ ease: 'easeOut', duration: 1 }}
            whileHover={{
              rotateZ: [0, 2, -2, 2, -2, 0],
              transition: { duration: 2, yoyo: Infinity },
            }}
            className="absolute -right-40 -bottom-36 w-[840px] h-[840px]"
          >
            <Image
              src="/scene02/woman1.png"
              fill
              className="object-contain scale-x-[-1] transform"
              alt="woman"
            />
          </motion.div>
          {animatienEnd[0] && (
            <div className="absolute z-99 top-40">
              <motion.div
                initial={{ x: -100, scale: 1, opacity: 1, rotateZ: 0 }}
                animate={{
                  x: 900,
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
            <div className="absolute z-99 top-40">
              <motion.div
                initial={{ x: 800, scale: 1, opacity: 1, rotateZ: 0 }}
                animate={{
                  x: 0,
                  scale: 1.2,
                  opacity: 0,
                  rotateZ: [0, 2, -2, 2, -2, 0, 2, -2, 0, 2, -2, 0],
                }}
                transition={{ ease: 'circOut', duration: 5 }}
                className="relative w-[40rem] h-[40rem]"
                onAnimationComplete={() => {
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
          {animatienEnd[2] && (
            <div className="absolute z-99 top-40">
              <motion.div
                initial={{ x: -100, scale: 1, opacity: 1, rotateZ: 0 }}
                animate={{
                  x: 900,
                  scale: 1.2,
                  opacity: 0,
                  rotateZ: [0, 2, -2, 2, -2, 0, 2, -2, 0, 2, -2, 0],
                }}
                transition={{ ease: 'circOut', duration: 5 }}
                className="relative w-[28rem] h-[28rem]"
                onAnimationComplete={() => {
                  const newArr = [...animatienEnd];
                  newArr[3] = true;
                  setAnimatienEnd(newArr);
                }}
              >
                <Image
                  src="/scene02/man-word2.png"
                  fill
                  className="object-contain rotate-[-20deg] transform"
                  alt="word"
                />
              </motion.div>
            </div>
          )}
          {animatienEnd[3] && (
            <div className="absolute z-99 top-40">
              <motion.div
                initial={{ x: 800, scale: 1, opacity: 1, rotateZ: 0 }}
                animate={{
                  x: 0,
                  scale: 1.2,
                  opacity: 0,
                  rotateZ: [0, 2, -2, 2, -2, 0, 2, -2, 0, 2, -2, 0],
                }}
                transition={{ ease: 'circOut', duration: 5 }}
                className="relative w-[44rem] h-[44rem]"
                onAnimationComplete={() => {
                  const newArr = [...animatienEnd];
                  newArr[4] = true;
                  setAnimatienEnd(newArr);
                }}
              >
                <Image
                  src="/scene02/woman-word2.png"
                  fill
                  className="object-contain rotate-[20deg] transform"
                  alt="word"
                />
              </motion.div>
            </div>
          )}
          {animatienEnd[4] && (
            <div className="absolute z-99 top-40">
              <motion.div
                initial={{ x: -100, scale: 1, opacity: 1, rotateZ: 0 }}
                animate={{
                  x: 900,
                  scale: 1.2,
                  opacity: 0,
                  rotateZ: [0, 2, -2, 2, -2, 0, 2, -2, 0, 2, -2, 0],
                }}
                transition={{ ease: 'circOut', duration: 5 }}
                className="relative w-[32rem] h-[32rem]"
                onAnimationComplete={() => {
                  const newArr = [...animatienEnd];
                  newArr[5] = true;
                  setAnimatienEnd(newArr);
                }}
              >
                <Image
                  src="/scene02/man-word3.png"
                  fill
                  className="object-contain rotate-[-20deg] transform"
                  alt="word"
                />
              </motion.div>
            </div>
          )}
          {animatienEnd[5] && (
            <div className="absolute z-99 top-40">
              <motion.div
                initial={{ x: 1200, scale: 1, opacity: 1, rotateZ: 0 }}
                animate={{
                  x: 0,
                  scale: 1.2,
                  opacity: 0,
                  rotateZ: [0, 2, -2, 2, -2, 0, 2, -2, 0, 2, -2, 0],
                }}
                transition={{ ease: 'circOut', duration: 5 }}
                className="relative w-[36rem] h-[36rem]"
                onAnimationComplete={() => {
                  const newArr = [...animatienEnd];
                  newArr[6] = true;
                  setAnimatienEnd(newArr);
                }}
              >
                <Image
                  src="/scene02/woman-word3.png"
                  fill
                  className="object-contain rotate-[20deg] transform"
                  alt="word"
                />
              </motion.div>
            </div>
          )}
          {animatienEnd[6] && (
            <div className="absolute z-99 left-80 top-60">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'circOut', duration: 0.1 }}
                onAnimationComplete={() => {
                  const newArr = [...animatienEnd];
                  newArr[7] = true;
                  setAnimatienEnd(newArr);
                }}
                className="relative w-[500px] h-[500px]"
              >
                <Image
                  src="/scene02/ink1.png"
                  fill
                  className="object-contain"
                  alt="word"
                />
              </motion.div>
            </div>
          )}
          {animatienEnd[7] && (
            <div className="absolute z-99 right-80 top-90">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'circOut', duration: 0.1, delay: 0.2 }}
                // onAnimationComplete={() => {
                //   router.push('/scene03');
                // }}
                onAnimationComplete={() => {
                  const newArr = [...animatienEnd];
                  newArr[8] = true;
                  setAnimatienEnd(newArr);
                }}
                className="relative w-[500px] h-[500px]"
              >
                <Image
                  src="/scene02/ink2.png"
                  fill
                  className="object-contain"
                  alt="word"
                />
              </motion.div>
            </div>
          )}
          {animatienEnd[8] && (
            <div className="">
              <div className="absolute left-96 -translate-y-96 z-99 ">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 200 }}
                  transition={{ ease: 'circOut', duration: 4 }}
                  className="w-2 h-2 bg-black rounded-full"
                />
              </div>
              <div className="z-99 absolute right-96 top-90">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 200 }}
                  transition={{ ease: 'circOut', duration: 4 }}
                  // onAnimationComplete={() => router.push('/scene03')}
                  className="w-2 h-2 bg-black rounded-full"
                />
              </div>
              <div className="z-99 absolute right-40 top-20">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 200 }}
                  transition={{ ease: 'circOut', duration: 4 }}
                  // onAnimationComplete={() => router.push('/scene03')}
                  className="w-2 h-2 bg-black rounded-full"
                />
              </div>{' '}
              <div className="z-99 absolute right-60 bottom-40">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 200 }}
                  transition={{ ease: 'circOut', duration: 4 }}
                  // onAnimationComplete={() => router.push('/scene03')}
                  className="w-2 h-2 bg-black rounded-full"
                />
              </div>
              <div className="z-99 absolute left-60 bottom-20">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 200 }}
                  transition={{ ease: 'circOut', duration: 4 }}
                  // onAnimationComplete={() => router.push('/scene03')}
                  className="w-2 h-2 bg-black rounded-full"
                />
              </div>
              <div className="z-99 absolute left-24 bottom-0">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 200 }}
                  transition={{ ease: 'circOut', duration: 4 }}
                  onAnimationComplete={() => router.push('/scene03')}
                  className="w-2 h-2 bg-black rounded-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
