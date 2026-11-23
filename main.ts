import { mkdirSync, writeFileSync } from "node:fs";

// One-line safety warning label that should come printed on every human.
// Round 1 draft: "WARNING: This human will hold the door open for you, then
// judge you for walking too slowly."
// Round 2 polish: added "silently" — the judgement is petty and unspoken,
// which is the recognisable human behaviour the laugh turns on. One idea,
// one read, turn in the last few words. 100 characters, inside the 160 cap.
const LINE =
  "WARNING: This human will hold the door open for you, then silently judge you for walking too slowly.";

// The gate requires 1–160 characters, a single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${LINE.length}`);
}
if (LINE !== LINE.trim() || LINE.includes("\n")) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
