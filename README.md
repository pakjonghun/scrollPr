## 스크롤을 구현하는 연습을 해보았음.

## 사용한 라이브러리 : react, styled-components, styled-reset

## 스크롤 작동 설명
1. 스크롤은 1.2초의 쓰로틀링이 있음.
2. 스크롤은 화면 바운스,스크링 효과가 없고, 오차 없이 정확히 한 페이지씩 세로로 이동함.

## 아쉬운점
1. 불필요하게 긴 코드(lodash 사용 해서 쓰로틀링 코드 1줄로 만들고, 중복되는 코드 좀 줄이고... 컴포넌트도 좀 나누고 해야 함)
2. 진짜 못난 다지안(전혀 색상, 크기 고려 안하고 막 만듬)
3. 확장 유지보수고려 안함(변수나 객체로 묶어서 관리 할 것 들이 있음)
