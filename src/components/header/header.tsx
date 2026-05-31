import Link from "next/link";
import { Button } from "../ui/button";
import { ActiveLink } from "../active-link";
import Image from "next/image";

export const Header = () => {
  return (
    <header
      className="fixed top-0 z-50 w-full border-b border-white/10 bg-gray-950 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-white">
            <Image 
            src='./logo.svg'
            alt="logo site"
            width={116}
            height={32}
            loading="eager"
            />
          </Link>

          <nav className="flex items-center gap-6 text-white">
            <ActiveLink href="/">Inicio</ActiveLink>

            <ActiveLink href="/blog">Blog</ActiveLink>

            <Button
              variant="default"
              className="bg-white text-black"
              asChild
            >
              <Link href="/comecar">Começar</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};