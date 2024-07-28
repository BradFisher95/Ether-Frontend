export const camelToSnake = (camelCase: string) => {
  return camelCase.replace(/([A-Z])/g, '_$1').toLowerCase();
};

export const camelToKebab = (camelCase: string) => {
  return camelCase.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};
