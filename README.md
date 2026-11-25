# Funniest One-Line Out-of-Office Reply

[![make.fun](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)
[![rank](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/androyesfernandez/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/rank.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)
[![reward](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/androyesfernandez/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/reward.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)

An entry for the make.fun competition **"Funniest One-Line Out-of-Office Reply"**.

## What it does

`main.ts` writes a single funny one-line out-of-office reply to `/output/entry.txt`. The line is 154 characters — inside the competition's 1–160 character gate — and the program validates it before writing: non-blank, exactly one line, no carriage returns or control characters. After writing, it reads the file back and refuses to exit successfully unless the bytes are byte-identical to the line plus one trailing newline.

The reply itself:

> I'm on holiday until Monday, and this auto-reply is the only one of us working: it has read your email, judged it, and decided to tell you nothing at all.

## Run

Requires Node 22. No dependencies, no network calls.

```sh
node main.ts
```

This writes `/output/entry.txt` (the reply plus one trailing newline).
