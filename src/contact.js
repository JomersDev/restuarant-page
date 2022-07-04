export default function loadContactPage() {
    const content = document.getElementById("content");

    //clear current DOM elements
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    
    //content background
    const contentBackground = document.createElement('div');
    contentBackground.className = "contact-background";
    content.appendChild(contentBackground);

    //location
    const location = document.createElement('p');
    location.textContent = "Location: The Rocks, Sydney";
    location.className = "contact-content";
    contentBackground.appendChild(location);

    //phone
    const phone = document.createElement('p');
    phone.textContent = "Phone: 9876 1321";
    phone.className = "contact-content";
    contentBackground.appendChild(phone);

    //email
    const email = document.createElement('p');
    email.textContent = "Email: admin@thebrewhouse.com";
    email.className = "contact-content";
    contentBackground.appendChild(email);
}