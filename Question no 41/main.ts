function show_magicians(magicians:string[]):void {
     for (const magician of magicians){
        console.log(magician + "  " + "The Great");
     }    
};

const magicianName: string[] = ["Pen jillette", "Cries Angel", "Teller"];
show_magicians(magicianName);