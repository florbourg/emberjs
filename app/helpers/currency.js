import { helper } from '@ember/component/helper';

export default helper(function currency(positional, named = {}) {
  const [number] = positional;
  const { sign = '£ ' } = named;

  const pounds = number.toFixed(2);
  return `${sign}${pounds}`;
});
