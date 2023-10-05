import React from 'react'
import logoBuho from "../../../assets/logo-buho-white.webp";
import { PreguntasFrecuentesData } from '../../../assets/adminData';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../../../components/ui/accordion";

export const Preguntas = () => {
  return (
    <div className="w-full bg-white h-fit">
        <div className="px-[3%] md:px-[5%] lg:px-[10%] flex w-full h-fit  flex-col md:flex-row py-5 md:pt-5">
          <div className="md:w-1/2 relative h-full bg-transparent  flex justify-center items-center">
            <div
              className="w-full h-[45dvh] invert grayscale opacity-20 bg-center bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${logoBuho})` }}
            ></div>
            <h2 className="absolute  text-LogoBlue text-3xl font-bold">
              Preguntas Frecuentes
            </h2>
          </div>
          <div className="md:w-1/2 my-auto flex items-center justify-center h-full">
            <Accordion type="single" collapsible className="w-full">
              {PreguntasFrecuentesData.map((preg, index) => (
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger>{preg.pregunta}</AccordionTrigger>
                  <AccordionContent>
                    {typeof preg.respuesta == "object" ? (
                      <ul>
                        {preg.respuesta.map((resp) => (
                          <li>{resp}</li>
                        ))}
                      </ul>
                    ) : (
                      <>{preg.respuesta}</>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
  )
}
