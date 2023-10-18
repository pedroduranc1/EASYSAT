import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { BlogCard } from "../CardBlog";

const BlogCarousel = ({ array, isPopular }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollInterval, setScrollInterval] = useState(null); // Estado para almacenar el intervalo
  const [maxScroll, setmaxScroll] = useState(0)

  const CarouselRef = useRef(null);
  const ContentRef = useRef(null);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Función para actualizar el ancho de la pantalla cuando cambie el tamaño de la ventana
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    // Agregar un event listener para el evento de cambio de tamaño de la ventana
    window.addEventListener("resize", updateScreenWidth);

    // Limpia el event listener cuando el componente se desmonta para evitar fugas de memoria
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  useEffect(() => {
    const CarouselElement = CarouselRef.current;
    const ContentElement = ContentRef.current;

    if (CarouselElement && ContentElement) {
      const divWidth = CarouselElement.getBoundingClientRect().width;
      const contentWidth = ContentElement.getBoundingClientRect().width;

      // Calcular el ancho máximo basado en el contenido y el div
      setmaxScroll(-(contentWidth - divWidth));
    }
  }, [screenWidth]);

  const startScroll = (direction) => {
    if (scrollInterval !== null) {
      clearInterval(scrollInterval); // Detener el intervalo anterior si existe
    }

    const scrollAmount = 15; // Ajusta la cantidad de desplazamiento según tus necesidades

    setScrollInterval(
      setInterval(() => {
        if (
          (direction === "left" && scrollPosition < 0) || // Evitar desplazarse más allá del inicio
          (direction === "right" && scrollPosition > maxScroll) // Evitar desplazarse más allá del tope
        ) {
          setScrollPosition((prevPosition) => {
            const newPosition =
              direction === "left"
                ? prevPosition + scrollAmount
                : prevPosition - scrollAmount;

            // Ajustar la posición si se supera el tope o el inicio
            if (newPosition > 0) {
              return 0;
            } else if (newPosition < maxScroll) {
              return maxScroll;
            }

            return newPosition;
          });
        }
      }, 100)
    );
  };

  const stopScroll = () => {
    if (scrollInterval !== null) {
      clearInterval(scrollInterval); // Detener el intervalo actual si existe
      setScrollInterval(null); // Establecer el intervalo en null para indicar que no hay ninguno en curso
    }
  };

  useEffect(() => {
    // Limpia el intervalo cuando el componente se desmonta
    return () => {
      if (scrollInterval !== null) {
        clearInterval(scrollInterval);
      }
    };
  }, []);


  return (
    <div
      ref={CarouselRef}
      className="w-full relative h-fit overflow-auto sm:overflow-hidden py-2"
    >
      {!screenWidth < 750 && (
        <ChevronLeft
          className="absolute hidden sm:flex h-full top-0 z-40 left-0 cursor-pointer text-white"
          size={50}
          onMouseEnter={() => startScroll("left")}
          onMouseLeave={stopScroll}
        />
      )}

      <div
        ref={ContentRef}
        className="w-fit relative flex h-full transition-all"
        style={{ transform: `translateX(${scrollPosition}px)` }}
      >
        {/* CARD BLOG */}
        <AnimatePresence>
          {array.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </AnimatePresence>
      </div>
      {!screenWidth < 750 && (
        <ChevronRight
          className="absolute hidden sm:flex h-full cursor-pointer top-0 right-0 text-white"
          size={50}
          onMouseEnter={() => startScroll("right")}
          onMouseLeave={stopScroll}
        />
      )}
    </div>
  );
};

export default BlogCarousel;
