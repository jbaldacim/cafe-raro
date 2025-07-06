import { greatVibes } from "@/lib/fonts";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero bg-cream py-6 text-center lg:text-start bg-[url('/hero2.jpg')] bg-cover bg-center lg:bg-none">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse max-w-6xl container mx-auto">
        {/* --- Coluna da Imagem --- */}
        <div className="lg:w-1/2 pt-6 hidden lg:block">
          <Image
            src="/hero2.jpg"
            alt="Copo de café especial com grãos ao redor em uma mesa rústica"
            width={900}
            height={600}
            className="w-full max-w-sm lg:max-w-lg rounded-lg shadow-2xl object-cover shadow-espresso"
            priority
          />
        </div>

        {/* --- Coluna de Texto --- */}
        <div className="lg:w-1/2 w-full bg-cream/60 lg:bg-transparent p-4 rounded-lg backdrop-blur-xs relative z-0">
          <h1
            className={`text-6xl lg:text-6xl font-bold text-coffee-bean leading-tight ${greatVibes.className}`}
          >
            Descubra o Brasil em cada xícara
          </h1>
          <p className="pb-6 text-lg text-espresso">
            Receba mensalmente em sua casa cafés especiais de pequenos
            produtores, com torra fresca e histórias únicas. A experiência
            definitiva para quem ama café de verdade.
          </p>
          <a
            href="#pricings"
            className="btn bg-foliage border-foliage btn-lg rounded-xl text-cream"
          >
            Conheça os planos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
