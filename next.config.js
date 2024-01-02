/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mobirise.com",
      },
      // 배지 이미지 주소
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
      // 목업 이미지 주소
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      // 클라우드 플레어 이미지 cdn 주소
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/image_api/upload_url",
        destination: `${process.env.NEXT_PUBLIC_IMAGE_UPLOAD_SERVER}/accounts/${process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_ID}/images/v2/direct_upload`,
      },
    ]
  },
}

/*
  목업 프로필 이미지를 위해 image remote 설정
  이후 이미지 처리 로직에 따라 수정 예정
*/

module.exports = nextConfig
