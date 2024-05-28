function createCar(manufacture, model, optional) {
    return {
        manufacture: manufacture,
        model: model,
        optional: optional,
    };
}
var myCar = createCar("Honda", "Civic", { color: "Black", year: "2024" });
console.log(myCar);
