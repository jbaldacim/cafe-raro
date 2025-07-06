import Link from "next/link";
import { CoffeeIcon } from "@phosphor-icons/react/ssr";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="text-cream">
        <Link href="#steps">Como Funciona</Link>
      </li>
      <li className="text-cream">
        <Link href="#differentials">Diferenciais</Link>
      </li>
      <li className="text-cream">
        <Link href="#pricings">Planos</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-coffee-bean top-0 px-4">
      {/* Itens da Esquerda */}
      <div className="navbar-start">
        <Link
          href="/"
          className="md:text-5xl text-2xl text-base-100 font-great-vibes flex py-4 justify-center items-center"
        >
          Café Raro
          <CoffeeIcon className="mx-2" />
        </Link>
      </div>

      {/* Item Central (Logo) */}
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost hover:bg-espresso lg:hidden text-cream border-0 ring-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow shadow-espresso bg-coffee-bean rounded-xl w-52"
          >
            {navLinks}
          </ul>
        </div>
        <ul className="menu menu-horizontal px-1 hidden lg:flex">{navLinks}</ul>
      </div>

      {/* Item da Direita
      <div className="navbar-end">
        <a href="#planos" className="btn btn-primary">
          Assine Agora
        </a>
      </div> */}
    </div>
  );
};

export default Navbar;
