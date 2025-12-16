/* eslint-disable @typescript-eslint/no-require-imports */
import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const withPWA = require("next-pwa")({
  dest: "public",
});

const config: NextConfig = {};

export default withPWA(withNextIntl(config));
