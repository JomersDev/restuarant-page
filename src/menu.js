export default function loadMenuPage() {
    const content = document.getElementById("content");

    //remove currently loaded DOM elements
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    //menu background 
    const menuBackground = document.createElement('div');
    menuBackground.className = "menu-background";
    content.appendChild(menuBackground);

    //menu heading "Currently Pouring"
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = "Currently Pouring";
    menuTitle.className = "menu-title";
    menuBackground.appendChild(menuTitle);

    //function that generates a menu item with DOM manipulation
    function createMenuItem(title, alc, description) {
        const menuItemContainer = document.createElement('div');
        menuItemContainer.className = "menu-item-container"
        menuBackground.appendChild(menuItemContainer);

        const menuItemTitle = document.createElement('h2');
        menuItemTitle.textContent = title;
        menuItemContainer.appendChild(menuItemTitle);

        const menuItemAlc = document.createElement('p');
        menuItemAlc.textContent = alc;
        menuItemAlc.className = "menu-alc";
        menuItemContainer.appendChild(menuItemAlc);

        const menuItemDesc = document.createElement('p');
        menuItemDesc.textContent = description;
        menuItemDesc.className = "menu-desc";
        menuItemContainer.appendChild(menuItemDesc);
    }

    //creating Menu items 
    createMenuItem("Brew House Pale", "5% acl/vol.", "A golden Australian pale ale with a light malt body and zesty hop finish");
    createMenuItem("Pink Lemonade Sour", "4.7% acl/vol.", "A pink lemonade inspired sour that's secondary fermented with fresh raspberries and 100% Australian lemon juice.");
    createMenuItem("The Omen Oatmeal Stout", "5.5% acl/vol.", "A rich, smooth stout with layers of malt complexity. Roast malt, coffee and chocolate notes.");
    createMenuItem("The Big Sur", "6.7% acl/vol.", "Loaded with citrus and stone fruit notes from the use of all American hops for a crisp west coast IPA");
}