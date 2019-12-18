//var game = new Phaser.Game(3200,3200, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    //loading all images
    
}

var startButton;
var controlButton;
var levelselectionButton;
var helpButton;
var level1Button;
var level2Button;
var level3Button;
var level4Button;
var backButton;
var pauseButton;
var level1;
var level2;
var layer1;
var layer2;
var layer3;
var layer4;
var annaLoaded=false;
function create(){
    game.physics.startSystem(Phaser.Physics.ARCADE);                                        //start system
    cursors = game.input.keyboard.createCursorKeys();                                       //input cursors
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);                      //input space key
    escPause = game.input.keyboard.addKey(Phaser.Keyboard.ESC);                             //input esc key
    loadStartpage();
    
}

function loadStartpage(){
    var backgroundImage = game.add.image(0,0,'startpage');                                  //load start page
    startButton = game.add.button(400, 1500,'buttonstart',startLevel1);                     //click startbutton -> start level1
    startButton.scale.setTo(3, 3);
    
    levelselectionButton = game.add.button(400,1750,'buttonlevelselction',levelpage);       //click selection button -> levelselect page
    levelselectionButton.scale.setTo(3,3);
    
    controlButton = game.add.button(400,2000,'buttoncontrol',controlpage);                  //click control button -> control page
    controlButton.scale.setTo(3,3);
    
    helpButton = game.add.button(400,2250,'buttonhelp',helppage);                           //click help button -> help page
    helpButton.scale.setTo(3,3);
    
    annaLoaded = false;
}

function startLevel1(){
    level1 = game.add.tilemap('level1');                                                    //load level1 tilemap and tileset images
    level1.addTilesetImage('1');
    level1.addTilesetImage('2');
    level1.addTilesetImage('3');
    level1.addTilesetImage('4');
    level1.addTilesetImage('grass');
    level1.addTilesetImage('ground');
    level1.addTilesetImage('rockhorizontal');
    level1.addTilesetImage('rockright');
    level1.addTilesetImage('rocktop');
    //level1.addTilesetImage('rockvertical');
    level1.addTilesetImage('tree');
    
    
    layer1 = level1.createLayer('background');                                              //call tilemap layers and resize
    layer2 = level1.createLayer('map');
    layer3 = level1.createLayer('rock');
    layer4 = level1.createLayer('deco');    
    layer1.resizeWorld();
    layer2.resizeWorld();
    layer3.resizeWorld();
    layer4.resizeWorld();
    
    level1.setCollisionBetween(1,10000,true,layer3);                                        //set collision between player and rock
    initAnna();                                                                             //load main character
    
//    pauseButton = game.add.text(3000, 30, 'Pause', { font: '45px Arial', fill: '#fff' });   //add pauseButton onclick=pause
//    pauseButton.inputEnabled = true;
//    pauseButton.events.onInputUp.add(pause);
    
    
    
}

function startLevel2(){
    level2 = game.add.tilemap('level2');                                                    //load level2 tilemap and tileset images
    level2.addTilesetImage('1');
    level2.addTilesetImage('2');
    level2.addTilesetImage('3');
    level2.addTilesetImage('4');
    level2.addTilesetImage('grass');
    level2.addTilesetImage('ground');
    level2.addTilesetImage('rockhorizontal');
    level2.addTilesetImage('rockright');
    level2.addTilesetImage('rocktop');
    level2.addTilesetImage('rockvertical');
    level2.addTilesetImage('tree');
    
    
    layer1 = level2.createLayer('background');                                              //call tilemap layers and resize
    layer2 = level2.createLayer('map');
    layer3 = level2.createLayer('rock');
    layer4 = level2.createLayer('deco');    
    layer1.resizeWorld();
    layer2.resizeWorld();
    layer3.resizeWorld();
    layer4.resizeWorld();
    
    level2.setCollisionBetween(1,10000,true,layer3);                                        //set collision between player and rock
    initAnna();                                                                             //load main character
    
//    pauseButton = game.add.text(3000, 30, 'Pause', { font: '45px Arial', fill: '#fff' });   //add pauseButton onclick=pause
//    pauseButton.inputEnabled = true;
//    pauseButton.events.onInputUp.add(pause);
    
    
}

function pause(){
    game.paused=true;
}

function levelpage(){
    var levelpageImage = game.add.image(0,0,'levelpage');                                   //load level selection page
    level1Button = game.add.button(400,400,'buttonlevel1', startLevel1);                    //add level buttons and scale
    level1Button.scale.setTo(3,3);
    level2Button = game.add.button(2000,400,'buttonlevel2', startLevel2);
    level2Button.scale.setTo(3,3);
    level3Button = game.add.button(400,1000,'buttonlevel3');
    level3Button.scale.setTo(3,3);
    level4Button = game.add.button(2000,1000,'buttonlevel4');
    level4Button.scale.setTo(3,3);
    
    backButton = game.add.button(2550, 50,'buttonback',loadStartpage);                      //back to main
    backButton.scale.setTo(2,2);
    annaLoaded = false;
}

function controlpage(){
    var controlpageImage = game.add.image(0,0,'controlpage');                               //load control page
    backButton = game.add.button(2550, 50,'buttonback',loadStartpage);                      //back to main
    backButton.scale.setTo(2,2);
    annaLoaded = false;
}

function helppage(){
    var helppageImage = game.add.image(0,0,'helppage');                                     //load help page
    backButton = game.add.button(2550, 50,'buttonback',loadStartpage);                      //back to main
    backButton.scale.setTo(2,2);
    annaLoaded = false;
}


function initAnna(){                                                                        //main player anna
    anna = game.add.sprite(150, 600, 'anna');
    game.physics.arcade.enable(anna);
    anna.body.collideWorldBounds = true;
    
    anna.animations.add('idle', [1,2],10, true);
    anna.animations.add('walkingDown',[0,1,2,3],10,true);
    anna.animations.add('walkingUp',[4,5,6,7],10,true);
    anna.animations.add('walkingLeft',[8,9,10,11,12,13,14,15],10,true);
    anna.animations.add('walkingRight',[16,17,18,19,20,21,22,23],10,true);
    anna.animations.play('idle');
    annaLoaded = true;
    
}
function update(){
    if(annaLoaded==true){
        game.physics.arcade.collide(anna, layer3);                                              //set collision between anna and rock
        if(cursors.left.isDown){
            anna.body.velocity.x=-200;                                                          //moving left
            anna.animations.play('walkingLeft');
        }
        else if(cursors.right.isDown){                                                          //moving right
            anna.body.velocity.x=200;
            anna.animations.play('walkingRight');
        }
        else if(cursors.up.isDown){                                                             //moving up
            anna.body.velocity.y=-200;
            anna.animations.play('walkingUp');
        }
        else if(cursors.down.isDown){                                                           //moving down
            anna.body.velocity.y=200;
            anna.animations.play('walkingDown');
        }
        
    
    }
}