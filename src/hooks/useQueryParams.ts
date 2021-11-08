export const useQueryParams = (query: string) => {
  return query
    ? (/^[?#]/.test(query) ? query.slice(1) : query)
        .split('&')
        .reduce((params: any, param: any) => {
          let [key, value]: [number, any] = param.split('=');
          params[key] = value
            ? decodeURIComponent(value.replace(/\+/g, ' '))
            : '';
          return params;
        }, {})
    : {};
};
