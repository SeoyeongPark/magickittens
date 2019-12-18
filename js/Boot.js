var Boot = {
    init: function () {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.scale.refresh();
    },

    preload: function () {
        //load splashscreen and loader bar
        this.load.image('logo','assets/logo.png');
        this.load.image('loading1','assets/rect850.png');
        this.load.image('loading2', 'assets/dfdf.png');
        this.load.script('utils','js/utils.js');
    },

    create: function () {
        this.game.stage.backgroundColor = '#000000';
        this.state.start('Preload');
    }
};