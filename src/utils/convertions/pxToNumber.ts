const pxToNumber = (value: string): number => {
  const numericValue = parseInt(value.replace(/\D/g, ""));
  if (isNaN(numericValue)) return 0;
  return numericValue;
};

export { pxToNumber };
