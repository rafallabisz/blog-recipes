export const concatArrSeparator = (
  arr: string[] | undefined,
  separator = "/"
) => arr?.join(separator) || "";
