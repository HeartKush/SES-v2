"use client";

import React, { useState, useRef, useEffect } from "react";
import { useDisclosure } from "@nextui-org/react";
import HistoryModal, { type Picture } from "./HistoryModal"; // Ajusta la ruta según tu estructura
import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";

// Información histórica para cada año
const picturesObject: { [year: string]: Picture[] } = {
  2020: [
    {
      src: "/image/history/inicioOperaciones.webp",
      alt: "Logo Softwow",
      title: "INICIAMOS OPERACIONES",
      description:
        "En el año 2020, nació SoftWow Colombia, una empresa apasionada por el desarrollo de software y el marketing digital. Desde entonces, nos hemos dedicado a crear soluciones innovadoras e impulsar el éxito de nuestros clientes en el mundo digital.",
    },
  ],
  2021: [
    {
      src: "/image/history/panahora.webp",
      alt: "PAN AHORA",
      title: "PAN AHORA",
      description:
        "En 2021, nació PAN Ahora, una innovadora startup dedicada a la comercialización de productos de panadería y repostería entregados directamente a tu hogar.",
    },
    {
      src: "/image/history/appsco2021.webp",
      alt: "APPS.CO",
      title: "APPS.CO",
      description:
        "En 2021, PAN Ahora se alzó con el título de ganador en el prestigioso programa Descubrimiento Digital de APPSCO. Esta distinción reconoció el compromiso y la excelencia de PAN Ahora en el mundo de la comercialización de productos de panadería y repostería a través de soluciones digitales.",
    },
  ],
  2022: [
    {
      src: "/image/history/appsco2022.webp",
      alt: "APPS.CO",
      title: "APPS.CO",
      description:
        "SoftWow dio un paso importante en su trayectoria al ser elegido para participar en el Programa de Crecimiento Tech de APPSCO. Esta oportunidad no solo valida nuestra posición como una empresa líder en tecnología, sino que también resalta nuestro compromiso constante con la mejora y el crecimiento.",
    },
    {
      src: "/image/history/reconocimiento3.webp",
      alt: "MINISTERIO TIC",
      title: "MINISTERIO TIC",
      description:
        "Tuvimos el honor de ser un invitado especial en un destacado evento organizado por el Ministerio de Telecomunicaciones (mintic), donde compartimos nuestra experiencia y conocimiento en tecnología, consolidando nuestra posición como referente en la industria.",
    },
  ],
  2023: [
    {
      src: "/image/history/diferenciate.webp",
      alt: "CAMARA DE COMERCIO",
      title: "CAMARA DE COMERCIO",
      description:
        "SoftWow logró ser galardonado con el prestigioso programa 'Diferénciate' de la Cámara de Comercio. Este reconocimiento es un testimonio de nuestro compromiso constante con la innovación y la excelencia, destacando nuestra posición como líder en la industria tecnológica.",
    },
  ],
  2024: [
    {
      src: "/image/history/diferenciate.webp",
      alt: "CAMARA DE COMERCIO",
      title: "CAMARA DE COMERCIO",
      description:
        "SoftWow logró ser galardonado con el prestigioso programa 'Diferénciate' de la Cámara de Comercio. Este reconocimiento es un testimonio de nuestro compromiso constante con la innovación y la excelencia, destacando nuestra posición como líder en la industria tecnológica.",
    },
  ],
};

