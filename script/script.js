const navEmail = document.querySelector('.nav-container-right__email');
const burgerMenu = document.querySelector('.nav-container-imagen');
const menuCarritoIcon = document.querySelector('.nav-container-right__shopping');
const cardsContainer = document.querySelector('.main-container-card')

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.order-container');




navEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu (){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu () {
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside () {

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    // aside.classList.toggle('inactive')
    if(!isMobileMenuClosed) {
            mobileMenu.classList.add('inactive');
        }
    aside.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'bike',
    price: 156,
    image: 'https://orvehogar.com/wp-content/uploads/2023/05/moto-ninja-z1-cobra.jpg',
});

productList.push({
    name: 'celular',
    price: 0,
    image: 'https://orvehogar.com/wp-content/uploads/2023/05/moto-ninja-z1-cobra.jpg',
});

productList.push({
    name: 'celulae',
    price: 0,
    image: 'https://orvehogar.com/wp-content/uploads/2023/05/moto-ninja-z1-cobra.jpg',
});

/*
<div class="main-container-card__product">
                <img class="image" src="https://orvehogar.com/wp-content/uploads/2023/05/moto-ninja-z1-cobra.jpg" alt="">
                <div class="product-info">
                    <div>
                        <p>$120.00</p>
                        <p>biker</p>
                    </div>
                    <div>
                        <figure>
                            <img src="./assetsone/iconos/bt_add_to_cart.svg" alt="">
                        </figure>
                    </div>
            </div>
*/

function rederProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('main-container-card__product');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement('p');
        productName.innerText =  product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productfigure = document.createElement('figure');
        productfigure
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './assetsone/iconos/bt_add_to_cart.svg');
        productfigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productfigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo)
    
    
        cardsContainer.appendChild(productCard);
    }
}

rederProducts(productList);