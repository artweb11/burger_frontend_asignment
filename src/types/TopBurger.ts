import type { Burger } from "./Burger";

export type TopBurger = Burger & {
  taste: number;
  texture: number;
  visual: number;
  spot: number;
};
