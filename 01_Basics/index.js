"use strict";
//soovin näidata ainult name ja age, aga võetakse kogu objekti sisu
//kuna kasutatakse User type
function renderUserDetails(user) {
    console.log(user.name, user.age);
}
function renderUserDetails1(user) {
    console.log(user.name, user.age);
}
const user = {
    id: "ads",
    name: "Kyle",
    age: 123,
    address: {
        street: "sdf",
        city: "London"
    }
};
renderUserDetails(user);
renderUserDetails1({ name: "Nipitiri", age: 123 });
