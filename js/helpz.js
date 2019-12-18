var helpz ={
    
        create: function(){
    
            this.background3=this.game.add.tileSprite(0,0,this.game.width,this.game.height,'helppage');
            this.back=game.add.button(120,680,'backbutton',this.backf);
            this.back.anchor.set(0.5,0.5);
    
        },
        backf: function(){
            this.game.state.start('MainMenu');
                    },
    };