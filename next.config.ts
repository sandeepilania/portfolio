import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repo = "portfolio";

const nextConfig: NextConfig = {
  output: "export",              // builds static site to /out :contentReference[oaicite:1]{index=1}
  images: { unoptimized: true }, // GitHub Pages can’t run Next image optimizer
  trailingSlash: true,

  ...(isGithubActions
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
      }
    : {}),
};

export default nextConfig;