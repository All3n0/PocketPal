import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
}

export default function SEO({ 
  title = 'Pocket Pal - Make Saving Simple, Social & Achievable',
  description = 'Africa\'s most trusted collaborative savings ecosystem. Save money with friends, build financial discipline, and achieve your goals together.',
  image = '/og-image.png',
  url = 'https://pocketpal.vercel.app',
  type = 'website',
  publishedTime,
  author = 'Pocket Pal Team',
  section,
  tags = [],
  noindex = false,
}: SEOProps) {
  
  const siteTitle = title.includes('Pocket Pal') ? title : `${title} | Pocket Pal`;
  
  return (
    <Head>
      {/* Basic */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={tags.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index,follow" />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Pocket Pal" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@pocketpal" />
      <meta name="twitter:creator" content="@pocketpal" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Article specific */}
      {type === 'article' && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          <meta property="article:author" content={author} />
          {section && <meta property="article:section" content={section} />}
          {tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#7c3aed" />
    </Head>
  );
}