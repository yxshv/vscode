import { ArrowRightIcon, DownloadIcon } from "@radix-ui/react-icons";
import { useRef, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants/fade";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.to(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        scrub: true,
      },
      y: 50,
    });
  }, [titleRef]);

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        className="mt-14 flex min-h-[70vh] flex-col items-center justify-normal gap-4 px-6 xl:mt-28 xl:min-h-[auto] xl:gap-8 xl:px-40"
      >
        <h1
          ref={titleRef}
          className="flex flex-col justify-center gap-1 text-center text-4xl lg:gap-4 lg:text-7xl"
        >
          <span className="font-light">Code Editing.</span>
          <span className="font-medium">Redefined</span>
        </h1>
        <motion.p
          variants={fadeIn}
          transition={{ delay: 0.2 }}
          className="text-md text-center font-light xl:text-xl"
        >
          A free, open source, cross platform code editor
        </motion.p>
        <motion.div
          variants={fadeIn}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-sm font-light xl:gap-3 xl:text-lg"
        >
          <div
            style={
              {
                "--start-color": "rgb(31, 156, 240, 0.8)",
                "--end-color": "#206DBF",
              } as CSSProperties
            }
            className="gradient rounded-[calc(0.375rem+2px)] bg-gradient-to-t p-[2px] xl:rounded-[calc(0.5rem+2px)]"
          >
            <a
              href="#"
              className="flex items-center justify-center gap-1 rounded-md bg-accent-1 px-5 py-2 text-white xl:rounded-lg xl:px-6"
            >
              <DownloadIcon className="xl:h-5 xl:w-5" />
              Download
            </a>
          </div>

          <div
            style={
              {
                "--start-color": "rgb(31, 156, 240, 0.5)",
                "--end-color": "#38393E",
              } as CSSProperties
            }
            className="gradient rounded-[calc(0.375rem+2px)] bg-gradient-to-t p-[2px] xl:rounded-[calc(0.5rem+2px)]"
          >
            <a
              href="#"
              className="flex items-center justify-center gap-1 rounded-md bg-gray-1 px-5 py-2 text-white xl:rounded-lg xl:px-6"
            >
              Try it on the Web
              <ArrowRightIcon className="xl:h-5 xl:w-5" />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 16,
            duration: 1,
            damping: 7,
          }}
          className="relative flex items-center justify-center will-change-transform"
        >
          <div className="editor-bg mt-5 rounded-[calc(2px+0.5rem)] p-0 xl:mt-14 xl:p-[2px]">
            <img src="/dark+.png" className="rounded-lg" />
          </div>
          <div className="blob-1 absolute left-[50%] top-[80%] z-[-1] aspect-square w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-1 blur-[150px] xl:w-[65vw] xl:blur-[300px]"></div>
        </motion.div>
      </motion.div>
    </>
  );
}
