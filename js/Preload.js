var Preload = {
    preload: function(){


        game.world.setBounds(0, 0, 1280, 768);
        this.splashlogo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        this.splashlogo.anchor.set(0.5,0.5);

        this.preloadBar1 = this.add.sprite(this.game.world.centerX, this.game.world.centerY +250, 'loading1');
        this.preloadBar1.anchor.set(0.5,0.5);
       

        this.preloadBar2 = this.add.sprite(this.game.world.centerX, this.game.world.centerY +250, 'loading2');
        this.preloadBar2.anchor.set(0.5,0.5);
      this.status= this.add.text(this.game.world.centerX-50, this.game.world.centerY +250+20, 'Loading...', {fill: 'white'});
       this.load.setPreloadSprite(this.preloadBar2);

       this.load.spritesheet('anna','assets/sprite.png',64,96);
       this.load.spritesheet('blackcat', 'assets/catblack.png',40,43);
       this.load.spritesheet('warmhole','assets/wormhole.png',50,50);
       this.load.spritesheet('whitecat', 'assets/catwhite.png',40,43);
//        this.load.spritesheet('yellowcat', 'assets/catyellow .png',40,43);
       this.load.spritesheet('bag','assets/grocerybag.png',50,50)
       this.load.spritesheet('yarn','assets/yarn.png',50,49);
       this.load.spritesheet('ball','assets/ball.png',50,50);
        this.load.spritesheet('cucumber','assets/cucmber.png',50,45);
       this.load.tilemap('level1', 'assets/newlevel1.json', null, Phaser.Tilemap.TILED_JSON);
       this.load.tilemap('level2', 'assets/newlevel2.json', null, Phaser.Tilemap.TILED_JSON);
       
       this.load.image('1', 'assets/tile/smalltile/1.png');
       this.load.image('2', 'assets/tile/smalltile/2.png');
       this.load.image('3','assets/tile/smalltile/3.png');
       this.load.image('4','assets/tile/smalltile/4.png');
       this.load.image('grass','assets/tile/smalltile/grass.png');
       this.load.image('ground','assets/tile/smalltile/ground.png');
       this.load.image('rockhorizontal','assets/tile/smalltile/rockhorizontal.png');
       this.load.image('rockright','assets/tile/smalltile/rockright.png');
       this.load.image('rocktop','assets/tile/smalltile/rocktop.png');
       this.load.image('rockleft','assets/tile/smalltile/rockleft.png');
      
       this.load.image('tree','assets/tile/smalltile/tree.png');
       this.load.image('flower1','assets/tile/flower4.png');
       this.load.image('flower2','assets/tile/flower5.png');     
       this.load.image('flower3','assets/tile/flower6.png');  
       this.load.image('startpage','assets/startpage1.png');
       this.load.image('loadingpage','assets/loadingpage.png');
       this.load.image('helppage','assets/helppage.png');
       this.load.image('controlpage','assets/controlpage.png');
       this.load.image('levelpage','assets/levelpage.png');
       this.load.image('levelpage','assets/warmhole.png');
       
       this.load.image('backbutton','assets/backbutton.png');
       this.load.image('buttoncontrol','assets/controls.png');
       this.load.image('buttonhelp','assets/help.png'   );
       this.load.image('buttonlevel1','assets/level1.png');
       this.load.image('buttonlevel2','assets/level2.png');
       this.load.image('buttonlevel3','assets/level3.png');
       this.load.image('buttonlevel4','assets/level4.png');
       this.load.image('buttonlevelselction','assets/level.png');
       this.load.image('buttonstart','assets/start.png');
       this.load.image('buttonback','assets/backbutton.png');
       this.load.audio('mainmusic',['assets/music/mainmusic2.ogg']);
       
     //  utils.centerGameObjects([this.logo, this.status]);
    },
 create: function () {
    this.status.setText('Ready!');
        this.game.time.events.add(Phaser.Timer.SECOND * 0.5, this.start,this);    
    },

    start:function()
    {
        
        this.game.state.start('MainMenu');
    }
}