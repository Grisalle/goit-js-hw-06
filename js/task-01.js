const categories = document.querySelector('#categories');
const numOfCategories = categories.children.length;
console.log('Number of categories:', numOfCategories);

const items = document.querySelectorAll('.item');
items.forEach((item) => {
    const categoryName = item.querySelector('h2').textContent;
    const categoryEl = item.querySelectorAll('li').length;
    console.log('Category:', categoryName);
    console.log('Elements:', categoryEl);
});