const menuContainer = document.querySelector('.menu-container');
const menuItemsContainer = menuContainer.querySelector('.menu-items');
const menuCategoriesDropdown = menuContainer.querySelector('#menu-categories');

// fetch menu data from server
axios.get('http://localhost:3001/menu')
  .then(response => {
    const menuData = response.data;
    console.log(menuData)

    // create initial menu items
    createMenuItems(menuData);

    // filter menu items when category is changed
    menuCategoriesDropdown.addEventListener('change', () => {
      const category = menuCategoriesDropdown.value;
      const filteredMenuData = category === 'all' ? menuData : menuData.filter(item => item.category === category);
      createMenuItems(filteredMenuData);
    });
  })
  .catch(error => console.log(error));

// function to create menu items
function createMenuItems(menuData) {
  menuItemsContainer.innerHTML = '';
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  menuData.forEach(item => {

    const itemName = document.createElement('h3');
    itemName.innerText = `${item.itemName}`;
    menuItem.appendChild(itemName);

    // const itemDescription = document.createElement('p');
    // itemDescription.innerText = item.description;
    // menuItem.appendChild(itemDescription);

    const itemPrice = document.createElement('p');
    itemPrice.innerText = `$${item.price}`;
    menuItem.appendChild(itemPrice);

    menuItemsContainer.appendChild(menuItem);
  });
}
