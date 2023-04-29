import data from './data.json';

export const config = {
  runtime: 'edge',
}

export default () => {
  return data;
}