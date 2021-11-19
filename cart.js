///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/



// const cart = [
//     {
//         name: 'pizza', 
//         price: 9.99
//     }, 
//     {
//         name: 'pasta', 
//         price: 8.99
//     }, 
//     {
//         name: 'salad', 
//         price: 7.99
//     }
// ]


// const summedPrice = cart.reduce(((acc, current) => acc += current.price),0)
// console.log(summedPrice);

// const summedPrice = cart.map(items => item = items.price).reduce((acc, current) => acc += current)
// console.log(summedPrice);



//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/



// const calcFinalPrice = (cartTotal, couponValue, tax) => {
//     return cartTotal * (1+tax) - couponValue
// }

// console.log(calcFinalPrice(50, 10, .05))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    Customer object model:
    The customers information: Name, Last Name, An Address Object: Street, City, State, Zip, Phone Number --- These would all be strings besides the address property which would have strings and one number for the zip. The reason for that is because we would not be doing any mathematical calculations with these.

    The customers previous order: This would be useful to keep track of for future orders to reference. This property would contain an array which would contain an object of the customers previous order. That object itself could contain to following: Order Date, Order Price, Main Entree, Appetizer, Drinks, Payment Method

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
  name: "John",
  lastName: "Smith",
  address: {
    street: "3542 Hungry Avenue",
    city: "Restaurant Town",
    state: "CA",
    zip: 09372,
  },
  phone: "687-348-9753",
  previousOrder: {
    orderDate: 09 - 12 - 2021,
    orderPrice: 32.42,
    mainEntree: "Fettucine Alfredo",
    appetizer: "Calamari",
    drink: "Coke",
    paymentMethod: "Visa",
  },
};
