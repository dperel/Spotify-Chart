      //make ajax request to GET URL

  function getArtistID() {
     var artistName = $('#artist_name').val();
      var artistURL = "https://api.spotify.com/v1/search?q=" + artistName + "&type=artist";
    $.ajax({
        url: artistURL,
      })
      .done(function( artistData ) {
       if (artistData.artists.items[0]) {
        console.log(artistData)
          getTopTracks(artistData)
    }else{ 
          $('#results').html("No artist found")
        }
      }
      )};

  function getTopTracks(artistData) {
    var artistID = artistData.artists.items[0].id
    var tracksURL = "https://api.spotify.com/v1/artists/" + artistID + "/top-tracks?country=US"
    $.ajax({
        url: tracksURL,
      })
      .done(function( trackData ) {
        var musicData = [];
        for (i = 0; i < 10; i++) { 
          // store popularity and artist in a hash table:
          helperArr = [trackData.tracks[i].name, trackData.tracks[i].popularity]
          musicData.push(helperArr)
        }
        $('#results').html(artistData.artists.items[0].name)
        makeGraphAlso(musicData);
    })}

$('#search-button').click(function(){
  getArtistID()
});

