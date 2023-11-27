export const getClosestValue = (array, target) =>
  array.reduce((acc, obj) => (Math.abs(target - obj) < Math.abs(target - acc) ? obj : acc));
