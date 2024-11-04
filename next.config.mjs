/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // SVG handling configuration remains the same
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ["@svgr/webpack"],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },

  images: {
    domains: ['buffer.com', 'b3700355.smushcdn.com'], // Add both domains here
  },
};

export default nextConfig;
