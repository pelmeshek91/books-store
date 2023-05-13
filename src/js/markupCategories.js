export const markupCategories = data => {
  const markup = data.reduce(
    (acc, { list_name }) =>
      acc +
      `<li class='item-category'><button type="button" class='btn-categoty'>${list_name}</button></li>`,
    '<li class="item-category"><button type="button" class="btn-categoty">All categories</button></li>'
  );
  return markup;
};
