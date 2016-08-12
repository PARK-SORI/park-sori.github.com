## 반응형웹 기초
 
 디바이스 크기에 따라 달라지는 화면형태!!

   
'''html 
 <meta name="viewport">
'''

'''css
 @media print(인쇄)
 @media handheld(손으로 들고다니는 디바이스)
 @media screen(모든화면)
 @media all(스크린+인쇄)

mobile-v ~480px    @media screen and (max-width:480px) {}
mobile-h ~640px    @media screen and (min-width:481px) and (max-width:640px) {}
tablet-v ~768px    @media screen and (min-width:641px) and (max-width:768px) {}
tablet-h ~1024px   @media screen and (min-width:769px) and (max-width:1024px) {}

pc       ~1200px~  @media screen and (min-width:1025px) and (max-width:1280px) {}
pcALL     1920px~  @media screen and (min-width:1281px) {}
'''

줄이면

@media screen and  (max-width:640px) {}
@media screen and (min-width:641px) and (max-width:1024px) {}
@media screen and (min-width:1025px) {}
