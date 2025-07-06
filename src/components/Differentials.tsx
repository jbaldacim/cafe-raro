import { greatVibes } from "@/lib/fonts";
import {
  BookOpenIcon,
  MagnifyingGlassIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/dist/ssr";

const differentials = [
  {
    icon: <UsersThreeIcon weight="duotone" size={80} />,
    title: "Pequenos Produtores",
    description:
      "Conectamos você diretamente a cafeicultores apaixonados. A cada mês, você descobre microlotes raros e apoia famílias que dedicam suas vidas ao cultivo de grãos excepcionais, promovendo um comércio justo e sustentável.",
  },
  {
    icon: <MagnifyingGlassIcon weight="duotone" size={80} />,
    title: "Seleção dos Grãos",
    description:
      "Nossa equipe viaja e testa centenas de amostras para selecionar apenas os lotes mais excepcionais. A cada mês, você recebe uma jóia rara que não encontraria em nenhum outro lugar.",
  },
  {
    icon: <BookOpenIcon weight="duotone" size={80} />,
    title: "Jornada de Aprendizado",
    description:
      "Queremos que você aprecie o café em sua totalidade. Todo envio acompanha um guia de degustação com a história do produtor, detalhes do terroir, notas sensoriais e dicas de preparo para extrair o melhor de cada grão.",
  },
];

const Differentials = () => {
  return (
    <section className="py-16 px-6" id="differentials">
      <div className="max-w-6xl container mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-6xl font-bold ${greatVibes.className}`}>
            Nossos Diferenciais
          </h2>
          <p className="text-2xl font-semibold">
            Por que escolher o Café Raro?
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 px-6 justify-center items-center">
          {differentials.map((differential, index) => (
            <div
              className="card bg-cream border-espresso border lg:w-1/3 shadow-espresso shadow-md hover:shadow-lg hover:scale-105 transition justify-center items-center self-stretch"
              key={index}
            >
              <div className="card-body items-center text-center">
                <div className="text-center card-title mb-4 text-terracotta">
                  {differential.icon}
                </div>
                <h2 className="card-title text-terracotta text-2xl">
                  {differential.title}
                </h2>
                <p className="text-lg">{differential.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
