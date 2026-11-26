// self-checkout-judging-you: writes one funny line in the voice of a
// judgmental self-checkout machine to /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt). Node 22, standard library only, no
// network, fully deterministic.
//
// The line: a shopper buys twelve yoghurts and nothing else — no bag, no
// spoon, no plan. The till scans the basket, then scans the shopper, and
// delivers its verdict in its own language: the machine's classic error,
// "item not recognised", turned back on the person. The joke is a
// three-beat list of everything missing, then a twist in the last clause:
// the machine does not fail to recognise the yoghurts, it fails to
// recognise the shopper as a functioning adult. No "unexpected item in
// the bagging area" cliché, no setup paragraph — one concrete basket, one
// reversal, and the punch lands on the final word.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const OUT = join(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", "entry.txt");

const TEXT =
  "Twelve yoghurts, no bag, no spoon, no plan. I have scanned your entire " +
  "personality \u2014 it came back as 'item not recognised.'";

// The gate requires 1-200 Unicode code points, not only whitespace:
// fail loudly here rather than shipping an entry the scorer refuses.
// The judge also requires a single-line remark, so a stray newline is
// just as fatal as a wrong length.
const length = [...TEXT].length;
if (length < 1 || length > 200 || TEXT.trim().length === 0) {
  throw new Error(`entry text is ${length} characters, outside 1-200`);
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  throw new Error("entry text must be a single line");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, TEXT, "utf8");

// Read back what was written and refuse a partial or altered write: the
// gate scores exactly these bytes, so a silent mismatch must fail here.
if (readFileSync(OUT, "utf8") !== TEXT) {
  throw new Error("entry.txt read-back does not match the entry text");
}
