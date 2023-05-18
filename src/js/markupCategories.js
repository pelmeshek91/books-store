export const markupCategories = data => {
  const markup = data.reduce(
    (acc, { list_name }) =>
      acc +
      `<li class='item-category'><button type="button" class='btn-category'>${list_name}</button></li>`,
    '<li class="item-category"><button type="button" class="btn-category active-text">All categories</button></li>'
  );
  return markup;
};
