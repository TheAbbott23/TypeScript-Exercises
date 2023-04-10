export interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
   {name: "Les Paul", price: 1900,},
   {name: "Ibanez", price: 1100,},
   {name: "Martin D", price: 2200,},
];

 function calcAverageProductPrice (arrayOfProducts: Product[]) {



    let sum = 0;


    for (let product of arrayOfProducts) {
    // console.log(product.price);
        sum = sum + product.price;

}

    return sum / arrayOfProducts.length;


};

// // alternate way
// function calcAverageProductPrice2(arrayOfProducts: Product[]) {
//     return arrayOfProducts
//     .map(prod => prod.price)
//     .reduce((sum, currentValue) => sum = sum + currentValue, 0) / arrayOfProducts.length
// };

calcAverageProductPrice(products)

