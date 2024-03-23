"use client";

import Image from "next/image";
import Link from "next/link";
import React, { ComponentPropsWithRef, ElementRef, useState } from "react";
import Logo from "../../../public/cypresslogo.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const routes = [
  { title: "Features", href: "#features" },
  { title: "Resources", href: "#resources" },
  { title: "Pricing", href: "#pricing" },
  { title: "Testimonial", href: "#testimonial" },
];

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "#",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "#",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "#",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "#",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "#",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "#",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Header = () => {
  const [path, SetPath] = useState("#products");
  return (
    <header className="p-4 flex justify-center items-center">
      <Link href={"/"} className="w-full flex justify-start items-center gap-2">
        <Image src={Logo} alt="cypress logo" width={25} height={25} />
        <span className="font-semibold dark:text-white"> cypress.</span>
      </Link>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => SetPath("#resources")}
              className={cn({
                "dark:text-white ": path === "#resources",
                "dark:text-white/40 ": path !== "#resources",
                "font-normal": true,
                "text-xl": true,
              })}
            >
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <span className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none shadow-md">
                    Welcome
                  </span>
                </li>

                <ListItem href="#" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="#" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="#" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => SetPath("#pricing")}
              className={cn({
                "dark:text-white": path === "#pricing",
                "dark:text-white/40": path !== "#pricing",
                "font-normal": true,
                "text-xl": true,
              })}
            >
              Pricing
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:grid-flow-2 ">
                <ListItem title="Pro Plan" href={"#"}>
                  Unlock full power with collaboration.
                </ListItem>
                <ListItem title={"free Plan"} href={"#"}>
                  Great for teams just starting out.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;

const ListItem = React.forwardRef<ElementRef<"a">, ComponentPropsWithRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "group block select-none space-y-1 font-medium leading-none"
            )}
            {...props}
          >
            <div className="text-white text-sm font-medium leading-none">
              {title}
            </div>
            <p className="group-hover:text-white/70 line-clamp-2 text-sm leading-snug text-white/40">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
