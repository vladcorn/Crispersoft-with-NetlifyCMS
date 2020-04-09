export const bp = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1440,
  xxl: 1900,
};

const up = (bpName) => {
  return `@media (max-width: ${bp[bpName]}px)`;
};

const down = (bpName) => {
  return `@media screen and (min-width: ${bp[bpName]}px)`;
};

const between = (bpName1, bpName2) => {
  return `@media (min-width: ${bp[bpName1]}px) and (max-width: ${bp[bpName2]}px)`;
};

const only = (bpName) => {
  return `@media (min-width: ${bp[bpName]}px) and (max-width: ${bp[bpName]}px)`;
};

export const media = {
  up,
  down,
  between,
  only,
};
