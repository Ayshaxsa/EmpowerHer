// // Q11

// const products = [
//     {name: "laptop", price: 90_000},
//     {name: "Mac", price: 150_000},
//     {name: "keyboard", price: 900},
//     {name: "mouse", price: 500},
// ]

// function processProducts(products){
//     const prod_names = products.map(products=>products.name)

//     products.foreach(product =>{
        
//     })
// }

function processProducts(products) {
  const productNames = products.map(product => product.name);

  products.forEach(product => {
    if (product.price > 50) {
      console.log(`${product.name} is above $50`);
    } else {
      console.log(`${product.name} is below $50`);
    }
  });

  return productNames; 
}

const items = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
];

processProducts(items);
