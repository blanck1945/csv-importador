export const conditional = (condition: boolean, args: any[]) => {
  if (condition) {
    return args[0];
  } else {
    return args[1];
  }
};
