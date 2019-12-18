var controlz ={

    create: function(){

        this.background2=this.game.add.tileSprite(0,0,this.game.width,this.game.height,'controlpage');
        this.back=game.add.button(1100,680,'backbutton',this.backf);
        this.back.anchor.set(0.5,0.5);

    },
    backf: function(){
        this.game.state.start('MainMenu');
                },
};