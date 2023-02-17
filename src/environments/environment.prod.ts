import { endpoints } from "./endpoints";

export const environment = {
  production: true,
  host: 'https://picsum.photos/',
  ...endpoints,
};
