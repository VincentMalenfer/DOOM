var konami = false;

if ( window.addEventListener ) {
  if (!konami) {
    // séquence d'input du KONAMI code
    var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
      window.addEventListener("keydown", function(e){
        kkeys.push( e.keyCode );
        if ( kkeys.toString().indexOf( konami ) >= 0 ) {
          // message d'alert à l'utilisateur
          alert('Congratulation ! You find our KONAMI CODE !');
          konami = true;
        var vid = document.getElementById("myaudio");
        vid.play();
      }
    }, true);
  }
}
