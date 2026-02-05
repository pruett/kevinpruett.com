import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  cacheComponents: true,
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
};

const withMDX = createMDX({
  options: {
    rehypePlugins: ["rehype-slug"],
  },
});

export default withMDX(nextConfig);
