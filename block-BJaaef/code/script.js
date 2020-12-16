let container = document.querySelector('.container');
console.log(got)

let cards = got.houses.map(element => 
    element.people.map(elem => `
    <article class="article flex-31">
    <div class="flex align-center">
      <img src=${elem.image} alt="">
      <h3>${elem.name}</h3>
    </div>
    <p class="text">${elem.description}</p>
    <div class="width-100">
      <a href="#" class="btn width-100">Learn More!</a>
    </div>
  </article>
    
    `).join("")
).join(""); 

container.innerHTML = cards;