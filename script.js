var products = [{
        name: "Rose",
        image: "data:image/jpeg;base64,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",
        price: 30.0,
        qtty: 1,
    },
    {
        name: "Crocus",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsbkTkxZA5fHAgmx4Ur2FBXqXmRdh750BnAw&usqp=CAU",
        price: 20.0,
        qtty: 1,
    },
    {
        name: "Bonsai",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGvDDtAW4WW5OljmtEGouW_AfCLPPilcQEKA&usqp=CAU",
        price: 90.0,
        qtty: 1,
    },
];

for (let val of products) {
    document.getElementsByClassName(
        "products"
    )[0].innerHTML += `<div class="product col-12 col-md-6 col-lg-4 text-center fw-bold">
<p class="product-title h3 m-3">${val.name}</p>
<img class="product-image" src="${val.image}" width="200" height="200">
<div class="product-details">
<p class="product-price h4 m-3">${val.price} €</p>
<button class="btn btn-primary product-button" type="button">ADD TO CART</button>
</div>
</div>
`;
}

var cart = [];

function addToCart(product, index) {
    if (cart.length == 0) {
        cart.push(product);
    } else if (cart.find((val) => val.name == product.name)) {
        cart[index].qtty++;
    } else {
        cart.push(product);
    }
    createRows();
    Total();
}

let btns = document.getElementsByClassName("product-button");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        addToCart(products[i], i);
    });
}

function createRows() {
    var result = "";

    for (let val of cart) {
        result += `
<div class="cart-row row d-flex">
<div class="cart-item col-6 my-3 ">
    <img class="cart-item-image" src="${val.image}" width="100" height="100">
    <span class="cart-item-title h5 ">${val.name}</span>
</div>
<span class="cart-price col-3 h4 my-3">${val.price} €</span>
<div class="cart-qtty-action col-3 d-flex">            
    <i class="minus fa fa-minus-circle my-auto" ></i>            
    <div class="cart-quantity p-4 h4">${val.qtty}</div>            
    <i class="plus fa fa-plus-circle my-auto"></i>        
    <button class="del btn btn-danger rounded-circle  my-auto ms-3 fw-bold" type="button"> X </button>            
</div>
</div>`;
    }

    document.getElementById("cart-items").innerHTML = result;

    let plus = document.getElementsByClassName("plus");
    let minus = document.getElementsByClassName("minus");
    let del = document.getElementsByClassName("del");

    for (let i = 0; i < plus.length; i++) {
        plus[i].addEventListener("click", function() {
            plusQtty(i);
            Total();
        });
        minus[i].addEventListener("click", function() {
            minusQtty(i);
            Total();
        });
        del[i].addEventListener("click", function() {
            deleteItem(i);
            Total();
        });
    }
}

function Total() {
    let total = 0;
    for (let val of cart) {
        total = total + val.price * val.qtty;
    }
    document.getElementById("price").innerHTML = total.toFixed(2) + " €";
}

function plusQtty(i) {
    cart[i].qtty++;
    document.getElementsByClassName("cart-quantity")[i].innerHTML = cart[i].qtty;
}

function minusQtty(i) {
    if (cart[i].qtty == 1) {
        cart.splice(i, 1);
        createRows();
    } else {
        cart[i].qtty -= 1;
        document.getElementsByClassName("cart-quantity")[i].innerHTML =
            cart[i].qtty;
    }
}

function deleteItem(i) {
    cart[i].qtty = 1;
    cart.splice(i, 1);
    createRows();
}