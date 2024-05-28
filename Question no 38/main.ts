function describe_city(city:string, country = "Pakistan"):void {
   console.log(`${city} is in ${country}.`); 
}

describe_city("Karachi");
describe_city("lahore");
describe_city("America", "New_york");