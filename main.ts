import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "At grandma's house I sat on the cool kitchen tiles peeling garlic while the rice cooker clicked off, not knowing those slow summer evenings were the last time I'd ever feel that small and that safe.";

// The gate requires exactly one sentence of 1-280 characters.
if (entry.length < 1 || entry.length > 280) {
  throw new Error(`Entry must be 1-280 characters, got ${entry.length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
