type car = {
   manufacture : string
   model : string
   [key: string]: any
}
function createCar(manufacture:string, model:string, optional:Record<string, any>):car {
    return {
        manufacture: manufacture,
        model: model,
        optional: optional,
    }
}
const myCar: car = createCar("Honda", "Civic",{color:"Black", year:"2024"});
console.log(myCar);