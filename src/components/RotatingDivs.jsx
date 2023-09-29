import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const divs = [
      <div className="w-full h-full flex justify-evenly items-center">
        <div className="w-32 h-32 bg-slate-500 rounded-full"></div>
        <div className="w-32 h-32 bg-slate-300 rounded-full"></div>
        <div className="w-32 h-32 bg-slate-700 rounded-full"></div>
      </div>,
      <div className="flex flex-col translate-y-[30%] justify-center w-full rounded-md p-4 bg-white items-center">
        <h2 className="font-bold text-4xl">Mision</h2>
        <p className="text-center mt-4 text-sm">
          Conscientes de la complejidad de la legislación fiscal mexicana y de la
          gran cantidad de obligaciones que las autoridades requieren a los
          contribuyentes nuestra misión como Easy SAT Contabilidad en linéa es
          ayudar a las empresas que desean cumplir con sus obligaciones fiscales de
          manera correcta y oportuna, tomando en cuenta también los beneficios que
          las mismas leyes ofrecen a los contribuyentes, del tal manera que nuestros
          clientes se sientan seguros de que su situación fiscal se encuentra dentro
          del marco legal.
        </p>
      </div>,
    <div className="flex flex-col translate-y-[30%] justify-center w-full rounded-md p-4 bg-white items-center">
      <h2 className="font-bold text-4xl">Valores</h2>
      <ul className="w-full flex flex-col justify-start px-[5%]">
        <li>- Ética profesional.</li>
        <li>- Compromiso.</li>
        <li>- Lealtad.</li>
        <li>- Honestidad.</li>
      </ul>
    </div>,
  <div className="flex flex-col translate-y-[30%] justify-center w-full rounded-md p-4 bg-white items-center">
    <h2 className="font-bold text-4xl">Visión</h2>
    <p className="text-center mt-4 text-sm">
      Consolidarnos como un servicio de contabilidad en linéa de reconocido
      prestigio en base al cumplimiento siempre oportuno de todos nuestros
      compromisos desarrollados con profesionalismo, ética y diligencia.
    </p>
  </div>,
];

const divVariants = {
  div1: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { y: 100, opacity: 0 },
  },

  div2: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { y: 100, opacity: 0 },
  },

  div3: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { y: 100, opacity: 0 },
  },
  div4: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { x: 100, opacity: 0 },
  }
};

export default function App() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === divs.length - 1 ? 0 : current + 1);
    }, 7000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <>
      <AnimatePresence>
        <motion.div
          key={current}
          variants={divVariants[`div${current + 1}`]}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full my-10 md:mt-0 h-full pb-20 md:pb-0 md:h-[30vh] lg:h-full flex items-center justify-center"
        >
          {divs[current]}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
