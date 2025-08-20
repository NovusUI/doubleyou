import { Helmet } from "react-helmet";
import React from "react";

type SEOProps = {
  title: string;
  description: string;
  url?: string;
  image?: string;
  keywords?: string[];
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  url = "/",
  image = "/hero.png",
  keywords = [],
}) => {
  const keywordsContent = keywords.join(", ");
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywordsContent} />
      )}
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#0B9F6E" />

      {/* OpenGraph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
