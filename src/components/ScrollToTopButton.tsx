"use client";
import { useState, useEffect } from "react";
import { ArrowUpIcon } from "@phosphor-icons/react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar botão quando o usuário rolar para baixo
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Função para rolar para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 btn btn-circle btn-accent shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Voltar ao topo"
        >
          <ArrowUpIcon size={20} weight="bold" className="text-cream" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
