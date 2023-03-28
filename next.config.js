/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  swcMinify: true,
  env: {
    GIT_REPO_ACCESS_TOKEN: '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',
    PARTNER_TOKENS_URL: 'https://api.github.com/repos/Crogecoin/scale-management/contents/scaleswap_partner_tokens.json',
    SENDGRID_API_KEY: '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',
    CONTACT_EMAIL: 'scaleswapcroge@gmail.com'
  },
}

module.exports = nextConfig
