import { copyFile, writeFile } from "node:fs/promises";

// Sites expects a module Worker whose default export exposes fetch().
await writeFile(
  "dist/server/index.js",
  `import handler from "./index.mjs";\nexport default { fetch(request, env, ctx) { return handler(request, env, ctx); } };\n`,
  "utf8"
);

// Vinext currently references the SSR bundle with a .js extension while
// emitting it as .mjs. Render runs directly from dist, so provide both names.
await copyFile("dist/server/ssr/index.mjs", "dist/server/ssr/index.js");
