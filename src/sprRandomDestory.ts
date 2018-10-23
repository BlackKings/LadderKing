/**
 * 精灵随机摧毁
 */
class sprRandomDestory {
    private LadderSpr: Laya.Sprite;
    private maxDestory: number;
    private obArr: Array<Laya.Sprite>;
    public takeSprArr: Array<Laya.Sprite>;
    /**
     * 
     * @param LadderSpr 阶梯精灵
     */
    constructor(LadderSpr: Laya.Sprite) {
        this.LadderSpr = LadderSpr;             //寄存传入的阶梯精灵
        this.obArr = this.LadderSpr._childs[1]._childs; //这是障碍的数组； [0]是图片， [1]是障碍, [2]是白圈；
        console.log(this.obArr);
    }
}