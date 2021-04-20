/* 적군을 정의한다 */
class Enemy{

    constructor(container, src, width, height, x, y, velX, velY){
        this.container=container;
        this.img=document.createElement("img");
        this.src=src;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;

        this.img.src=this.src;
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        this.container.appendChild(this.img);
    }

    tick(){
        this.x+=this.velX;
        this.y+=this.velY;

        // 내가 화면의 음수값을 가질 때 좌측 한계점을 지나면 제거
        if(this.x < 0){
            removeObject(this.container, this.img, enemyArray, enemyArray.indexOf(this));
        }
    }

    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}