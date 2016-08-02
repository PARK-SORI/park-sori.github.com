// js_01.js  

//한줄주석

/**
*두줄이상주석
*/

/**
ecmascript:유럽컴퓨터연합 자바스크립트의 어원
javascript버전 3,5,6(=ecma 2015=ecma6같은말),7(내년에나옴)
현재표준은 5와6다

자바스크립트와 유사함것들
dart
typescrip
coffeescript
*/

/**
변수 = 변하는 값, 데이터를 담는 그릇.
변수선언방법 var
*/

var box='text'; // 문자는 ''든 ""든 상관없다
var box1=9; // 숫자는 그냥 쓴다
var text='<p>Lorem ipsum dolor sit amet.</p>';
var tt=null;
var tat;

// 선언한걸 부를 때

//바디에 쓰여짐
document.write(box);
document.write(box1);
document.write(text);
//경고창이뜸
alert(box);
//콘솔창에뜸
console.log(box1);

/*
number = 숫자;
string = '문자';
boolean = true / false;
null = 없다
undefined = 정의되지 않은;;
array
object
function
*/


/*
는 하나는 대입하겠다
는 두개는 같다(형분석x)
는 세개는 같다(형분석0, 현시점에서 사용하는 비교형 그래서 지금은 이거로 씀)

콘솔에서 맞냐고 물어봄 
tt == tat
tt === tat
정답 봐 보기
*/