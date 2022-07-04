export default function initalPageLoad() {
    const header = document.createElement('div');
    header.className = "header";
    document.body.insertBefore(header, document.body.firstChild);

    const title = document.createElement('h1');
    title.textContent = "The Brew House";
    header.appendChild(title);

    const buttonContainer = document.createElement('div');
    buttonContainer.className = "nav-buttons";
    header.appendChild(buttonContainer);

    const homeButton = document.createElement('button');
    homeButton.className = "nav";
    homeButton.textContent = "Home";
    homeButton.id = "home";
    buttonContainer.appendChild(homeButton);

    const menuButton = document.createElement('button');
    menuButton.className = "nav";
    menuButton.textContent = "Menu";
    menuButton.id = "menu";
    buttonContainer.appendChild(menuButton);

    const contactButton = document.createElement('button');
    contactButton.className = "nav";
    contactButton.textContent = "Contact";
    contactButton.id = "contact"
    buttonContainer.appendChild(contactButton);

    //Content container seciton of the website
    const content = document.getElementById("content");
    const contentBackground = document.createElement('div');
    contentBackground.className = "content-background";
    content.appendChild(contentBackground);

    const headline = document.createElement("h1");
    headline.textContent = "Sydney's Newest Brewery!";
    headline.className = "headline";
    contentBackground.appendChild(headline);

    const hook = document.createElement('p');
    hook.textContent = "Check out our current beer selection!";
    hook.className = "hook";
    contentBackground.appendChild(hook);

    //footer section
    const footer = document.createElement('div');
    footer.className = "footer";
    document.body.appendChild(footer);
    const footerText = document.createElement('p');
    footerText.textContent = "Created by James McGrory 2022";
    footerText.className = "footer-text"
    footer.appendChild(footerText);
}