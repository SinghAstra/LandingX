"use client";

import { buttonVariants } from "@/components/ui/button";

import { siteConfig } from "@/config/site";
import { navLinks } from "@/lib/nav-links";
import { cn } from "@/lib/utils";
import { slideInVariantFromTopToBottom } from "@/lib/variants";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, LucideIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "../global/max-width-wrapper";
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";
import MobileNavbar from "./mobile-navbar";

const NewNavbar = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 8) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 inset-x-0 py-3 w-full z-[99999]",
        scroll && "bg-background/40 backdrop-blur-md"
      )}
    >
      <motion.div
        variants={slideInVariantFromTopToBottom}
        initial="hidden"
        whileInView="visible"
      >
        <MaxWidthWrapper className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link href="/" className="text-lg font-bold logo">
              {siteConfig.name}
            </Link>

            <div className="hidden lg:flex space-x-5">
              {navLinks.map((navLink) => {
                return (
                  <Link
                    key={navLink.title}
                    href={navLink.title}
                    className="flex text-sm items-center gap-1 hover:bg-muted/40 transition-all duration-300 py-1 px-3 font-medium rounded group"
                  >
                    {navLink.title}
                    {navLink.menu && (
                      <ChevronDown className="h-4 w-4 group-hover:-rotate-180 transition-all duration-800" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-x-4">
              <Link
                href="/auth/sign-in"
                className={buttonVariants({ size: "sm", variant: "ghost" })}
              >
                Sign In
              </Link>
              <Link
                href="/auth/sign-up"
                className={buttonVariants({ size: "sm" })}
              >
                Get Started
                <ZapIcon className="size-3.5 ml-1.5 text-orange-500 fill-orange-500" />
              </Link>
            </div>
          </div>

          <MobileNavbar />
        </MaxWidthWrapper>
      </motion.div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; icon: LucideIcon }
>(({ className, title, href, icon: Icon, children, ...props }, ref) => {
  return (
    <li>
      <Link
        href={href!}
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-100 ease-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="flex items-center space-x-2 text-neutral-300">
          <Icon className="h-4 w-4" />
          <h6 className="text-sm font-medium !leading-none">{title}</h6>
        </div>
        <p
          title={children! as string}
          className="line-clamp-1 text-sm leading-snug text-muted-foreground"
        >
          {children}
        </p>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NewNavbar;
