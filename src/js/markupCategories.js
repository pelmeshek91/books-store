export const markupCategories = data => {
  const markup = data.reduce(
    (acc, { list_name }) =>
      acc + `<li><button type="button">${list_name}</button></li>`,
    '<li><button type="button">All categories</button></li>'
  );
  return markup;
};
