import { helloing } from "@/helloing"

export function hello(who: string = helloing): string {
  return `Hello ${who}!`;
}
