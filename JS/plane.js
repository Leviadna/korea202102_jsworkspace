/*
비행기를 정의하자
비행기라는 사용자 정의 자료형을 선언
*/
class Plane{
    /* 변수, 함수가 올 수 있다 */

    // 객체의 초기화는 생성자 메서드가 담당한다
    // 비행기가 어떤 특성을 가지고 태어날지 결정
    constructor(container, src, width, height, x, y, velX, velY){
        // 멤버변수 선언 및 초기화
        this.container=container;  // 비행기가 붙을 부모 요소
        this.img=document.createElement("img");
        this.src=src;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX;  // x축으로의 속도를 결정
        this.velY=velY;  // y축으로의 속도를 결정
        // 멤버변수를 통한 속성값 지정(style)
        this.img.src=this.src;
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        // 화면에 부착
        this.container.appendChild(this.img);
    }
    tick(){
        this.x+=this.velX;  // 등속도 누적
        this.y+=this.velY;  // 등속도 누적

        if(this.x<=0){
            this.x=0;
        }
        
        // 적군과의 충돌체크
        for(var i=0; i<enemyArray.length; i++){    
            if(hitTest(this.img, enemyArray[i].img)){
                removeObject(this.container, enemyArray[i].img, enemyArray, i); // 적군
                removeObject(info, hpArray[hpArray.length-1].img, hpArray, hpArray.length-1); // 내 hp 제거
                // 주인공의 에너지가 모두 소진되었는지 hp배열의 길이가 0이면 소진으로 본다
                if(hpArray.length==0){
                    var div=document.createElement("div");
                    div.style.fontSize="200px";
                    div.style.textAlign="center";
                    div.style.color="#ffffff";
                    div.style.fontWeight="bold";
                    div.style.height=600+"px";
                    div.innerHTML="GAME OVER<br><a href=\"javascript:lacation.reload()\">임재도전</a>";

                    this.container.appendChild(div);
                }
            }
        }

        // 아이템 취득 (아이템과의 충돌검사)
        for(var i=0; i<itemArray.length; i++){
            if(hitTest(this.img, itemArray[i].img)){ // 아이템과 충돌발견
                var itemRole = itemArray[i].itemRole; // 주인공과 충돌한 아이템의 role

                removeObject(this.container, itemArray[i].img, itemArray, i); // 사탕제거
                
                switch(itemRole.role){
                    case 0:changeWeapon();break; // 무기교체
                    case 1:clearEnemy();break; // 적군소멸
                    case 2:increaseHp();break; // HP회복
                    case 3:speedUp();break; // 속도증가
                }
            }
        }

        //console.log("this.x = ", this.x);
        if(this.x >= screen.width-this.width){
            this.x=screen.width-this.width;
        }

        if(this.y<=0){
            this.y=0;
        }
    }
    // 변경된 값을 화면에 보여주기 위한 그래픽 처리 (랜더링)
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}