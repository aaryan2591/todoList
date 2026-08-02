import "../styles.css";

export function about(){
    let aboutDiv = document.createElement("div");
        aboutDiv.classList.add("aboutDiv");
        document.getElementById("content").appendChild(aboutDiv);
    
        const aboutHeader = document.createElement("div");
        aboutHeader.classList.add("aboutHeader");
        aboutHeader.textContent = "About Fine Dine";

        const description = document.createElement("div");
        description.classList.add("description");
        description.innerHTML = "At <span>Fine Dine</span>, we believe every meal should be an experience worth savoring. Since our founding, we've been dedicated to blending timeless culinary traditions with a modern touch, using only the finest locally sourced ingredients.Our chefs pour passion into every dish, and our team is committed to making every visit feel personal, warm, and unforgettable. Whether you're joining us for a quiet dinner or a special celebration, we promise a table set with elegance and a meal crafted with care."

        const hours = document.createElement("div");
        hours.classList.add("hours");
        hours.innerHTML = ` <h3>Hours</h3>
                            <div>Monday - Friday: 5:00pm - 11:00pm</div>
                           <div>Saturday Sunday: 12:00pm - 11:30pm</div>
        `

        const contact = document.createElement("div");
        contact.classList.add("contact");

        const contactHeader = document.createElement("h3");
        contactHeader.textContent = "Contact";

        const address = document.createElement("div");
        address.textContent = "Address: 123 Riverside Lane, Pune";

        const number = document.createElement("div");
        number.textContent = "Phone: +91 9876543210";

        const mail = document.createElement("div");
        mail.textContent = "Mail: hello@finedine.com";

        contact.appendChild(contactHeader);
        contact.appendChild(address);
        contact.appendChild(number);
        contact.appendChild(mail);

        aboutDiv.appendChild(aboutHeader);
        aboutDiv.appendChild(description);
        aboutDiv.appendChild(hours);
        aboutDiv.appendChild(contact);
    }