const ConstellationStepper: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  // Estado para el año seleccionado en el modal
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const steps: string[] = ["2020", "2021", "2022", "2023", "2024", "2025"];
  // backgrounds[0]: imagen inactiva, backgrounds[1]: imagen activa
  const backgrounds: string[] = ["/image/star.png", "/image/star-active.png"];

  // useDisclosure para controlar el modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Referencia al contenedor con scroll horizontal
  const containerRef = useRef<HTMLDivElement | null>(null);
  // Array de refs para cada nodo
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const currentNode = itemRefs.current[currentStep];
    if (currentNode && containerRef.current) {
      currentNode.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentStep]);

  // Abre el modal para el año seleccionado y activa el modal
  const openModal = (year: string) => {
    setSelectedYear(year);
    onOpen();
  };

  // Al hacer clic en "Siguiente", se actualiza el paso y se abre el modal del nuevo paso
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      openModal(steps[newStep]);
    }
  };

  // Al hacer clic en "Anterior", se actualiza el paso y se abre el modal del nuevo paso
  const prevStep = () => {
    if (currentStep > 0) {
      const newStep = currentStep - 1;
      setCurrentStep(newStep);
      openModal(steps[newStep]);
    }
  };

  return (
    <>
      {/* Contenedor con scroll horizontal */}
      <div ref={containerRef} className="overflow-x-auto">
        <div className="min-w-[1200px] min-h-[274px] h-full flex flex-col items-center justify-center text-white space-y-20 p-6">
          {/* Stepper con conexiones diagonales */}
          <div className="relative grid grid-cols-6 gap-40">
            {steps.map((step, index) => (
              <div
                key={step}
                // Asigna la ref al nodo actual
                ref={(el) => (itemRefs.current[index] = el)}
                className="relative flex flex-col items-center cursor-pointer"
                onClick={() => openModal(step)}
              >
                {/* Línea diagonal entre pasos */}
                {index > 0 && (
                  <div
                    className={`absolute w-[240px] h-[2px] transition-all z-0 ${
                      index % 2 === 0
                        ? "-rotate-[23deg] top-8 right-6"
                        : "rotate-[24deg] bottom-8 right-6"
                    } ${
                      index <= currentStep
                        ? "bg-white shadow-[0_0_10px_rgba(96,165,250,0.5)]"
                        : "bg-white/20"
                    }`}
                  ></div>
                )}

                {/* Step con imagen de fondo alternada */}
                <div className="relative flex items-center justify-center">
                  {/* Imagen de fondo detrás (alternada arriba y abajo) */}
                  <div
                    className={`absolute w-20 h-20 bg-center bg-no-repeat bg-cover rounded-full z-10 scale-125 ${
                      index % 2 === 0
                        ? "-translate-y-12 translate-x-1"
                        : "translate-y-12"
                    }`}
                    style={{
                      backgroundImage: `url(${
                        index <= currentStep ? backgrounds[1] : backgrounds[0]
                      })`,
                    }}
                  ></div>

                  {/* Círculo con texto encima */}
                  <div
                    className={`relative w-16 h-16 flex items-center justify-center text-lg font-bold z-10 shadow-lg ${
                      index % 2 === 0 ? "-translate-y-24" : "translate-y-24"
                    }`}
                  >
                    {step}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Botones de navegación */}
      <div className="flex space-x-6 mx-auto">
        <div className="relative inline-flex items-center justify-center gap-4 group w-fit mx-auto lg:mx-0">
          <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-300 to-indigo-500 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
          <button
            className="group relative inline-flex items-center justify-center text-base rounded-xl bg-transparent px-8 py-3 font-semibold text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
            onClick={prevStep}
            disabled={currentStep === 0}
          >
            <TbArrowBigLeft fontSize={"24px"} />
          </button>
        </div>
        <div className="relative inline-flex items-center justify-center gap-4 group w-fit mx-auto lg:mx-0">
          <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-300 to-indigo-500 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
          <button
            className="group relative inline-flex items-center justify-center text-base rounded-xl bg-transparent px-8 py-3 font-semibold text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
          >
            <TbArrowBigRight fontSize={"24px"} />
          </button>
        </div>
      </div>
      {/* Modal: se muestra si hay un año seleccionado */}
      {selectedYear && picturesObject[selectedYear] && (
        <HistoryModal
          year={selectedYear}
          pictures={picturesObject[selectedYear]}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        />
      )}
    </>
  );
};

export default ConstellationStepper;
