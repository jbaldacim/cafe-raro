import { greatVibes } from "@/lib/fonts";
import { CoffeeBeanIcon } from "@phosphor-icons/react/dist/ssr";

const plans = [
  {
    title: "Explorador",
    price: "R$ 59,90",
    benefits: [
      "1 pacote de 250g de café especial",
      "Guia de desgustação digital",
      "Acesso à comunidade de membros",
    ],
  },
  {
    title: "Entusiasta",
    price: "R$ 99,90",
    benefits: [
      "2 pacotes de 250g de café especial, totalizando 500g",
      "Guia de desgustação impresso, com acabamento especial",
      "Acesso à comunidade de membros",
      "Acesso à loja online",
    ],
  },
  {
    title: "Colecionador",
    price: "R$ 129,90",
    benefits: [
      "2 pacotes de 250g de cafés diferentes",
      "Guia de desgustação impresso e comparativo",
      "Acesso à comunidade de membros",
      "Acesso à loja online com 15% de desconto permanente",
      "Brinde mensal",
      "Degustação virtual mensal",
    ],
  },
];

const Pricings = () => {
  return (
    <section className="py-16 px-6 bg-foliage/90" id="pricings">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className={`text-6xl font-bold ${greatVibes.className}`}>
            Planos
          </h2>
          <p className="text-2xl font-semibold">Escolha o ideal para você</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 container mx-auto justify-center items-stretch">
          {plans.map((plan, index) => (
            <div
              className={`card bg-cream border-terracotta border shadow-espresso shadow-md hover:shadow-lg hover:scale-105 transition justify-center items-center text-start lg:w-1/3 ${
                plan.title === "Entusiasta" &&
                "order-first lg:order-none inset-shadow-sm inset-shadow-coffee-bean/60"
              }`}
              key={index}
            >
              {plan.title === "Entusiasta" && (
                <span className="badge bg-terracotta absolute -top-3 badge-lg border-0 rounded-xl h-8">
                  Mais Popular
                </span>
              )}
              <div className="card-body min-w-full">
                <div className="card-title flex flex-col mb-6">
                  <h2 className="text-terracotta text-2xl">{plan.title}</h2>
                  <p className="text-4xl text-terracotta font-semibold">
                    {plan.price}
                    <span className="text-sm font-normal"> /mês</span>
                  </p>
                </div>
                <ul className="space-y-2 text-md">
                  {plan.benefits.map((benefit, index) => (
                    <li key={index} className="flex flex-row items-baseline">
                      <CoffeeBeanIcon
                        weight="fill"
                        className="text-coffee-bean mr-2 shrink-0"
                        size={10}
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="card-actions mt-6 grow items-end">
                  <button className="btn bg-terracotta shadow-md hover:shadow-lg shadow-espresso border-0 rounded-xl min-w-full text-cream">
                    Escolher plano
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricings;
