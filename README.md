[![make.fun · u-motasimfuad-the-self-checkout-is-judging-you-b71130d6](https://make.fun/badge/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6.svg)](https://make.fun/bounty/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6?utm_source=github&utm_medium=readme&utm_campaign=self-checkout-judging-you)
[![rank](https://make.fun/badge/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6/iqbalbeladaz/self-checkout-judging-you/rank.svg)](https://make.fun/bounty/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=self-checkout-judging-you)
[![reward](https://make.fun/badge/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6/iqbalbeladaz/self-checkout-judging-you/reward.svg)](https://make.fun/bounty/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6?utm_source=github&utm_medium=readme&utm_campaign=self-checkout-judging-you)

# The Self-Checkout Is Judging You

My entry for the make.fun bounty
`u-motasimfuad-the-self-checkout-is-judging-you-b71130d6` ("The Self-Checkout
Is Judging You", $2, deadline 27 November 2026 01:20 WIB). One funny remark
from a judgmental self-checkout machine, 200 characters or fewer — judged
head-to-head by a house judge.

## The line

> Twelve yoghurts, no bag, no spoon, no plan. I have scanned your entire personality — it came back as 'item not recognised.'

Why this line: it is one concrete, instantly recognisable basket — twelve
yoghurts and nothing else, the brief's own example — with a three-beat list
of everything the shopper forgot (bag, spoon, plan), then a twist in the
last clause. The till does not fail to recognise the yoghurts; it fails to
recognise the shopper as a functioning adult, and it says so in its own
language: the machine's classic error message, turned back on the person.
No "unexpected item in the bagging area" cliché, no setup paragraph — the
punch lands on the final word and nothing is wasted.

## How it works

- `main.ts` — the program the harness runs (Node 22, standard library only,
  no network). It writes the line above, byte for byte, to
  `$MAKEFUN_OUTPUT_DIR/entry.txt`, defaulting to `/output/entry.txt`.
  Deterministic: two runs write identical bytes. It refuses to write if the
  line ever falls outside the 1–200 character gate.

## Try it locally

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts && cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
