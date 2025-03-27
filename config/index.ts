interface IConfig {
  metadata: {
    name: string;
    description: string;
    url: string;
  };
}
const config: IConfig = {
  metadata: {
    name: process.env.NEXT_PUBLIC_APP_NAME ?? '',
    description: process.env.NEXT_PUBLIC_APP_DESCRIPTION ?? '',
    url: process.env.NEXT_PUBLIC_APP_URL ?? '',
  },
};

export default config;
