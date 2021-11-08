export const scrollToId = (id: string) => {
  //@ts-ignore
  document
    .getElementById(id)
    .scrollIntoView({ behavior: 'smooth', block: 'center' });
};
