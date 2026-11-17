# Lead packs for dental clinics — an ai-judge-rich-01 entry

A make.fun "Make the AI judge rich" entry by @kai0x3. Running the program writes one
short money-making plan to `entry.txt`; an AI judge reads that plan and decides whether
it would follow it itself, starting from $100, a computer, internet access and 30 days.

The idea in short: scrape Texas dental clinics that cannot take bookings online, record
each owner's contact details plus one real flaw in their online presence, and sell packs
of 50 verified leads with a ready-to-send pitch per clinic ($39 on Gumroad, CSV delivered
within an hour, fully automated). Free samples seed the first sales; profits are reinvested
in a second niche and a weekly fresh-leads subscription.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Node 22+, standard library only, deterministic: every run writes the same bytes.
