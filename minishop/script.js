let a = document.getElementsByClassName('a')[0];
let b = document.getElementsByClassName('b')[0];
let c = document.getElementsByClassName('c')[0];
let d = document.getElementsByClassName('d')[0];
let e = document.getElementsByClassName('e')[0];
let f = document.getElementsByClassName('f')[0];

let productTitle = document.getElementById("ProductTitle");
let popup = document.getElementById("popup");
let leftSide = document.getElementById("LevaStrana");
let productDescription = document.getElementById("ProductDescription");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let productPrice = document.getElementById("ProductPrice");
let closeButton = document.getElementById("closeButton");
let quantity = document.getElementById("quantity");
let addToCart = document.getElementById("AddToCart");

let count = 0;
let result = 0.0;
let price = 0.0;

popup.style.display = "none";



a.addEventListener("click", function () {
    leftSide.style.backgroundImage = "url('pictures/vazna.png')";
    productTitle.innerHTML = "Vazna"
    productDescription.innerHTML = "Description za vazna Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quos molestias maxime aliquam. Veniam minima sequi similique quis eaque unde, quia reprehenderit fugit illo pariatur doloribus nemo, mollitia ex aperiam";
    productPrice.innerHTML = "2.49";
    popup.style.display = "block";
    price = document.getElementById("ProductPrice").innerText;
});

b.addEventListener("click", function () {
    leftSide.style.backgroundImage = "url('pictures/random.jpg')";
    productTitle.innerHTML = "random";
    productDescription.innerHTML = "Description za random Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quos molestias maxime aliquam. Veniam minima sequi similique quis eaque unde, quia reprehenderit fugit illo pariatur doloribus nemo, mollitia ex aperiam";
    productPrice.innerHTML = "22.69";
    popup.style.display = "block";
    price = document.getElementById("ProductPrice").innerText;
});

c.addEventListener("click", function () {
    leftSide.style.backgroundImage = "url('pictures/random2.jpg')";
    productTitle.innerHTML = "random2";
    productDescription.innerHTML = "Description za random2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quos molestias maxime aliquam. Veniam minima sequi similique quis eaque unde, quia reprehenderit fugit illo pariatur doloribus nemo, mollitia ex aperiam";
    productPrice.innerHTML = "9.99";
    popup.style.display = "block";
    price = document.getElementById("ProductPrice").innerText;
});

d.addEventListener("click", function () {
    leftSide.style.backgroundImage = "url('pictures/random3.jpg')";
    productTitle.innerHTML = "random3";
    productDescription.innerHTML = "Description za random3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quos molestias maxime aliquam. Veniam minima sequi similique quis eaque unde, quia reprehenderit fugit illo pariatur doloribus nemo, mollitia ex aperiam";
    productPrice.innerHTML = "18.59";
    popup.style.display = "block";
    price = document.getElementById("ProductPrice").innerText;
});

e.addEventListener("click", function () {
    leftSide.style.backgroundImage = "url('pictures/random4.jpg')";
    productTitle.innerHTML = "random4";
    productDescription.innerHTML = "Description za random4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quos molestias maxime aliquam. Veniam minima sequi similique quis eaque unde, quia reprehenderit fugit illo pariatur doloribus nemo, mollitia ex aperiam";
    productPrice.innerHTML = "3.99";
    popup.style.display = "block";
    price = document.getElementById("ProductPrice").innerText;
});

f.addEventListener("click", function () {
    leftSide.style.backgroundImage = "url('pictures/random5.jpg')";
    productTitle.innerHTML = "random5";
    productDescription.innerHTML = "Description za random5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quos molestias maxime aliquam. Veniam minima sequi similique quis eaque unde, quia reprehenderit fugit illo pariatur doloribus nemo, mollitia ex aperiam";
    productPrice.innerHTML = "20.49";
    popup.style.display = "block";
    price = document.getElementById("ProductPrice").innerText;
});


plus.addEventListener('click', function () {
    let tempPrice = parseFloat(price);

    if (quantity.placeholder == "1") {
        tempPrice = tempPrice * 2;
        count = 1;
    }
    quantity.placeholder = `${count += 1}`;
    productPrice.innerText = `${(result += tempPrice).toFixed(2)}`;
});

minus.addEventListener('click', function () {
    let tempPrice = parseFloat(price);
    if (count != 0) {
        quantity.placeholder = `${--count}`;

        productPrice.innerText = `${(result -= tempPrice).toFixed(2)}`;
    }
    if (count == 0) {
        productPrice.innerText = `${tempPrice}`;
        quantity.placeholder = '1';
        minus.removeEventListener("deactivate", function () {

        });
    }

});
let clickCount = 0;
addToCart.addEventListener("click", function () {

    clickCount++;
    let title = productTitle.innerText;
    let totalPrice;
    let quantity;
    if (count == 0) {
        quantity = 1;
        totalPrice = parseFloat(productPrice.innerText);
    }
    else {
        quantity = count;
        totalPrice = result;
    }
    localStorage.setItem("Produkt" + clickCount, `${title}  ${totalPrice.toFixed(2)} ${quantity}`);

});

closeButton.addEventListener("click", function () {
    popup.style.display = "none";
    price = 0.0;
    result = 0.0;
    quantity.placeholder = `1`;
    count = 0;

});

document.getElementById("clearLocal").addEventListener("click", function () {
    localStorage.clear();
})
