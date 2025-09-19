import {
  HelpCircleIcon,
  LineChartIcon,
  Link2Icon,
  LockIcon,
  NewspaperIcon,
  QrCodeIcon,
} from "lucide-react";

export const navLinks = [
  {
    title: "Features",
    href: "/features",
    menu: [
      {
        title: "Feature 2",
        tagline: "This is Feature 2 .",
        href: "/features/feature-2",
        icon: Link2Icon,
      },
      {
        title: "Feature 3",
        tagline: "This is Feature 3 .",
        href: "/features/feature-3",
        icon: LockIcon,
      },
      {
        title: "Feature 4",
        tagline: "This is Feature 4 .",
        href: "/features/feature-4",
        icon: LineChartIcon,
      },
      {
        title: "Feature 5",
        tagline: "This is Feature 5 .",
        href: "/features/feature-5",
        icon: QrCodeIcon,
      },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Resources",
    href: "/resources",
    menu: [
      {
        title: "Blog",
        tagline: "Read articles on the latest trends in tech.",
        href: "/resources/blog",
        icon: NewspaperIcon,
      },
      {
        title: "Help",
        tagline: "Get answers to your questions.",
        href: "/resources/help",
        icon: HelpCircleIcon,
      },
    ],
  },
  {
    title: "Changelog",
    href: "/changelog",
  },
];
