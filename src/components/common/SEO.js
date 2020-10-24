import React from 'react';
import Helmet from 'react-helmet';

const SEO_DATA = {
  description: 'Victor Rose Espresso Bar in Pointe Claire Village. A community spot to meet your friends, or grab your morning coffee on the way to work!',
  title: 'Victor Rose',
  url: 'www.victorrose.com',
  author: 'Victor Rose',
  keywords: ['coffee', 'cafe', 'pointe-claire', 'victor rose', 'local', 'coffee shop', 'cafe','espresso bar', 'Direct Fair Trade', ' Third Wave', 'local artists','espresso'],
  img: '',
  facebookId: 'VictorRoseEspressoBar',
};

const SEO = (props) => {
  return (
    <Helmet>
      <meta property="fb:app_id" content={SEO_DATA.facebookId} />
      <meta property="og:title" content={SEO_DATA.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url} />
      <meta property="og:image" content={SEO_DATA.img} />
      <meta property="og:description" content={SEO_DATA.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={SEO_DATA.twitterId} />
      <meta name="twitter:site" content={SEO_DATA.url} />
      <meta name="twitter:title" content={SEO_DATA.title} />
      <meta name="twitter:description" content={SEO_DATA.description} />
      <meta name="twitter:domain" content={SEO_DATA.url} />
      <meta name="twitter:image:src" content={SEO_DATA.img} />

      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
      <meta name="author" content={SEO_DATA.author} />
      <title>{SEO_DATA.title}</title>
      <html lang="en" />

      <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
    </Helmet>
  );
};

export default SEO;
