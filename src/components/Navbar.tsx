import { MagnifyingGlassIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Vscode from "../assets/vscode.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants/fade";

export default function Navbar() {
  return (
    <motion.nav
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="text-md relative flex items-center justify-between px-6 py-6 xl:px-40 xl:py-8"
    >
      <a
        href="/"
        className="flex cursor-pointer items-center justify-center gap-2"
      >
        <img src={Vscode.src} alt="vscode logo" className="w-5" />
        Visual Studio Code
      </a>

      <div className="hidden items-center justify-center gap-3 text-text-2 xl:flex">
        <a className="cursor-pointer hover:text-text-1">Docs</a>
        <a className="cursor-pointer hover:text-text-1">Blog</a>
        <a className="cursor-pointer hover:text-text-1">API</a>
        <a className="cursor-pointer hover:text-text-1">Extension</a>
        <a className="cursor-pointer hover:text-text-1">
          <MagnifyingGlassIcon className="h-5 w-5" />
        </a>
      </div>

      <button
        id="menu-button"
        data-open
        className="flex items-center justify-center xl:hidden"
      >
        <HamburgerMenuIcon className="h-5 w-5" />
      </button>

      <div
        id="menu-content"
        className="absolute left-0 top-full flex hidden w-screen flex-col gap-2 overflow-hidden border-b border-accent-1 px-6 pb-5 text-text-2 xl:hidden"
        data-open="false"
      >
        <a className="cursor-pointer hover:text-text-1">Docs</a>
        <a className="cursor-pointer hover:text-text-1">Blog</a>
        <a className="cursor-pointer hover:text-text-1">API</a>
        <a className="cursor-pointer hover:text-text-1">Extension</a>
      </div>
    </motion.nav>
  );
}
