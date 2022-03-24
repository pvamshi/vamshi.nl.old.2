/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  compress:true,
  distDir:'dist'
};

// next.config.js
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require("remark-prism")],
  },
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx", 'tsx', "tx"],
});
