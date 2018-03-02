let a = document.getElementsByClassName('a')[0];
let b = document.getElementsByClassName('b')[0];
let c = document.getElementsByClassName('c')[0];
let d = document.getElementsByClassName('d')[0];
let e = document.getElementsByClassName('e')[0];
let f = document.getElementsByClassName('f')[0];
let g = document.getElementsByClassName('g')[0];
let h = document.getElementsByClassName('h')[0];
let i = document.getElementsByClassName('i')[0];
let j = document.getElementsByClassName('j')[0];
let k = document.getElementsByClassName('k')[0];
let m = document.getElementsByClassName('m')[0];


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

window.onload = function () {

    popup.style.display = "none";

    a.addEventListener("click", function () {
        leftSide.style.backgroundImage = "url('pictures/1.png')";
        productTitle.innerHTML = " Jerusalem Tallit - Blue"
        productDescription.innerHTML = `This extraordinary tallit will bring dazzling color and heart-touching meaning to your prayers. In place of the traditional, staid stripes, this tallit boasts a vibrant rendition of Jerusalem's iconic buildings, complete with turreted walls, domed rooftops, and arched windows. They sky-blue background is echoed in a stripe running beneath the stunning design; this is surrounded by richly colored stripes in an eye-catching medley of jewel tones. `;
        productPrice.innerHTML = "56.59";
        popup.style.display = "block";
        price = document.getElementById("ProductPrice").innerText;
    });

    b.addEventListener("click", function () {
        leftSide.style.backgroundImage = "url('pictures/2.png')";
        productTitle.innerHTML = "Woman of Valor: Yair Emanuel Raw Silk Embroidered Wall Hanging";
        productDescription.innerHTML = `This gorgeous silk tapestry features a colorful pomegranatel motif around its border, while the gold colored stitching in the center is the full text of King Solomon's poem, Eishet Chayil mi yimtza, verahok mipninim michra... ("Who can find a woman of valor? Her value is far beyond pearls.") (Proverbs 31:10)`;
        productPrice.innerHTML = "22.69";
        popup.style.display = "block";
        price = document.getElementById("ProductPrice").innerText;
    });

    c.addEventListener("click", function () {
        leftSide.style.backgroundImage = "url('pictures/3.png')";
        productTitle.innerHTML = "Hand Painted Metal Star of David";
        productDescription.innerHTML = `This bright colorful decoration will be a welcome bit of joy and cheer in your home!  The radiant colors simply shine in any light!  The blue Star of David is filled with pomegranate branches.  Both are classic Jewish decorative motifs.`;
        productPrice.innerHTML = "9.99";
        popup.style.display = "block";
        price = document.getElementById("ProductPrice").innerText;
    });

    d.addEventListener("click", function () {
        leftSide.style.backgroundImage = "url('pictures/4.png')";
        productTitle.innerHTML = "Golden Seven Branched Temple Menorah";
        productDescription.innerHTML = `Featuring an ornate design on the top of each of the branches, this marvelous piece is reminicsent of the great gold menorah which stood in the Holy Temple, and is embellished with three decorative elements down its stem.`;
        productPrice.innerHTML = "18.59";
        popup.style.display = "block";
        price = document.getElementById("ProductPrice").innerText;
    });

    e.addEventListener("click", function () {
        leftSide.style.backgroundImage = "url('pictures/5.jpg')";
        productTitle.innerHTML = "Silk Kippah";
        productDescription.innerHTML = `This awesome machine embroidered silk kippah features a colorful Star of David motif in a stylishly decorative design.`;
        productPrice.innerHTML = "9.99";
        popup.style.display = "block";
        price = document.getElementById("ProductPrice").innerText;
    });

    f.addEventListener("click", function () {
        leftSide.style.backgroundImage = "url('pictures/6.jpg')";
        productTitle.innerHTML = "Jewish Wedding Ring";
        productDescription.innerHTML = `This stunning piece of jewelry is a magnificent expression of ancient tradition, while still having a gorgeous contemporary look. The exquisite 14K yellow gold band is capped with a glossy blue enamel, which features 14K gold lettering of the traditional Hebrew Jewish wedding vow said under every chuppah, Harei At Mekudeshet Li - You are betrothed to me (with this ring).`;
        productPrice.innerHTML = "429.00";
        popup.style.display = "block";
        price = document.getElementById("ProductPrice").innerText;
    });
    g.addEventListener("click", function () {
        leftSide.style.backgroundImage = "url('pictures/7.jpg')";
        productTitle.innerHTML = "Deluxe Torah Scroll Replica";
        productDescription.innerHTML = `This amazing Torah scroll replica has the look and feel of the real thing. It contains the entire Torah text in its original script printed on high quality paper. The scroll itself is held by wooden handles while adorned with metallic rimonim at the top, just like a real Torah scroll!  The beautiful outside cover is made from a traditional velvet fabric which is embroidered with a traditional design.`;
        productPrice.innerHTML = "49.99";
        popup.style.display = "block";
        price = document.getElementById("ProductPrice").innerText;
    });

    h.addEventListener("click", function () {
        leftSide.style.backgroundImage = "url('pictures/8.jpg')";
        productTitle.innerHTML = "Ani Ledodi Bracelet";
        productDescription.innerHTML = `A beautiful contemporary piece of jewelry with a kabbalistic flavor, this will be a treasured gift for a lifetime! The robust sterling silver centerpiece is overlaid by a golden plaque. It has been hand engraved with the Biblical Hebrew verse from King Solomon's wisdom, Ani Ledodi Vedodi Li ("I am my beloved's and my beloved is mine.") (Song of Songs 6:3). `;
         productPrice.innerHTML = "114.00";
        popup.style.display = "block";
        price = document.getElementById("ProductPrice").innerText;
    });

    i.addEventListener("click", function () {
        leftSide.style.backgroundImage = "url('pictures/9.jpg')";
        productTitle.innerHTML = "Set of Four Shalom Coasters";
        productDescription.innerHTML = `This beautiful set of four matching coasters will add a beautiful touch to coffee time!  The ceramic plate is set in a wooden frame.  The design features a flying dove holding an olive branch above the words Shalom in English and Hebrew.`;
        productPrice.innerHTML = "27.95";
        popup.style.display = "block";
        price = document.getElementById("ProductPrice").innerText;
    });
    j.addEventListener("click", function () {
        leftSide.style.backgroundImage = "url('pictures/10.jpg')";
        productTitle.innerHTML = "Shalom Bowl";
        productDescription.innerHTML =`By displaying this bowl, you can show your longing for peace in the Holy land.  Surrounded by classic Armenian colorful floral patterns are the words Shalom (peace) in Hebrew and English.`;
        productPrice.innerHTML = "11.99";
        popup.style.display = "block";
        price = document.getElementById("ProductPrice").innerText;
    });
    k.addEventListener("click", function () {
        leftSide.style.backgroundImage = "url('pictures/11.jpg')";
        productTitle.innerHTML = "Gold Lion of Judah and Western Wall Ring";
        productDescription.innerHTML = `This unique sterling silver ring is an exquisite work of art which features a beautiful 9K gold Lion of Judah symbol, while the band is adorned with an intricate Western Wall (Kotel) theme, the famous vestige of the Holy Temple of Jerusalem, and a primary symbol of Jewish dreams and aspirations.`;
        productPrice.innerHTML = "349.00";
        popup.style.display = "block";
        price = document.getElementById("ProductPrice").innerText;
    });
    m.addEventListener("click", function () {
        leftSide.style.backgroundImage = "url('pictures/12.jpg')";
        productTitle.innerHTML = "Silk Tallit";
        productDescription.innerHTML = `This fabulous raw silk tallit with an embroidered Etz Haim (Tree of Life) motif is destined to become a treasured heirloom in your home.The tallit is made from hand woven raw silk. The stripes, atarah (yoke) and corners are composed of sections of appliqued raw silk sewn onto the tallit, with embroidery forming the motif.`;
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
   
    closeButton.addEventListener("click", function () {
        close();

    });

    document.getElementById("clearLocal").addEventListener("click", function () {
        localStorage.clear();
    })



}

function close() {
    popup.style.display = "none";
    price = 0.0;
    result = 0.0;
    quantity.placeholder = `1`;
    count = 0;
}

