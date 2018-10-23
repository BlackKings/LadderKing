
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class testLadderUI extends View {
		public ladder_0:Laya.Sprite;
		public image_0:Laya.Image;
		public box_ob:Laya.Box;
		public sp_ob_0:Laya.Sprite;
		public sp_ob_1:Laya.Sprite;
		public ob_1:Laya.Image;
		public sp_ob_2:Laya.Sprite;
		public ob_2:Laya.Image;
		public sp_ob_3:Laya.Sprite;
		public ob_3:Laya.Image;
		public sp_ob_4:Laya.Sprite;
		public ob_4:Laya.Image;
		public box_ov:Laya.Box;
		public ov_0:Laya.Image;
		public ov_1:Laya.Image;
		public ov_2:Laya.Image;
		public ov_3:Laya.Image;
		public ov_4:Laya.Image;
		public ball_0:Laya.Sprite;
		public ball_1:Laya.Image;
		public text_1:Laya.TextArea;
		public text_2:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Sprite","props":{"y":900,"x":0,"var":"ladder_0","name":"sprite","alpha":1},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"var":"image_0","skin":"img/image_ldder.png","name":"ladder","height":150}},{"type":"Box","props":{"y":0,"x":0,"var":"box_ob"},"child":[{"type":"Sprite","props":{"y":0,"x":65,"var":"sp_ob_0"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":64.5,"skin":"img/image_obstacle.png","height":64.5}}]},{"type":"Sprite","props":{"y":0,"x":196,"var":"sp_ob_1"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":64.5,"var":"ob_1","skin":"img/image_obstacle.png","height":64.5}}]},{"type":"Sprite","props":{"y":0,"x":327,"var":"sp_ob_2"},"child":[{"type":"Image","props":{"width":64.5,"var":"ob_2","skin":"img/image_obstacle.png","height":64.5}}]},{"type":"Sprite","props":{"y":0,"x":458,"var":"sp_ob_3"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":64.5,"var":"ob_3","skin":"img/image_obstacle.png","height":64.5}}]},{"type":"Sprite","props":{"y":0,"x":589,"var":"sp_ob_4"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":64.5,"var":"ob_4","skin":"img/image_obstacle.png","height":64.5}}]}]},{"type":"Box","props":{"y":45,"x":0,"var":"box_ov"},"child":[{"type":"Image","props":{"x":64.5,"width":64.5,"visible":false,"var":"ov_0","skin":"img/image_oval_white.png","name":"voal","height":22.5,"alpha":1}},{"type":"Image","props":{"x":196,"width":64.5,"visible":false,"var":"ov_1","skin":"img/image_oval_white.png","name":"voal","height":22.5,"alpha":1}},{"type":"Image","props":{"x":327,"width":64.5,"visible":false,"var":"ov_2","skin":"img/image_oval_white.png","name":"voal","height":22.5,"alpha":1}},{"type":"Image","props":{"x":458,"width":64.5,"visible":false,"var":"ov_3","skin":"img/image_oval_white.png","name":"voal","height":22.5,"alpha":1}},{"type":"Image","props":{"x":589,"width":64.5,"visible":false,"var":"ov_4","skin":"img/image_oval_white.png","name":"voal","height":22.5,"alpha":1}}]}]},{"type":"Sprite","props":{"y":650,"x":0,"width":64.5,"var":"ball_0","height":64.5},"child":[{"type":"Image","props":{"y":0,"x":0,"width":64.5,"var":"ball_1","skin":"img/image_ball_red.png","name":"ball","height":64.5}}]},{"type":"TextArea","props":{"y":-2,"x":418,"width":302,"var":"text_1","text":"greenking","skin":"comp/textarea.png","height":68,"fontSize":35,"font":"Microsoft YaHei","color":"#ff620a","bold":true}},{"type":"Text","props":{"y":144,"x":223,"var":"text_2","text":"分数：0","fontSize":80,"font":"Microsoft YaHei","color":"#03f4ff","bold":true}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.testLadderUI.uiView);

        }

    }
}
