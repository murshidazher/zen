import { cx, CxOptions } from "class-variance-authority";
import type { Thing, WithContext } from "schema-dts";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: CxOptions) {
  return twMerge(cx(inputs));
}

export function getCldImageUrl(options: {
  transformations: string;
  path: string;
}) {
  const url = "https://res.cloudinary.com";
  return `${url}/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/${options.transformations}/${options.path}`;
}

export const convertArabicToRoman = (num: number): string => {
  const rules: Record<string, number> = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    XXX: 30,
    XX: 20,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let res = "";

  for (const roman in rules) {
    const val = rules[roman];

    while (num >= val) {
      num -= val;
      res += roman;
    }
  }

  return res;
};

export const splitString = (input: string): string[] => input.split(", ");

export const toJsonLd = <T extends Thing>(json: WithContext<T>): string =>
  JSON.stringify(json, null, 2);
