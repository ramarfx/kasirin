// utils.ts

export const convertBigIntToNumber = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map(convertBigIntToNumber);
  } else if (obj && typeof obj === "object") {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => {
        if (typeof value === "bigint") {
          return [key, Number(value)];
        } else if (typeof value === "object" && value !== null) {
          return [key, convertBigIntToNumber(value)];
        } else {
          return [key, value];
        }
      })
    );
  }
  return obj;
};
