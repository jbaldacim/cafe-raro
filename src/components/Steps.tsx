import { greatVibes } from "@/lib/fonts";
import {
  PackageIcon,
  CoffeeIcon,
  CheckFatIcon,
} from "@phosphor-icons/react/ssr";

const Steps = () => {
  return (
    <section className="bg-terracotta py-16 px-6 text-cream" id="steps">
      <div className="container mx-auto max-w-5xl">
        <h1
          className={`text-6xl font-bold text-center mb-12 ${greatVibes.className}`}
        >
          Da plantação a sua xícara em 3 simples passos
        </h1>

        <div className="mx-auto">
          <ul className="timeline timeline-vertical max-sm:timeline-compact timeline-snap-icon">
            {/* Step 1 */}
            <li>
              <div className="timeline-start timeline-box bg-cream shadow-md border-0 p-6 shadow-espresso w-full">
                <div className="flex items-center gap-4 mb-4">
                  <h2
                    className={`text-3xl font-bold text-coffee-bean ${greatVibes.className}`}
                  >
                    Escolha seu plano
                  </h2>
                </div>
                <p className="text-espresso text-lg">
                  Selecione o plano ideal para você: seja uma pessoa, uma
                  família ou um grupo de amigos.
                </p>
              </div>
              <div className="timeline-middle">
                <div className="w-10 h-10 bg-cream rounded-full border-4 border-foliage shadow-md flex items-center justify-center">
                  <CheckFatIcon
                    size={20}
                    weight="duotone"
                    className="text-foliage"
                  />
                </div>
              </div>
              <hr className="bg-foliage/60" />
            </li>

            {/* Step 2 */}
            <li>
              <hr className="bg-foliage/60" />
              <div className="timeline-middle">
                <div className="w-10 h-10 bg-cream rounded-full border-4 border-foliage shadow-md flex items-center justify-center">
                  <PackageIcon
                    size={20}
                    weight="duotone"
                    className="text-foliage"
                  />
                </div>
              </div>
              <div className="timeline-end timeline-box bg-cream shadow-md border-0 p-6 shadow-espresso w-full">
                <div className="flex items-center gap-4 mb-4">
                  <h2
                    className={`text-3xl font-bold text-coffee-bean ${greatVibes.className}`}
                  >
                    Receba em casa
                  </h2>
                </div>
                <p className="text-espresso text-lg">
                  Com a torrefação realizada em pequenos lotes e até 72 horas
                  antes do envio, o frescor máximo e desenvolvimento de sabor
                  são garantidos.
                </p>
              </div>
              <hr className="bg-foliage/60" />
            </li>

            {/* Step 3 */}
            <li>
              <hr className="bg-foliage/60" />
              <div className="timeline-start timeline-box bg-cream shadow-md border-0 p-6 shadow-espresso w-full">
                <div className="flex items-center gap-4 mb-4">
                  <h2
                    className={`text-3xl font-bold text-coffee-bean ${greatVibes.className}`}
                  >
                    Desfrute a experiência
                  </h2>
                </div>
                <p className="text-espresso text-lg">
                  Encontre sabores únicos no conforto do seu lar.
                </p>
              </div>
              <div className="timeline-middle">
                <div className="w-10 h-10 bg-cream rounded-full border-4 border-foliage shadow-md flex items-center justify-center">
                  <CoffeeIcon
                    size={20}
                    weight="duotone"
                    className="text-foliage"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Steps;
