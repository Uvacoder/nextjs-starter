/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  eslint: {
    // Husky pre-commit checks
    ignoreDuringBuilds: true,
  },
};
