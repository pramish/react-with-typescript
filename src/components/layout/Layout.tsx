import { Fragment, ReactNode } from "react";
import { Helmet } from "react-helmet";

// import { Navbar } from "../navbar";
import { Footer } from "../footer";

type LayoutProps = {
  title: string;
  description: string;
  content: string;
  children: ReactNode;
};

export const Layout = ({
  title,
  children,
  content,
  description,
}: LayoutProps) => {
  return (
    <Fragment>
      <Helmet>
        {/* ToDo: Add according to your project */}
        <meta charSet="utf-8" />
        <title>Get Help With Resume | {title}</title>
        <meta name={description} content={content} />
      </Helmet>
      {/* Have to look at this one. This is not working at the moment */}
      {/* <Navbar /> */}
      {children}
      <Footer />
    </Fragment>
  );
};
