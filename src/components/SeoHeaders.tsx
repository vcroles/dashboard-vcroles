import Head from "next/head";

export const SeoHeaders = ({
    title,
    description,
    author,
    twitterAuthor,
    twitterSite,
    url,
}: {
    title: string;
    description: string;
    url: string;
    author?: string;
    twitterAuthor?: string;
    twitterSite?: string;
}) => {
    const imageUrl = `https://dashboard-vcroles.vercel.app/api/og?title=${title}`;
    return (
        <Head>
            <title>{title}</title>
            <link rel="canonical" href={url} />
            <meta name="description" content={description} />
            {author && <meta name="author" content={author} />}
            <meta name="robots" content="index,follow" />
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:url" content={url} />
            <meta property="og:description" content={description} />
            <meta name="twitter:card" content="summary_large_image" />
            {twitterAuthor && (
                <meta name="twitter:author" content={twitterAuthor} />
            )}
            {twitterSite && <meta name="twitter:site" content={twitterSite} />}
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:image" content={imageUrl} />
            <meta name="twitter:description" content={description} />
        </Head>
    );
};
