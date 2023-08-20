declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SITE_URL: string;
      NODE_ENV: "production" | "dev" | "test";
    }
  }
}

export default global;
