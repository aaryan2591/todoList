import "../styles.css";

export function menu(){
    let menuDiv = document.createElement("div");
        menuDiv.classList.add("menuDiv");
        document.getElementById("content").appendChild(menuDiv);
    
        const starter = document.createElement("div");
        starter.classList.add("starter");

        const starterHeader = document.createElement("h2");
        starterHeader.textContent = "Starters";

        const starterItem = document.createElement("div");
        starterItem.innerHTML = `
            <p>Truffle Arancini</p>
            <p>Burrata with Heirloom Tomatoes</p>
            <p>Seared Scallops with Citrus Butter</p>
            <p>Wild Mushroom Soup</p>
        `
        const starterPrice = document.createElement("div");
        starterPrice.innerHTML=`
        <p>400</p>
        <p>500</p>
        <p>600</p>
        <p>400</p>
        `
        starter.appendChild(starterHeader);
        starter.appendChild(starterItem);
        starter.appendChild(starterPrice);

        const salad = document.createElement("div");
        salad.classList.add("salad");

        const saladHeader = document.createElement("h2");
        saladHeader.textContent = "Salads";

        const saladItem = document.createElement("div");
        saladItem.innerHTML = `
            <p>Roasted Beet & Goat Cheese Salad</p>
            <p>Classic Caesar with Parmesan Crisp</p>
            <p>Citrus Arugula Salad</p>
        `
        const saladPrice = document.createElement("div");
        saladPrice.innerHTML = `
        <p>400</p>
        <p>400</p>
        <p>350</p>
        `
        salad.appendChild(saladHeader);
        salad.appendChild(saladItem);
        salad.appendChild(saladPrice);

        const mainCourse = document.createElement("div");
        mainCourse.classList.add("mainCourse");

        const mainHeader = document.createElement("h2");
        mainHeader.textContent = "Main Course";

        const mainItem = document.createElement("div");
        mainItem.innerHTML = `
            <p>Herb-Crusted Rack of Lamb</p>
            <p>Pan-Seared Salmon with Lemon Butter</p>
            <p>Filet Mignon with Red Wine Reduction</p>
            <p>Wild Mushroom Risotto (vegetarian)</p>
            <p>Grilled Chicken with Rosemary Jus</p>
        `
        const mainPrice = document.createElement("div");
        mainPrice.innerHTML = `
        <p>1500</p>
        <p>1200</p>
        <p>1500</p>
        <p>800</p>
        <p>800</p>
        `
        mainCourse.appendChild(mainHeader);
        mainCourse.appendChild(mainItem);
        mainCourse.appendChild(mainPrice);

        const dessert = document.createElement("div");
        dessert.classList.add("dessert");

        const dessertHeader = document.createElement("h2");
        dessertHeader.textContent = "Desserts";

        const dessertItem = document.createElement("div");
        dessertItem.innerHTML = `
            <p>Chocolate Lava Cake</p>
            <p>Crème Brûlée</p>
            <p>Tiramisu</p>
            <p>Vanilla Bean Panna Cotta</p>
        `
        const dessertPrice = document.createElement("div");
        dessertPrice.innerHTML = `
        <p>400</p>
        <p>350</p>
        <p>400</p>
        <p>350</p>
        `
        dessert.appendChild(dessertHeader);
        dessert.appendChild(dessertItem);
        dessert.appendChild(dessertPrice);

        menuDiv.appendChild(starter);
        menuDiv.appendChild(salad);
        menuDiv.appendChild(mainCourse);
        menuDiv.appendChild(dessert);
}