export const api = <T>(data: T): Promise<T> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
