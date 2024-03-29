// Make environment variables strongly typed
declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT?: number;
      SMTP: string;
      SMTP_USER: string;
      SMTP_PASSWORD: string;
      RECAPTCHA_SITE_KEY: string;
      RECAPTCHA_SECRET_KEY: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
