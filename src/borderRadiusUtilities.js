const nameClass = require('./util/nameClass');

module.exports = (theme) => {
  const generators = [
    ([modifier, value]) => ({
      [nameClass('rounded-e', modifier)]: {
        borderStartEndRadius: value,
        borderEndEndRadius: value,
      },
      [nameClass('rounded-s', modifier)]: {
        borderStartStartRadius: value,
        borderEndStartRadius: value,
      },
    }),
    ([modifier, value]) => ({
      [nameClass('rounded-ts', modifier)]: { borderStartStartRadius: value },
      [nameClass('rounded-te', modifier)]: { borderStartEndRadius: value },
      [nameClass('rounded-be', modifier)]: { borderEndEndRadius: value },
      [nameClass('rounded-bs', modifier)]: { borderEndStartRadius: value },
    }),
  ];

  return generators.flatMap((generator) =>
    Object.entries(theme('borderRadius')).flatMap(generator)
  );
};
