let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let listProducts = [
    {
        id: 1,
        name: 'Location Ajah Lekki',
        price: 4000000,
        quantity:0,
        bedroom: 4,
        bath: 4,
        sqm: 400,
        image: '../images/img_1.jpg',
        nature: {
            features: ['swimming', 'light', 'water'],
            location: ['lekki', 'ajah'],
            bedroom: ['1', '2', '3', '4', '5', '6'],
            type: 'duplex'
        }
    },
    {
        id: 2,
        name: 'Location Chevron',
        price: 50000000,
        bedroom:3,
        quantity: 30,
        image: '../images/img_2.jpg',
        nature: {
            features: ['swimming', 'water'],
            location: ['Lekki'],
            bedroom: ['1', '2', '3', '4', '5', '6'],
            type: 'Terrace'
        }
    },

    
    {
        id: 3,
        name: 'Location Akute',
        price: 70000000,
        bedroom: 5,
        quantity: 3,
        image: '../images/img_3.jpg',
        nature: {
            features: ['light'],
            location: ['Lekki'],
            bedroom: [ '5'],
            type: 'Bongalow'
        }
    },

    
    {
        id: 4,
        name: 'Location ibeju',
        price: 80000000,
        bedroom:3,
        quantity: 10,
        image: '../images/img_4.jpg',
        nature: {
            features: ['swimming'],
            location: ['Lekki'],
            bedroom: ['4'],
            type: 'Semi-detached'
        }
    },

    
    {
        id: 5,
        name: 'Location Chevron',
        price: 140000000,
        bedroom:6,
        quantity: 1,
        image: '../images/img_5.jpg',
        nature: {
            features: ['automate', 'light'],
            location: ['amen'],
            bedroom: [ '5'],
            type: 'Duplex'
        }
    },

    {
        id: 6,
        name: 'Lekki',
        price: 40000000,
        bedroom:5,
        quantity: 3,
        image: '../images/img_6.jpg',
        nature: {
            features: ['swimming', 'light'],
            location: ['eko'],
            bedroom: ['6'],
            type: 'Duplex',
        }
    },
];
let productFilter = listProducts;
showProduct(productFilter);
function showProduct(productFilter){
    count.innerText = productFilter.length;
    list.innerHTML = '';
    productFilter.forEach(item => {
        let newItem = document.createElement('div');
        newItem.classList.add('item');


        // create image
        let newImage = new Image();
        newImage.src = item.image;
        newItem.appendChild(newImage);

        // create name product
        let newTitle = document.createElement('div');
        newTitle.classList.add('title')
        newTitle.innerText = item.name;
        newItem.appendChild(newTitle);

        // create price
        let newPrice = document.createElement('div');
        newPrice.classList.add('price');
        newPrice.innerText = item.price.toLocaleString() + ' d';
        newItem.appendChild(newPrice);


        list.appendChild(newItem);
    });
}

filter.addEventListener('submit', function(event){
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item => {
        // check location
        if(valueFilter.location.value !=''){
            if(item.nature.location != valueFilter.location.value){
                return false;
            }
        }

        // check features

        if(valueFilter.features.value != ''){
            if(!item.nature.features.includes(valueFilter.features.value)){
                return false;
            }
        }

        // check search

        if(valueFilter.name.value != ''){
            if(!item.name.includes(valueFilter.name.value)){
                return false;
            }
        }

        // check min price

        if(valueFilter.minPrice.value != ''){
            if(item.price > valueFilter.minPrice.value){
                return false;
            }
        }

        

        // check min price

        if(valueFilter.maxPrice.value != ''){
            if(item.price < valueFilter.maxPrice.value){
                return false;
            }
        }
        return true;
    })

    showProduct(productFilter);
})