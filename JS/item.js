/* 아이템을 정의한다
role 0 : item0.png ) 무기를 미사일로 전환
role 1 : item1.png ) 적군 소멸
role 2 : item2.png ) 속도 업그레이드
role 3 : item3.png ) hp 추가
*/
class Item{

    constructor(itemRole, container, width, height, x, y, velX, velY){
        this.itemRole=itemRole; // 각 아이템이 보유할 정보객체
        // Item은 ItemRole을 가지고 있다
        this.container=container;
        this.img=document.createElement("img");
        this.src=itemRole.src;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;

        //
        this.img.src=this.src;
        // 크기
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        // 위치
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        // 부모 요소에 부착
        this.container.appendChild(this.img);
    }

    tick(){
        this.x+=this.velX;
        this.y+=this.velY;

        // 내가 화면의 음수값을 가질 때 좌측 한계점을 지나면 제거
        if(this.x < 0){
            removeObject(this.container, this.img, itemArray, itemArray.indexOf(this));
        }
    }

    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}