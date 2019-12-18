var MainMenu=
{

    preload: function(){

    },
    create: function(){
        this.background=this.game.add.tileSprite(0,0,this.game.width,this.game.height,'startpage')
         //this.background.autoScroll(-20, 0);
        this.start=game.add.button(180,80,'buttonstart',this.level1);
        this.start.anchor.set(0.5,0.5);

       // this.background=this.game.add.tileSprite(0,0,this.game.width,this.game.height,'startpage')
        this.selectlevel=game.add.button(180,180,'buttonlevelselction',this.levelselect);
        this.selectlevel.anchor.set(0.5,0.5);

        this.controls=game.add.button(180,280,'buttoncontrol',this.control);
        this.controls.anchor.set(0.5,0.5);

        this.help=game.add.button(180,380,'buttonhelp',this.helps);
        this.help.anchor.set(0.5,0.5);
        this.mainsong=game.add.sound('mainmusic');
        this.mainsong.play();
        
    },
    level1: function(){

this.game.state.start('level1');
    },
    levelselect: function(){
  
        this.game.state.start('SelectLevel');
    },
   helps: function(){
        
         this.game.state.start('helpz');
     },
     control: function(){
      
         this.game.state.start('controlz');
     },
};