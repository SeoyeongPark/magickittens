
var game=new Phaser.Game(1280,768,Phaser.AUTO, ' ');
game.state.add('Boot',Boot);
game.state.add('Preload',Preload);
game.state.add('MainMenu',MainMenu);
game.state.add('level1',level1);
game.state.add('level2',level2);
game.state.add('SelectLevel',SelectLevel);
game.state.add('controlz',controlz);
game.state.add('helpz',helpz);
//game.state.add('Level1',Level1);

this.startButton;
this.controlButton;
this.levelselectionButton;
this.helpButton;
this.level1Button;
this.level2Button;
this.level3Button;
this.level4Button;
this.backButton;
this.pauseButton;
this.level1;
this.level2;
this.layer1;
this.layer2;
this.layer3;
this.layer4;
this.annaLoaded=false;

game.state.start('Boot');

