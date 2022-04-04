const nameClass = require('./util/nameClass.js');

module.exports = (theme) => {
  const generators = [
    ([modifier, size]) => ({
      [nameClass('start', modifier)]: {
        right: size,
      },
      [nameClass('end', modifier)]: {
        left: size,
      },
      [nameClass('end', modifier)]: {
        right: size,
      },
      [nameClass('start', modifier)]: {
        left: size,
      },
    }),
  ];
  return generators.flatMap((generator) =>
    Object.entries(theme('inset')).flatMap(generator)
  );
};
