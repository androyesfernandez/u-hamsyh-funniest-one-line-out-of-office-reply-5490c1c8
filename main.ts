// Funniest One-Line Out-of-Office Reply
// Writes the winning one-line out-of-office reply to /output/entry.txt.
// Node 22, no dependencies, no network.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I'm on holiday until Monday, and this auto-reply is the only one of us working: it has read your email, judged it, and decided to tell you nothing at all.";

// Gate validation: 1-160 chars, non-blank, exactly one line,
// no carriage returns or control characters.
if (LINE.length < 1 || LINE.length > 160) {
  console.error(`entry length ${LINE.length} is outside 1-160 characters`);
  process.exit(1);
}
if (LINE.trim().length === 0) {
  console.error("entry must not be only whitespace");
  process.exit(1);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  console.error("entry must be a single line");
  process.exit(1);
}
for (const ch of LINE) {
  if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
    console.error("entry contains a control character");
    process.exit(1);
  }
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

// Round-trip verification: read the file back and require the bytes to be
// exactly the line plus one trailing newline.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE + "\n") {
  console.error("round-trip verification failed: /output/entry.txt mismatch");
  process.exit(1);
}
console.log(`wrote /output/entry.txt (${LINE.length} chars)`);
