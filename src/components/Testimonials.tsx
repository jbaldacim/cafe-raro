"use client";
import { greatVibes } from "@/lib/fonts";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Laura",
    review: "Todo mês, uma nova aventura de café no aconchego do meu lar!",
    memberSince: "2021",
    picture: "/testimonials/laura.jpg",
  },
  {
    name: "Pedro",
    review:
      "A entrega é rápida e o café é incrível! Já descobri novos favoritos.",
    memberSince: "2022",
    picture: "/testimonials/pedro.jpg",
  },
  {
    name: "Ana",
    review: "O Café Raro é uma experiência ímpar!",
    memberSince: "2020",
    picture: "/testimonials/ana.jpg",
  },
  {
    name: "Felipe",
    review: "Descobri sabores e aromas fantásticos no Café Raro. Eu amo!",
    memberSince: "2021",
    picture: "/testimonials/felipe.jpg",
  },
  {
    name: "Carlos",
    review:
      "A qualidade é excepcional e o guia de degustação me ensinou muito sobre café. Recomendo demais!",
    memberSince: "2023",
    picture: "/testimonials/carlos.jpg",
  },
  {
    name: "Vanessa",
    review:
      "Adoro conhecer a história dos produtores. É mais que café, é uma conexão com o Brasil rural.",
    memberSince: "2021",
    picture: "/testimonials/vanessa.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const getTotalSlides = () => {
    return isLargeScreen
      ? Math.ceil(testimonials.length / 2)
      : testimonials.length;
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % getTotalSlides());
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + getTotalSlides()) % getTotalSlides());
  };

  return (
    <section className="bg-espresso py-16">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 text-cream container mx-auto">
          <h2 className={`text-6xl font-bold ${greatVibes.className}`}>
            Depoimentos
          </h2>
          <p className="text-2xl font-semibold">Pois não basta ouvir de nós</p>
        </div>
        <div className="mx-auto px-4">
          <div className="relative">
            {/* Carousel */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full lg:w-1/2 flex-shrink-0 px-3"
                  >
                    <div className="flex bg-cream backdrop-blur-sm rounded-2xl p-6 shadow-sm h-48 md:h-32">
                      {/* Image */}
                      <div className="w-16 h-16 relative mr-4 flex-shrink-0">
                        <Image
                          src={testimonial.picture}
                          alt=""
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="font-medium text-espresso mb-1">
                          {testimonial.name} •{" "}
                          <span className="font-light">
                            membro desde {testimonial.memberSince}
                          </span>
                        </h4>
                        <p className="text-sm text-espresso italic">
                          "{testimonial.review}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Navigation */}
            <button
              onClick={prevSlide}
              className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full shadow-md flex items-center justify-center transition-all"
            >
              <CaretLeftIcon className="w-5 h-5 text-coffee-bean" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full shadow-md flex items-center justify-center transition-all"
            >
              <CaretRightIcon className="w-5 h-5 text-coffee-bean" />
            </button>
          </div>
          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: getTotalSlides() }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-cream/80 ring-2 ring-cream"
                    : "bg-cream/40 hover:scale-125"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
