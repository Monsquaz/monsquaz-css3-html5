(function(){
  var audio = new Audio("audio/masteraxe.wav");
    var monsquaz = document.getElementById('monsquaz-swf');
    var num_children = monsquaz.children.length;
    var restart = function() {
      var i;
      monsquaz.classList.remove('active');
      for(i = 0; i < num_children; i++) {
        void monsquaz.children[i].offsetWidth;
      }
      monsquaz.classList.add('active');
      audio.currentTime = 0;
      audio.play();
    };
    document.addEventListener("visibilitychange", function(e){
      if(audio.paused) {
        restart();
      } else {
        audio.pause();
      }
    });
    audio.addEventListener('timeupdate', function(e){
        if((this.currentTime / this.duration) > 0.83) {
          restart();
        }
      }, false);
    audio.addEventListener('canplaythrough', function(e){
      monsquaz.classList.add('active');
      audio.play();
    }, false);
})()
