// const iceCream = [{name: 'Cookie Dough', image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg', price: 1}, {name: 'Vanilla', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg', price: 1}, {name: 'Strawberry', image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg', price: 2}]


// const vessels = [{name: 'Waffle Cone', image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg', price: 2}, {name: 'Waffle Bowl', image: 'http://images.wbmason.com/350/L_JOY66050.jpg', price: 4}]

// const toppings = [{name: 'Sprinkles', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg', price: 1}, {name: 'Choclate Chips', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360', price: 2}]

const davysDic = {vessels: [{name: "The Black Pearl", image: "./assets/krusty_ship.webp", price: 100}, {name: "U.S.S Indianapolis", image: "./assets/krusty_ship.webp", price: 150}, {name: "Queen Annes Revenge", image: "./assets/krusty_ship.webp", price: 100}], 
                  crews: [{name: "Nuclear Ghosts", image: "./assets/Morgan_Moonscar_reanimated.webp", price: 50}, {name: "Zombie Pirates", image: "./assets/Morgan_Moonscar_reanimated.webp", price: 50}, {name: "Crab People", image: "./assets/Morgan_Moonscar_reanimated.webp", price: 50}], 
                  beasts: [{name: "Kraken", image: "./assets/seagull.webp", price: 75}, {name: "Really Big Fish", image: "./assets/seagull.webp", price: 75}, {name: "Seagull", image: "./assets/seagull.webp", price: 75}]
                }

// When you select an ice cream or a vessel utilize the find method to add it to the cart array.productType
// Everytime you add something to your cart the total should be updated, you can render this to the screen similar to what a receipt would look like.
let total = 0
let cartContents = ''

function drawProduct(productType){
  let template = ""
  newArray = productType
  console.log(newArray)
  productType.forEach((product, i) => {
    // let stringedProduct = JSON.stringify(product);
    template += /*html*/ `
      <div class="col-md-4">
        <div class="bg-light rounded rounded shadow selectable">
          <img src="${product.image}" alt="ship-image">
          <div class="d-flex align-items-center justify-content-between">
            <h6 class="p-2 m-0">${product.name}</h6>
            <h6 class="ms-auto p-2 m-0"><span>${product.price}</span> Souls</h6>
            <div>
              <button class="btn btn-warning m-2" onclick='addCart("${product.name}")'>Recruit</button>
            </div>
          </div>
        </div>
      </div>`;
    console.log(product)
    i++
  });
  
  if (productType === davysDic.vessels){
    let vesselsElem = document.getElementById('vessels')
    vesselsElem.innerHTML = template
    console.log('ship success')
  }
  if (productType === davysDic.crews){
    let vesselsElem = document.getElementById('crews')
    vesselsElem.innerHTML = template
    console.log('crew success')
  }
  if (productType === davysDic.beasts){
    let vesselsElem = document.getElementById('beasts')
    vesselsElem.innerHTML = template
    console.log('beast success')
  }
  // else{
  //   throw new Error ('Could not match product type', )
  // }
}

function finder(productName){
  let found = {}
  for (let key in davysDic){
    let value = davysDic[key]
    found = value.find(product => productName === product.name)
    if (found){
      return found
      // console.log('success', typeof(found), productName, found)
    }
    // else{
    //   throw new Error("Product not found", productName)
    // }
  }
  
}


function addCart(productName){
  console.log(productName)
  let found = finder(productName)
  console.log(found)
  total += found.price
  cartContents += /*html*/`
    <div class="row p-1">
      <div class="col d-flex align-items-center">
        <p>${found.name}</p>
        <i class="mdi mdi-sword-cross ms-auto selectable" onclick='removeItem(${productName})'></i>
      </div>
    </div>`
  cartElem = document.getElementById("cart")
  cartElem.innerHTML = cartContents
  let totalElem = document.getElementById('total')
  totalElem.innerText = total
}

function removeItem(productInCart){
  let found = finder(productInCart)
  console.log(found)

}