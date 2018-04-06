//const BACKEND_URL = 'https://fbinstant-tictactoe-server.herokuapp.com';
    const BACKEND_URL = 'http://localhost:5000';
    const IMAGES = ['love', 'like']
    var preloaded = {};
    
    window.onload = function() {
      FBInstant.initializeAsync().then(function() {

        // Preload images
        IMAGES.forEach(function(imgName, index){
          var img = new Image();
          img.src = './img/' + imgName + '.png';
          preloaded[imgName] = img;
          FBInstant.setLoadingProgress(Math.ceil(index / IMAGES.length)*100);
        })

        // Finished loading. Start the game
        FBInstant.startGameAsync().then(function() {
          startGame();          
        });
      });
    };

    function selectContext() {
      FBInstant.context.chooseAsync()
        .then(function() {
            startGame();          
        })
    }

    function startGame() {
      var contextId = FBInstant.context.getID();
      var contextType = FBInstant.context.getType();

      var playerName = FBInstant.player.getName();
      var playerPic = FBInstant.player.getPhoto();
      var playerId = FBInstant.player.getID();
    /*
      if (FBInstant.context.getType() !== 'SOLO') {
        // clear scene
        var sceneRoot = document.getElementById('scene');
        while (sceneRoot.firstChild) {
          sceneRoot.removeChild(sceneRoot.firstChild);
        }
        // start game
        var game = new gameplayScene(FBInstant, new backendClient(BACKEND_URL), html2canvas);
        game.start();
      }*/
      var ids = document.getElementById('ids');
      ids.appendChild(contextId);
      ids.appendChild(contextType);
      ids.appendChild(playerId);
      ids.appendChild(playerName);
      game.start();
    }
  