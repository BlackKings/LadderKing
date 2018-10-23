var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var testLadderUI = (function (_super) {
        __extends(testLadderUI, _super);
        function testLadderUI() {
            return _super.call(this) || this;
        }
        testLadderUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.testLadderUI.uiView);
        };
        return testLadderUI;
    }(View));
    testLadderUI.uiView = { "type": "View", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Sprite", "props": { "y": 900, "x": 0, "var": "ladder_0", "name": "sprite", "alpha": 1 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 720, "var": "image_0", "skin": "img/image_ldder.png", "name": "ladder", "height": 150 } }, { "type": "Box", "props": { "y": 0, "x": 0, "var": "box_ob" }, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 65, "var": "sp_ob_0" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 64.5, "skin": "img/image_obstacle.png", "height": 64.5 } }] }, { "type": "Sprite", "props": { "y": 0, "x": 196, "var": "sp_ob_1" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 64.5, "var": "ob_1", "skin": "img/image_obstacle.png", "height": 64.5 } }] }, { "type": "Sprite", "props": { "y": 0, "x": 327, "var": "sp_ob_2" }, "child": [{ "type": "Image", "props": { "width": 64.5, "var": "ob_2", "skin": "img/image_obstacle.png", "height": 64.5 } }] }, { "type": "Sprite", "props": { "y": 0, "x": 458, "var": "sp_ob_3" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 64.5, "var": "ob_3", "skin": "img/image_obstacle.png", "height": 64.5 } }] }, { "type": "Sprite", "props": { "y": 0, "x": 589, "var": "sp_ob_4" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 64.5, "var": "ob_4", "skin": "img/image_obstacle.png", "height": 64.5 } }] }] }, { "type": "Box", "props": { "y": 45, "x": 0, "var": "box_ov" }, "child": [{ "type": "Image", "props": { "x": 64.5, "width": 64.5, "visible": false, "var": "ov_0", "skin": "img/image_oval_white.png", "name": "voal", "height": 22.5, "alpha": 1 } }, { "type": "Image", "props": { "x": 196, "width": 64.5, "visible": false, "var": "ov_1", "skin": "img/image_oval_white.png", "name": "voal", "height": 22.5, "alpha": 1 } }, { "type": "Image", "props": { "x": 327, "width": 64.5, "visible": false, "var": "ov_2", "skin": "img/image_oval_white.png", "name": "voal", "height": 22.5, "alpha": 1 } }, { "type": "Image", "props": { "x": 458, "width": 64.5, "visible": false, "var": "ov_3", "skin": "img/image_oval_white.png", "name": "voal", "height": 22.5, "alpha": 1 } }, { "type": "Image", "props": { "x": 589, "width": 64.5, "visible": false, "var": "ov_4", "skin": "img/image_oval_white.png", "name": "voal", "height": 22.5, "alpha": 1 } }] }] }, { "type": "Sprite", "props": { "y": 650, "x": 0, "width": 64.5, "var": "ball_0", "height": 64.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 64.5, "var": "ball_1", "skin": "img/image_ball_red.png", "name": "ball", "height": 64.5 } }] }, { "type": "TextArea", "props": { "y": -2, "x": 418, "width": 302, "var": "text_1", "text": "greenking", "skin": "comp/textarea.png", "height": 68, "fontSize": 35, "font": "Microsoft YaHei", "color": "#ff620a", "bold": true } }, { "type": "Text", "props": { "y": 144, "x": 223, "var": "text_2", "text": "分数：0", "fontSize": 80, "font": "Microsoft YaHei", "color": "#03f4ff", "bold": true } }] };
    ui.testLadderUI = testLadderUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map