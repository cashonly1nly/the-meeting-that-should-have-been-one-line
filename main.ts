// The Meeting That Should Have Been One Line
// Writes the single sentence that could have replaced an entire pointless
// meeting to /output/entry.txt (or the directory given as argv[2] / OUTPUT_DIR).
// Deterministic: no input, no randomness, no network, standard library only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "We've agreed to do nothing, assigned it to no one, and scheduled another meeting to confirm it.";

// The gate allows 1–200 characters; refuse to emit anything outside it
// rather than submitting an entry the scorer would reject.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-blank characters, got ${ENTRY.length}`);
}

const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
