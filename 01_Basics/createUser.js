"use strict";
const user = {
    id: "ads",
    name: "Kyle",
    age: 123,
    address: {
        street: "sdf",
        city: "London"
    }
};
//omit kasutamine tähendab property eemaldamist User typest
function createUser(user) {
    console.log(user.name, user.age);
}
createUser({ name: "Ironman", age: 567, address: { street: "asd", city: "asdcity" } });
