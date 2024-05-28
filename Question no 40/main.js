function make_album(artist, tittle, tracks) {
    var album = {
        artist: artist,
        tittle: tittle,
        tracks: tracks
    };
    if (tracks) {
        var album_1, tracks_1 = tracks_1;
    }
    return album;
}
;
// create three albums,one with the optional track count
var album1 = make_album("The Beatless", "Abbey Road");
var album2 = make_album("Queen", "A Night at the Opera");
var album3 = make_album("Nirvana", "Never mind", 12);
console.log(album1);
console.log(album2);
console.log(album3);
