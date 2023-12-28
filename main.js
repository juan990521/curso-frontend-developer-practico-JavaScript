const li = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');

const mobileMenu = document.querySelector('.mobile-menu');
const iconHamburguesa = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const  menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');

const cardsContainer = document.querySelector('.cards-container');


li.addEventListener('click', toggleDesktopMenu);
iconHamburguesa.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    //const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
   
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }

    
    // if(!isMobileMenuClosed) {
    //     mobileMenu.classList.add('inactive')
    // }
    closeProductDetailAside();

        menu.classList.toggle('inactive');

}

function toogleMobileMenu() {
    
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
    closeProductDetailAside();
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isMenuDesktopClosed = menu.classList.contains('inactive')
    const isProductDetailContainerClosed = productDetailContainer.classList.contains('inactive');

    if(!isMenuDesktopClosed) {
        menu.classList.add('inactive')
    }
    
     if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    if(!isProductDetailContainerClosed) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');


}


function openProductDetailAside() {
    
    shoppingCartContainer.classList.add('inactive');

    //const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    //if(!isShoppingCartContainerClosed) {
        //shoppingCartContainer.classList.add('inactive');
    //}

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Phone',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr) {
    for(product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.textContent = '$' + product.price
        const productName = document.createElement('p');
        productName.textContent = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
    
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(img, productInfo);
    
        
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);

