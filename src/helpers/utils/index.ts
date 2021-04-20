export const mergeWithoutNil = (target: any, from: any) => {
  from = JSON.parse(JSON.stringify(from));

  Object.assign(target, from);

  return target;
};
