type TNavItem = {
  name: string;
  href: string;
};

type TNavigationGroup = {
  name: string;
  list: TNavItem[];
};

type TNavigation = TNavigationGroup[];
