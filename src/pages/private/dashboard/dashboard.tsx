import { Footer } from "../../../components/footer";
import { SEO } from "../../../seo";

import "./dashboard.css";

const title = " Dashboard";
const content = "Dashboard";
const description = "This is a dashboard";

export const Dashboard = () => {
  return (
    <>
      <SEO title={title} content={content} description={description} />
      <h1>This is a dashboard page component</h1>
      <Footer />
    </>
  );
};
