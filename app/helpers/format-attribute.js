import { helper } from '@ember/component/helper';

export function formatAttribute(params) {
  return params[0].replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

export default helper(formatAttribute);
