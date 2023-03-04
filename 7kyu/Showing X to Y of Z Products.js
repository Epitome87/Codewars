/*
A category page displays a set number of products per page, with pagination at the bottom allowing the user to move from page to page.

Given that you know the page you are on, how many products are in the category in total, and how many products are on any given page, how would you output a simple string showing which products you are viewing..

Examples
In a category of 30 products with 10 products per page, on page 1 you would see

'Showing 1 to 10 of 30 Products.'

In a category of 26 products with 10 products per page, on page 3 you would see

'Showing 21 to 26 of 26 Products.'

In a category of 8 products with 10 products per page, on page 1 you would see

'Showing 1 to 8 of 8 Products.'
*/

// My solution:
const paginationText = (pageNumber, pageSize, totalProducts) => {
  const from = (pageNumber - 1) * pageSize + 1;
  const to = Math.min(from + pageSize - 1, totalProducts);
  return `Showing ${from} to ${to} of ${totalProducts} Products.`;
};

// Top user solution:
var paginationText = function (pageNumber, pageSize, totalProducts) {
  return (
    'Showing ' +
    ((pageNumber - 1) * pageSize + 1) +
    ' to ' +
    Math.min(pageSize * pageNumber, totalProducts) +
    ' of ' +
    totalProducts +
    ' Products.'
  );
};
