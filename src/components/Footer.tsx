import {
  CoffeeIcon,
  InstagramLogoIcon,
  TiktokLogoIcon,
  XLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

const redesSociais = [
  {
    name: "Instagram",
    icon: <InstagramLogoIcon className="mr-2 group-hover:animate-pulse" />,
  },
  {
    name: "X",
    icon: <XLogoIcon className="mr-2 group-hover:animate-pulse" />,
  },
  {
    name: "Youtube",
    icon: <YoutubeLogoIcon className="mr-2 group-hover:animate-pulse" />,
  },
  {
    name: "TikTok",
    icon: <TiktokLogoIcon className="mr-2 group-hover:animate-pulse" />,
  },
];

const linksUteis = ["Como Funciona", "Planos", "Nossos Café", "FAQ"];

const suporte = [
  "Contato",
  "Politica de Privacidade",
  "Termos de Uso",
  "Cancelamento",
];

const Footer = () => {
  return (
    <footer className="bg-terracotta">
      <div className="container mx-auto max-w-6xl flex flex-col px-6 text-espresso">
        <div className="flex flex-col sm:flex-row gap-8 justify-between my-4">
          <div className="flex justify-center items-center font-great-vibes text-4xl">
            <span className="text-nowrap">Café Raro</span>
            <CoffeeIcon className="mx-2" />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-xl">Links Úteis</h4>
            <div className="flex flex-col">
              {linksUteis.map((item, index) => (
                <a className="hover:text-cream cursor-pointer" key={index}>
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-xl">Suporte</h4>
            <div className="flex flex-col">
              {suporte.map((item, index) => (
                <a className="hover:text-cream cursor-pointer" key={index}>
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-xl">Redes Sociais</h4>
            <div className="flex flex-col">
              {redesSociais.map((redeSocial, index) => (
                <a
                  className="flex flex-row items-center hover:text-cream cursor-pointer group"
                  key={index}
                >
                  {redeSocial.icon}
                  {redeSocial.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-espresso py-4 text-center">
          <h2>© 2025 Café Raro. Todos os direitos reservados.</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
