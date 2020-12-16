let cards = document.querySelector('.cards')

console.log(blogs)

let html = `
${blogs.books.map(element => 
    `
    <article class="flex-32 align-center article">
        <img src= ${element.image}  class="img" alt="">
        <h2>${element.title}</h2>
        <p class="text">${element.publisher}</p>
        <a href="#" class="btn">Buy Now</a>
    </article>
    `
).join("")}

`
cards.innerHTML = html
console.log(html);