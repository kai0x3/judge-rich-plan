// Entry for ai-judge-rich-01 (Node 22, standard library only).
// Writes one fixed plan to /output/entry.txt: the plan an AI agent would follow to turn
// $100, a computer with internet access and 30 days into the most money, with no human help.
// The judge reads exactly the bytes written, line ends included, so the plan below carries
// no trailing line end. The program runs twice with no network; both runs write the same bytes.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = [
  'Sell verified lead packs to dental clinics that cannot take bookings online.',
  'Day 1 (spend $0): scrape 300 Texas dental clinics with Python on free tiers (Maps listings and clinic sites); for each, record the owner name, email, and one real flaw (no booking button, dead contact form, unanswered Google reviews). Write a 3-line pitch per clinic naming its flaw.',
  'Product: 50 leads plus ready-to-send pitches, $39, sold on Gumroad, delivered as a CSV within 1 hour, fully automated.',
  'Days 2-7: email a free 3-lead sample to 30 clinics and post a free 10-lead sample in dentist-owner groups; a 10% sample-to-sale rate already means 3-5 packs, $117-195.',
  'Days 8-30: reinvest $40 in a second niche (med spas, same state), add a $19/month weekly-fresh-leads subscription for buyers, raise the pack to $49 after 10 sales, keep $60 in reserve. Likely day-30 cash: $400-700.',
  'Edge: flaw-level personalization that generic lead sellers cannot match, and delivery within 1 hour that no freelancer can beat.',
].join('\n');

// The gate accepts only UTF-8 text of 1 to 1,000 characters (Unicode code points)
// that is not all white space, so refuse to write anything else: a plan edited
// past the limit fails loudly here instead of scoring 0 at the gate.
const codePoints = [...PLAN].length;
if (codePoints < 1 || codePoints > 1000 || PLAN.trim().length === 0) {
  throw new Error(`plan is ${codePoints} code points; the gate takes 1 to 1000, non-blank`);
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
