import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yetisnow',
  appName: 'yeti',
  webDir: 'www',
  server: {
    "hostname": "localhost",
    "androidScheme": "http",
    "allowNavigation": [
      "http://localhost:8101/*",
      "http://localhost:8102/*",
      "http://localhost:4201/*",
      "http://localhost:4202/*",
      "http://10.0.2.2:8101/*",
      "http://10.0.2.2:8202/*",
    ]
  }
};

export default config;
