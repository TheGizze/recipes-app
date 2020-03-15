type Config = {
  backendURL: string;
  environment: string;
  CSP: string;
};

type ApplicationConfig = {
  [env: string]: Config;
};

const config: ApplicationConfig = {
  development: {
    CSP: '',
    backendURL: 'http://localhost:5000/api/v1',
    environment: 'development',
  },
};

let env = 'development';
if (process.env.NODE_ENV && process.env.NODE_ENV !== 'undefined') {
  env = process.env.NODE_ENV;
}

const APP_CONFIG = config[env];

export { APP_CONFIG };
