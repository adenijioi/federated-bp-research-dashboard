import { writeFile } from "node:fs/promises";

// Sites expects a module Worker whose default export exposes fetch().
await writeFile(
  "dist/server/index.js",
  `import handler from "./index.mjs";\nexport default { fetch(request, env, ctx) { return handler(request, env, ctx); } };\n`,
  "utf8"
);
