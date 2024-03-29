
/* 현실 객체 중 이퀄라이저 막대기를 구현한다
    우리가 정의한 객체를 [사용자 정의 객체]라고 하며,
    자료형은 문자 숫자 논리값 객체형... 이 때 Bar객체 자료형을
    개발자가 정의했다는 것은, 기존에 세상에 없던 새 자료형을
    정의했다고 하여 [Bar형]이라고 한다. 즉, 개발자 = 창조주 */

class Bar{
    /* 클래스란 기존의 고전적인 절차지향 언어에서 사용하던 재료들
    즉, 변수와 함수를 묶어 하나의 단위로 정의한 것에 불과하므로
    신기술이라기 보다는 현실을 반영하는 개발자의 관점이 변화된 것이다.
    자바 수업에서 무언가 없던 기술을 새롭게 배운다고 착각하지 말자 */
    constructor(container, width, height, x, y, bg, targetH){  // 메서드 중 객체의 인스턴스 생성시점에 관여하여
        // 객체의 개성을 부여할 수 있도록 (초기화 할 수 있도록) 역할을 수행하는
        // 메서드를 특별히 [생성자 메서드]라고 한다!!!!
        // 개발자는 여기서 이 사물이 태어날 때 어떤 개성을 가지고 태어나게 할지
        // 스타일을 결정할 수 있다. 이것을 [객체의 초기화]라고 한다.
        this.container=container;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.bg=bg;
        this.a=0.1; // 비율계수
        this.targetH=targetH;

        this.div=document.createElement("div");
        // 크기
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        // 위치
        this.div.style.position="absolute";
        this.div.style.left=x+"px";
        this.div.style.top=y+"px";
        // 배경색
        this.div.style.background=this.bg;
        // 테두리
        this.div.style.border="1px solid black";
        // box 모델의 크기에 영향을 주지 않기
        this.div.style.boxSizing="border-box";

        // 부모요소에 부착
        this.container.appendChild(this.div);
    }
    
    /* 객체가 보유한 변수를 이용하여 원하는 변화를 주면 움직임을 표현할 수 있다
    즉, 움직임 방식을 결정할 수 있는 객체안의 함수를 가리켜 메서드(method)라 한다. */

    render(){  // 화면에 보여질 처리 = 게임 분야에서는 렌더링
        this.div.style.height=parseFloat(this.div.style.height)
        +this.a*(this.targetH-parseFloat(this.div.style.height))+"px";
        this.div.innerText=this.div.style.height;
    }
}