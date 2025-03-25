import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const isLadle = process.argv[1]?.includes("ladle");
export default defineConfig({
  plugins: [tailwindcss(),!isLadle && reactRouter(), tsconfigPaths()],
});
