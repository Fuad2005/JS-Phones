const products = [
    {
        title: 'Iphone 13 Pro Max',
        price: '994$',
        imageSRC: 'https://media.4rgos.it/s/Argos/9520055_R_SET?$Main768$&w=620&h=620'
    },
    {
        title: 'Samsung Galaxy S21 Ultra',
        price: '1900AZN',
        imageSRC: 'https://www.mytrendyphone.eu/images/Samsung-Galaxy-S21-Ultra-5G-128GB-Phantom-Black-8806090887505-15012021-01-p.jpg'
    },
    {
        title: 'Samsung Galaxy S21 Ultra',
        price: '1900AZN',
        imageSRC: 'https://www.mytrendyphone.eu/images/Samsung-Galaxy-S21-Ultra-5G-128GB-Phantom-Black-8806090887505-15012021-01-p.jpg'
    },
    {
        title: 'Samsung Galaxy S21 Ultra',
        price: '1900AZN',
        imageSRC: 'https://www.mytrendyphone.eu/images/Samsung-Galaxy-S21-Ultra-5G-128GB-Phantom-Black-8806090887505-15012021-01-p.jpg'
    },
    {
        title: 'Samsung Galaxy S21 Ultra',
        price: '1900AZN',
        imageSRC: 'https://www.mytrendyphone.eu/images/Samsung-Galaxy-S21-Ultra-5G-128GB-Phantom-Black-8806090887505-15012021-01-p.jpg'
    },
    {
        title: 'Samsung Galaxy S21 Ultra',
        price: '1900AZN',
        imageSRC: 'https://www.mytrendyphone.eu/images/Samsung-Galaxy-S21-Ultra-5G-128GB-Phantom-Black-8806090887505-15012021-01-p.jpg'
    },
    {
        title: 'Samsung Galaxy S21 Ultra',
        price: '1900AZN',
        imageSRC: 'https://www.mytrendyphone.eu/images/Samsung-Galaxy-S21-Ultra-5G-128GB-Phantom-Black-8806090887505-15012021-01-p.jpg'
    },
    {
        title: 'Samsung Galaxy S21 Ultra',
        price: '1900AZN',
        imageSRC: 'https://www.mytrendyphone.eu/images/Samsung-Galaxy-S21-Ultra-5G-128GB-Phantom-Black-8806090887505-15012021-01-p.jpg'
    },
    {
        title: 'Xiamoi Redmi MI 11',
        price: '3000TL',
        imageSRC: 'https://irshad.az/resized/fit540x550/center/products/71738/note11-grey-0.jpg'
    }
]

const container = document.querySelector('.product-container')

// function createProduct(productOption) {
//     const productCard = document.createElement('div')
//     productCard.className = 'product-card'
//     const imageDiv = document.createElement('div');
//     const image = document.createElement('img')
//     imageDiv.classList.add('image-div')
//     image.setAttribute('src', productOption.imageSRC)
//     productCard.append(imageDiv)
//     imageDiv.appendChild(image)
//     const productInfo = document.createElement('div')
//     const title = document.createElement('div')
//     title.textContent = productOption.title
//     const price = document.createElement('price')
//     price.innerText = productOption.price
//     productInfo.className = 'product-info'
//     title.classList.add('title')
//     price.className = 'price'
//     productCard.append(productInfo)
//     productInfo.append(title, price)
//     return productCard
// }

// products.forEach(productOption => {
//     const productElement = createProduct(productOption)
//     container.append(productElement)
// })

products.forEach(productOption => {
    const productCard = document.createElement('div')
    productCard.className = 'product-card'
    productCard.innerHTML = `
    <div class="image-div">
        <img src="${productOption.imageSRC}" alt="">
    </div>
    <div class="product-info">
        <div class="title">${productOption.title.toUpperCase()}</div>
        <div class="price">${productOption.price}</div>
    </div>
    `
    container.appendChild(productCard)
})


console.log(container)