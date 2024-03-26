import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  params: any;
}

const Layout: FC<LayoutProps> = ({ children, params }) => {
  return <main className="flex overflow-hidden h-screen">{children}</main>;
};

export default Layout;
