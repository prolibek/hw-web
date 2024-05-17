const products = [
    {
        id: 1,
        name: "Ruslanchik",
        desc: "Ruslan is a bit naughty, but if you try, he will do anything for you.",
        imgSrc: "image.png",
        price: "Free"
    },
    {
        id: 2,
        name: "Uranium",
        desc: "Uranium is a chemical element; it has symbol U and atomic number 92. It is a silvery-grey metal in the actinide series of the periodic table. A uranium atom has 92 protons and 92 electrons, of which 6 are valence electrons. Uranium radioactively decays, usually by emitting an alpha particle.",
        imgSrc: "https://media.kjzz.org/s3fs-public/styles/special_story_images_aspect_switcher/public/field/image/GettyImages-1323182197.jpg?itok=H_6MhMdA",
        price: "1mln$"
    },
    {
        id: 3,
        name: "Nikita",
        desc: "Nikita is a good boy that will do anything for you....",
        imgSrc: "https://sport.kg/uploads/posts/2014-12/1419173289_img_7584.jpg",
        price: "1$"
    }
]

const url = new URLSearchParams(window.location.search)
const name = url.get('id')
console.log(name)

if(name === null) {
    products.map((item) => {
        let div = document.createElement('div')
        div.className = "product-card"
        div.innerHTML = `<img src="${item.imgSrc}"/>
        <div class="title-n-price">
            <h2>${item.name}</h2>
            <div class="price">
                <span>${item.price}</span>
            </div>
        </div>
        <p>${item.desc}</p>
        <div class="golink">
            <a href="detail.html?id=${item.id}">Подробнее →</a>
        </div>`
        document.getElementsByClassName('product-list')[0].appendChild(div)
    })
}
else {
    const v = products.filter((item) => ( item.id === Number(name) ))
    console.log(v)
    const b = v[0]
    let div = document.createElement('div')
    div.className = 'product'
    div.innerHTML = `
    <img src="${b.imgSrc}"/>
    <div class="title-n-price">
        <h2>${b.name}</h2>
        <div class="price">
            <span>${b.price}</span>
        </div>
    </div>
    <p>${b.desc}</p>
    <button class="btn">
        Add to basket
    </button>`
    document.getElementsByClassName('bob')[0].appendChild(div)    
    document.getElementsByClassName('btn')[0].addEventListener('click', () => ( alert('Добавлено в корзину') ))
}