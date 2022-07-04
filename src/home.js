export default function loadHomePage() {
    const content = document.getElementById("content");

    //clear current DOM elements
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

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
}