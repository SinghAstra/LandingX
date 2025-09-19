"use client";

import { buttonVariants } from "@/components/ui/button";

import { siteConfig } from "@/config/site";
import { navLinks } from "@/lib/nav-links";
import { cn } from "@/lib/utils";
import { slideInVariantFromTopToBottom } from "@/lib/variants";
import { motion } from "framer-motion";
import { ChevronDown, LucideIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
import GridBackground from "../component-x/grid-background";
import {
  HoverPopOver,
  HoverPopOverContent,
  HoverPopOverTrigger,
} from "../component-x/hover-popover";
import MaxWidthWrapper from "../global/max-width-wrapper";
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
                return navLink.menu ? (
                  <HoverPopOver key={navLink.title}>
                    <HoverPopOverTrigger className="flex text-sm items-center gap-1 hover:bg-muted/40 transition-all duration-300 py-1 px-3 font-medium rounded group cursor-pointer">
                      {navLink.title}
                      {navLink.menu && (
                        <ChevronDown className="h-4 w-4 group-hover:-rotate-180 transition-all duration-800" />
                      )}
                    </HoverPopOverTrigger>
                    <HoverPopOverContent>
                      <div
                        className={cn(
                          "grid gap-1 p-4 md:w-[400px] lg:w-[500px] bg-muted/20 rounded mt-4",
                          navLink.title === "Features"
                            ? "lg:grid-cols-[.75fr_1fr]"
                            : "lg:grid-cols-2"
                        )}
                      >
                        {navLink.title === "Features" && (
                          <div className="row-span-4 pr-2 relative rounded overflow-hidden">
                            <GridBackground gridDimension="16" />
                            <div className="z-20 relative h-full">
                              <Link
                                href="/"
                                className="flex h-full w-full select-none flex-col justify-end rounded bg-gradient-to-b from-muted/30 to-muted/60 p-4 "
                              >
                                <h6 className="mb-2 mt-4 text-lg font-medium">
                                  All Features
                                </h6>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  Manage links, track performance, and more.
                                </p>
                              </Link>
                            </div>
                          </div>
                        )}
                        {navLink.menu.map((menuItem) => (
                          <ListItem
                            key={menuItem.title}
                            title={menuItem.title}
                            href={menuItem.href}
                            Icon={menuItem.icon}
                          >
                            {menuItem.tagline}
                          </ListItem>
                        ))}
                      </div>
                    </HoverPopOverContent>
                  </HoverPopOver>
                ) : (
                  <Link
                    key={navLink.title}
                    href={navLink.title}
                    className="flex text-sm items-center gap-1 hover:bg-muted/40 cursor-pointer transition-all duration-300 py-1 px-3 font-medium rounded group"
                  >
                    {navLink.title}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-x-4">
              <Link
                href="/auth/sign-in"
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "hover:bg-muted/20 transition-all duration-300",
                })}
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

const ListItem = ({
  href,
  title,
  Icon,
  children,
}: {
  href: string;
  title: string;
  Icon: LucideIcon;
  children: ReactNode;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "space-y-1 rounded p-3 transition-all duration-300 hover:bg-muted/40 "
      )}
    >
      <div className="flex items-center space-x-2 text-foreground/80">
        <Icon className="h-4 w-4" />
        <h6 className="text-sm font-medium !leading-none">{title}</h6>
      </div>
      <p className="line-clamp-1 text-sm text-muted-foreground">{children}</p>
    </Link>
  );
};
ListItem.displayName = "ListItem";

export default NewNavbar;
