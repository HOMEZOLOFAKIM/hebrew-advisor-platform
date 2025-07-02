
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enable server actions
    serverActions: {
      allowedOrigins: ['localhost:3000', '*.supabase.co'],
    },
  },
  // RTL support
  i18n: {
    locales: ['he'],
    defaultLocale: 'he',
  },
  // Optimize for Hebrew fonts
  optimizeFonts: true,
}

module.exports = nextConfig
