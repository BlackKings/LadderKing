class moveBallDemo {
    private ladderUI;
    private ball_0;
    private ladder_0;
    private mouse_x;
    private mouse_y;
    private dowmY = 300 / 60 * 1.5;
    private dowmN = 300 / 120;
    private testX: number;  //鼠标按下的x坐标
    private findCollision;
    private fraction = 0;
    private sprDestory: sprRandomDestory;
    constructor() {
        Laya.init(720, 1280, Laya.WebGL);
        Laya.stage.scaleMode = Laya.Stage.SCALE_NOBORDER;
        Laya.stage.bgColor = "#218868";
        Laya.Stat.show(0, 0);
        Laya.loader.load("res/atlas/img.atlas", Laya.Handler.create(this, this.onLoader));
    }
    /**
     * 加载完成后的回调
     */
    private onLoader():void {
        this.ladderUI = new testLadder();
        this.ball_0 = this.ladderUI.ball_0;
        this.ladder_0 = this.ladderUI.ladder_0;
        
        console.log(this.ladder_0);
        this.sprDestory = new sprRandomDestory(this.ladder_0);
        Laya.stage.addChild(this.ladderUI);
        this.findCollision = new spriteCollision(this.ladder_0, this.ball_0);
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
        Laya.timer.frameLoop(0.5, this, this.ballDowm);
    }

    /**
     * 监听鼠标点击后的动作
     */
    private mouseDowm():void {
        console.log("开始监听移动")
        this.testX = Laya.stage.mouseX;
        this.ladderUI.text_1.text = "mouseDowm";
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);

    }

    /**
     * 监听鼠标放开
     */
    private mouseUp():void {
        this.ladderUI.text_1.text = "mouseUp"
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
    }

    /**
     * 监听鼠标移动
     */
    private mouseMove():void {
        let x = Laya.stage.mouseX;
        if (x < this.testX) {
            this.ball_0.x += (x - this.testX);
            this.testX = x;
            this.ladderUI.text_1.text = "mouseLeft";
        } else if (x > this.testX) {
            this.ball_0.x += (x - this.testX);
            this.testX = x;
            this.ladderUI.text_1.text = "mouseRight";
        }
    }

    /**
     * 球开始下落
     */
    private ballDowm():void {
        let ballY = this.ball_0.y;
        if (ballY > 900) {
            if (this.dowmY > 0) {
                this.dowmY *= -1;
            }
            console.log("弹上去");
            this.fraction += 1;
            this.ladderUI.text_2.text = "分数：" + this.fraction;
        } else if (ballY < 650) {
            if (this.dowmY < 0) {
                this.dowmY *= -1;
            }
            console.log("往下落");
        }
        this.ball_0.y += this.dowmY;
        // 检测碰撞
        this.findCollision.sprCenterPoint(this.ball_0);
        if (this.findCollision.resultCollision == true) {
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);    //鼠标滑动下所有的侦听  让球不能左右滑动
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.mouseDowm);    //鼠标按下所有的侦听  让球不能左右滑动
            Laya.timer.clear(this, this.ballDowm);
            console.log("撞上了哦");
        }
    }

}


new moveBallDemo();