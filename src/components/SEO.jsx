import { Helmet } from "react-helmet-async";

/**
 * Reusable SEO component. For this single-page site it just reinforces
 * the tags already set in index.html, but it's built so you can drop
 * it into future routes (e.g. /project/:slug) with different props.
 */
export default function SEO({
  title = "Aswanth Chandran — Software Engineer | Founder & Developer of Everloom",
  description = "Software engineer and Founder & Developer of Everloom, building web applications with React, Node.js, and MongoDB. Available for full-time software engineering roles in Bengaluru.",
  path = "/",
}) {
  const url = `https://www.aswanthchandran.dev${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
}
