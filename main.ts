import { writeFileSync, mkdirSync } from "node:fs";
const first = "My confidence interval said 99.9% on time. ";
const second = "It did not say which year.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", first + second);
