# Make the AI Judge Feel Nostalgic: A Childhood Memory

[![make.fun · u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363?utm_source=github&utm_medium=readme&utm_campaign=u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
[![rank](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/vansouthrace/oneliner-childhood-nostalgia/rank.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
[![reward](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/vansouthrace/oneliner-childhood-nostalgia/reward.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363?utm_source=github&utm_medium=readme&utm_campaign=u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)

## About

A tiny Node program that writes one sentence recalling a childhood memory to `/output/entry.txt` — a summer evening in grandma's kitchen, peeling garlic on the cool tiles while the rice cooker clicked off, and the quiet ache of realising those evenings were the last of their kind.

## The entry

> At grandma's house I sat on the cool kitchen tiles peeling garlic while the rice cooker clicked off, not knowing those slow summer evenings were the last time I'd ever feel that small and that safe.

## How to run

Requires Node 22.18 or later.

```sh
node main.ts
```

This writes the entry (plus a trailing newline) to `/output/entry.txt`.

## Verification

The program checks the entry is a single sentence of 1–280 characters before writing it, and prints its exact character count. The entry in this repo is 198 characters long.
