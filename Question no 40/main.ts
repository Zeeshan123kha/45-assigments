function make_album(artist:string, tittle:string, tracks?: number):object {
let album:object ={
    artist:artist,
    tittle:tittle,
    tracks:tracks
}   
if (tracks){
    let album.tracks = tracks;
} 
return album;
};

// create three albums,one with the optional track count
let album1 = make_album("The Beatless", "Abbey Road");
let album2 = make_album("Queen", "A Night at the Opera");
let album3 = make_album("Nirvana", "Never mind", 12);

console.log(album1);
console.log(album2);
console.log(album3);

