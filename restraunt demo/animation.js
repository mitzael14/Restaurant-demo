/* Menu Filter */

const liItem = document.querySelectorAll("ul li");
const menuItem = document.querySelectorAll(".menu-item");

liItem.forEach(li => {
    li.onClick = function() {
        //active
        liItem.forEach(li => {
            li.className = "";
        })
        li.className = "active";

        // Filter
        const value = li.textContext;
        menuItem.forEach( item => {
            menu-item.style.display = 'none';
            console.log(menuItem.getAttribute('data-filter'));
            if (menuItem.getAttribute('data-filter') == value.toLowerCase()) {
                menuItem.style.display = 'block';
            }
        })
    }
});