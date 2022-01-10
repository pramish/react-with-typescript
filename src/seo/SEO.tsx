import { Helmet } from "react-helmet";

export type SEODataType = {
  title: string;
  description: string;
  content: string;
};
export const SEO = ({ description, title, content }: SEODataType) => {
  return (
    <Helmet>
      {/* ToDo: Add according to your project */}
      <meta charSet="utf-8" />
      <title>Get Help With Resume | {title}</title>
      <meta name={description} content={content} />
    </Helmet>
  );
};
