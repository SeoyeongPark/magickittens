 var layer4;
 var layer3;
 var layer2;
 var layer1;
 var level1={
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);                                        //start system
        cursors = game.input.keyboard.createCursorKeys();                                       //input cursors
        jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);                      //input space key
        escPause = game.input.keyboard.addKey(Phaser.Keyboard.ESC);   

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
        level1.addTilesetImage('rockleft');
        level1.addTilesetImage('tree');
        level1.addTilesetImage('flower1');
        level1.addTilesetImage('flower2');
        level1.addTilesetImage('flower3');
        
        
        layer1 = level1.createLayer('background');                                              //call tilemap layers and resize
        layer2 = level1.createLayer('ground');
        layer3 = level1.createLayer('rock');
        layer4 = level1.createLayer('deco');    
        layer1.resizeWorld();
        layer2.resizeWorld();
        layer3.resizeWorld();
        layer4.resizeWorld();

        anna = game.add.sprite(150, 600, 'anna');
        game.physics.arcade.enable(anna);
        anna.body.collideWorldBounds = true;
        level1.setCollisionBetween(1, 10000, true, layer3);

        blackcat = game.add.sprite(200, 400, 'blackcat');
        
        game.time.events.add(Phaser.Timer.SECOND * 2, this.createCat, this);
        
        bag =game.add.sprite(225,650,'bag');
        game.physics.arcade.enable(bag);
        yarn = game.add.sprite(400,300,'yarn')
        game.physics.arcade.enable(yarn);;
        ball=game.add.sprite(800,100,'ball');
        game.physics.arcade.enable(ball);
        cucumber = game.add.sprite(1000,450,'cucumber');
        game.physics.arcade.enable(cucumber);
        
        warmhole = game.add.sprite(300,300,'warmhole');
        warmhole.animations.add('warm',[0,1,2,3,4,5,6,7],40,true);
        warmhole.animations.play('warm');
        
        anna.animations.add('idle', [1],10, true);
        anna.animations.add('walkingDown',[0,1,2,3],10,true);
        anna.animations.add('walkingUp',[4,5,6,7],10,true);
        anna.animations.add('walkingLeft',[8,9,10,11,12,13,14,15],10,true);
        anna.animations.add('walkingRight',[16,17,18,19,20,21,22,23],10,true);
        anna.animations.play('idle');
        annaLoaded = true;
        pausebutton = game.add.text(game.world.centerX+500,20,'pause',{ font: '24px Arial', fill: '#fff' });
        pausebutton.inputEnabled = true;
        pausebutton.events.onInputUp.add(this.pause, this);
        
//        this.game.input.onDown.add(this.unpause,this);
        
        
        
        
        
    },
     
     createCat: function(){
         game.physics.arcade.enable(blackcat);
        blackcat.animations.add('walkingDown',[0,1,2,3],10,true);
        blackcat.animations.add('walkingUp',[4,5,6,7],10,true);
        blackcat.animations.add('walkingLeft',[8,9,10,11],10,true);
        blackcat.animations.add('walkingRight',[12,13,14,15],10,true);
         blackcat.body.collideWorldBounds = true;
        blackcat.animations.play('walkingRight');
        blackcat.body.velocity.x=200;
        blackcat.body.velocity.y=0;
        
     },
    
 pause: function(){
//        this.game.paused=true;
//     game.physics.arcade.isPaused=true;
        graphics = game.add.graphics(320,190);
        graphics.lineStyle(0);
        graphics.beginFill(0xFFFF0B, 0.5);
        graphics.drawRect(25, 0, 600, 500);
        graphics.endFill();
     
        continueButton = game.add.text(game.world.centerX-200, game.world.centerY-70, "Continue game", { font: "65px Arial", fill: "#ff0044", align: "center" });
        backtomain = game.add.text(game.world.centerX-200, game.world.centerY+20, "Back to main", { font: "65px Arial", fill: "#ff0044", align: "center" });
            continueButton.inputEnabled = true;
            continueButton.events.onInputDown.add(this.unpause, this);
        
            backtomain.inputEnabled=true;
            backtomain.events.onInputDown.add(this.backtoMain, this);
    
        
            },
     
     unpause: function(){
//         if(game.paused){
         graphics.destroy();
         continueButton.destroy();
         backtomain.destroy();
//         this.game.paused=false;
//         game.physics.arcade.isPaused=false;
             
//         }
     },
     
     backtoMain: function(){
       this.game.state.start('MainMenu');  
     },
     
   
    update:function (){
        game.physics.arcade.collide(anna, layer3); 
        game.physics.arcade.overlap(ball, anna,this.collectball,null,this);
        game.physics.arcade.collide(anna,cucumber);
        game.physics.arcade.collide(anna,yarn);
        if(annaLoaded==true){
           // console.log("anna")
                                                         //set collision between anna and rock
            if(cursors.left.isDown){
                anna.body.velocity.x=-200;  
                anna.body.velocity.y=0;                                                          //moving left
                anna.animations.play('walkingLeft');
            }
            else if(cursors.right.isDown){                                                          //moving right
                anna.body.velocity.x=200;
                anna.body.velocity.y=0;   
                anna.animations.play('walkingRight');
            }
            else if(cursors.up.isDown){                                                             //moving up
                anna.body.velocity.y=-200;
                anna.body.velocity.x=0;   
                anna.animations.play('walkingUp');
            }
            else if(cursors.down.isDown){                                                           //moving down
                anna.body.velocity.y=200;
                anna.body.velocity.x=0;   
                anna.animations.play('walkingDown');
            }
         else{
             anna.animations.play('idle');
             anna.body.velocity.y=0;
             anna.body.velocity.x=0;  
         }
        
        }
        
        
        //cat movement path
        if(blackcat.x>=550){
            blackcat.body.velocity.x=0;
            blackcat.body.velocity.y=-200;
            blackcat.animations.play('walkingUp');
            if(blackcat.y<=150){
                blackcat.body.velocity.x=200;
                blackcat.body.velocity.y=0;
                blackcat.animations.play('walkingRight');
                if(blackcat.x>=1150){
                    blackcat.body.velocity.x=0;
                    blackcat.body.velocity.y=0;
                    blackcat.animations.play('walkingDown');

                }
            }
        }


    },
     
collectball: function(){
    console.log("collide");
    ball.kill();
},

};