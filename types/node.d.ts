declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SITE_URL: string;
      NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: string;
      NODE_ENV: "production" | "dev" | "test";
    }
  }
}

export default global;
