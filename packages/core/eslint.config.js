import baseConfig from "../../eslint.config.js";

export default [
  ...baseConfig,
  {
    files: ["source/**/*.{ts,js}"],
  },
];
