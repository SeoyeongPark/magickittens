var SelectLevel = {

    create: function(){
        this.background1=this.game.add.tileSprite(0,0,this.game.width,this.game.height,'levelpage')
        this.level1b=game.add.button(180,80,'buttonlevel1',this.level1l);
        this.level1b.anchor.set(0.5,0.5);

         this.level2b=game.add.button(180,180,'buttonlevel2',this.level2l);
         this.level2b.anchor.set(0.5,0.5);

        this.level3b=game.add.button(180,280,'buttonlevel3',this.level3l);
         this.level3b.anchor.set(0.5,0.5);

        this.level4b=game.add.button(180,380,'buttonlevel4',this.level4l);
         this.level4b.anchor.set(0.5,0.5);

         this.back=game.add.button(120,680,'backbutton',this.backf);
         this.back.anchor.set(0.5,0.5);
    },
    level1l: function(){
        
        this.game.state.start('level1');
            },

            level2l: function(){
                
                this.game.state.start('level2');
                    },

    backf: function(){
    this.game.state.start('MainMenu');
            },
};