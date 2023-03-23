# 가계부 서비스 #1

## ✅체크리스트

### 메인 페이지 UI
1. 헤더(header)
    - [x] 연월을 가운데
    - [x] 로고, 이동 탭을 좌우에 위치시키기
    - [x] 연도를 월 위에 작은 폰트로, 영문 월 표시를 아래 작은 폰트로 위치시키기
    - [x] 내역 아이콘만 밝게, 나머지는 어두운 색으로 처리
2. 내역 입력바
    - [x] 입력란 가로 정렬하기
    - [x] 입력란 사이 구분선 넣기
    - [x] 라벨을 입력칸 위에 넣기
    - [x] 확인 버튼(비활성)
    - [x] 결제 수단 드롭박스
    - [x] 분류 드롭박스
    - [x] 금액의 부호를 바꾸는 버튼 넣기
3. 수입지출 내역
    1. 내용 요약(헤더)
        - [x] 총 건수를 좌측에 배치
        - [x] 수입, 지출 액수를 우측에 배치
        - [x] 수입, 지출 액수 앞 체크박스 배치
    2. 내역
        1. 일별 내역
            - [x] 요약: 일자를 좌측, 내역을 우측에 배치
            - [x] 카테고리는 타원형에 색 채우기, 텍스트 컬러 #FCFCFC
            - [x] 금액을 가장 오른쪽 배치
            - [x] 각 칼럼별 간격을 어떻게 할지 고민
        2. 전체 구성
            - [ ] 최신 내역이 위로 오도록 배치

### 월 이동 기능
- [x] 연도, 월(숫자, 영어) 정보 가져오기
- [x] 초기 연월 정보 세팅
- [x] 좌우 이동 버튼에 이벤트리스너 넣기
- [ ] 월별 내역을 생성 (~0313 월요일)
- [ ] 수입 지출 내역에 월별 데이터를 연동
- [ ] 수입 지출 내역 계산 확인

### 새로운 내역 입력
- 일자
    - [x] 일자 정보를 가져오기
    - [x] 입력 방식 선택하기 text or calendar 
    - [x] 최초 렌더링 시 오늘 날짜 자동입력
- 금액
    - [x] +- 버튼 : 토글 찾아보기
    - [x] 1000의 자리마다 쉼표 추가
    - [x] 숫자 이외의 값이 입력되면 기존의 값을 유지함(~0314 화요일)
- 내용
- 결제수단
    - [x] 커스텀 셀렉트 박스 만들기
    - [x] 셀렉트 박스를 클릭하면 드롭다운 패널 등장
    - [x] 드롭다운이 열려있을 때 셀렉트 박스를 클릭하면 드롭다운 패널 끄기
    - [x] 선택지 버튼 호버시 배경 색상 바꾸기
    - [x] 드롭다운에서 선택지를 클릭하면 셀렉트 박스의 텍스트를 바꾸기
    - [x] 추가하기를 클릭하면 텍스트를 변하지 않도록 처리하기
    - [x] 선택지를 선택하면 셀렉트 박스의 텍스트 색상 변경하기
    - [x] 드롭다운 패널 바깥을 벗어나면 닫기
    - [ ] x버튼 클릭하면 알림창 띄우기
        - [ ] 클릭시 아이콘을 줄였다 늘려 클릭되는 느낌 주기
        - [ ] 배경 딤 처리
    - [ ] 추가하기 누르면 입력 모달창 띄우기
      - [ ] 입력값 받아서 항목 추가하기
    - [ ] 삭제하기 이벤트 리스너 부여하기
      - [ ] 해당 항목 삭제하기
    - [ ] 모달창 밖을 클릭하면 모달창 끄기
- 분류
    - [x] 모든 드롭다운에 동일하게 적용시키기
    - [x] 수입, 지출에 따라 다른 목록 보여주기(~3/16 목요일)
    - [x] 목록 교체하면 셀렉트 박스 초기화하기
- 생성
  - [x] 입력값을 검증
    - [x] 일자는 yyyymmdd 형태일 때 유효하다
    - [x] 금액는 0이 아닌 값이어야 유효하다
    - [x] 내용은 문자열이고 공백이 아닌 문자가 1개 이상 있어야 유효하다
    - [x] 결제수단은 결제수단 리스트 중 하나여야 유효하다
    - [x] 분류는 카테고리 리스트 중 하나여야 유효하다
  - [x] 검증을 통과하면 확인 버튼을 활성화함(~~~0315 수요일~~)
  - [x] 확인 버튼을 누르면 모든 입력값을 담은 객체로 추출한다
  - [x] 입력값들의 객체를 로컬 스토리지에 저장한다
    - [x] 로컬 스토리지에서 연월에 저장된 값을 불러온다.
    - [x] 연월에 저장된 값이 없다면 만든다.
    - [x] 불러온 값에 일자를 key로 하는 배열을 만들고 내역을 맨 뒤에 추가한다.
    - [x] 연월과 만들어진 객체를 문자열화해서(stringify) 저장한다.
    - [x] 모든 입력란을 초기화한다.

### 월별 내역

- [ ] 내역 렌더링
  - [ ] 연월 정보를 받아온다.
  - [ ] 로컬스토리지에서 연월에 매핑된 데이터를 받아온다.
  - [ ] 일자 내림차순으로 정렬한다.
  - [ ] 일자를 순회하며 내역 데이터로 DOM Element를 만들고 일자를 기준으로 모은다.
  - [ ] 일자별 DOM Element를 렌더링한다.

## 📅학습 계획

### Week #1

1. 월요일 : 시멘틱 태그, CSS 레이아웃 학습
2. 화요일 : 메인페이지 UI 구현
3. 수요일 : ~~UI 마무리, 내역 입력 기능 설계~~헤더 레이아웃
4. 목요일 : ~~내역 입력 기능 구현, 월 이동 설계~~입력바 레이아웃, 내역 레이아웃 10%
5. 금요일 : ~~월 이동 구현~~ 내역 레이아웃 마무리

### Week #2

- DOM insertBefore
- DOM template literal
- Event target, preventDefault
- Event 버블링, 캡처링, Delegation
- 디버깅 방법
- native 객체에서 prototype 활용 방식

### Week #3

- scope와 클로저의 개념 알아보기
- 샘플 코드를 디버깅하며 scope, 클로저가 적용되는 것을 확인하기
- 각 입력값들을 모두 검증하고 완료되면 확인 버튼 활성화하기
- 내역 데이터를 localStorage에 저장하기(~수요일)
- 내역 수정, 삭제
- 달별 내역 보여주기(~주말)

## 📚학습 정리

### 2주차

Event target vs currentTarget
- target은 이벤트가 발생한 바로 그 객체
- currentTarget은 현재 이벤트 핸들러가 등록된 개체(요소)

### 3주차

querySelector 메서드
- document 외의 요소에서도 사용할 수 있음
- 해당 요소에서부터 탐색하기 때문에 전체 DOM 트리에서 탐색하는 것보다 빠름

## 😭🤪삽질한 것들

### 1주차

-  CSS 코드가 너무 길어져 가독성이 떨어짐
   -  메인 페이지를 구성하는 큰 요소들로 css 파일을 분리해서 어느 정도 해소할 수 있었다.
-  HTML element의 클래스가 너무 많아져 HTML 가독성을 해침
   -  BEM 방식의 클래스명과 더불어 HTML 코드에 클래스가 지나치게 많다. js로 동적 기능을 붙이면서 불필요한 클래스는 지우고 단순화하고 있다.
   -  HTML -> CSS -> JS 방식이 아니라 요소, 기능별로 HTML, CSS, JS를 왔다갔다 거리며 작업을 진행하면 불필요하게 클래스를 붙이는 걸 줄일 수 있을 것 같다.(by kakamotobi)

### 2주차

- parseInt(), Number() 가 NaN을 반환하는 문제
- 분류(카테고리) 드롭다운 너비가 select 박스가 아닌 분류 입력란 전체에 맞춰지는 문제
- 결제수단 드롭다운에만 적용되는 js 코드를 작성해버림
  - Event delegation, currentTarget 적용해서 모든 드롭다운에 적용되는 코드로 다시 작성함
  - 함수 이름 단순하게 지으니 훨씬 가독성이 올라감
  - export 필요없이 해당 파일에서 실행하고 모듈 js파일에서 import 만 해주면 동작함

### 3주차

- 하나의 요소에 2개의 클래스명이 있을 때, css selector 사용 방법
  - active 클래스명을 추가해서 버튼을 활성화할 때 자주사용하는데, 적용이 되지 않아서 고생함
  - .a.b 처럼 띄어쓰기 없이 사용해야 css가 적용됨

## 구현 과정

<details>
<summary>수입/지출에 따라 카테고리 드롭다운 리스트 변경</summary>

금액 부호에 따라 카테고리 드롭다운 변경하기

금액 부호 checked => 지출/수입 판별
지출, 수입에 맞는 카테고리 불러와서 element 만들기
ul 비우기
elements 넣기

### child node 버리기 => how?
1) parentNode.removeChild(childNode)
2) parentNode.replaceChildren(...newChildren) => 2022
3) innerHTML = ''
4) textContent = ''
5) child.remove() => 일부에서 지원x
6) lastchild() + while loop

3 < 4, firstchild < lastchild : 컬렉션 구현방식 때문
호환성 replaceChildren < remove() < removechild()

### appendChild vs append

append는 여러 요소를 받을 수 있고, node와 element 둘 다 인자로 받을 수 있다.(raw text 같은 것)

text를 감싸고 있는 요소들도 만들어줘야 하기 때문에 append의 이점이 없고, 추후 교체 가능성도 생각해서 appendChild 로 카테고리 아이템을 만들어줬다.

### replaceChild로 ul 통째로 교체

dropdown 자식으로 ul로 아이템들이 감싸져있어서 이걸 통째로 교체해줌.
li 하나하나 remove & append 하는것보다 효율이 좋아보였음.


</details>

<details>
<summary>카테고리 메뉴 변경될 때, 셀렉트 박스 초기화하기</summary>

이미 dropdown node를 잡아놨는데, 그 앞의 node(셀렉트 박스)를 가져올 순 없을까?
-> previousElementNode
-> nextElementNode도 있음

초기화 과정
- 셀렉트 박스 p.textContent = '선택하세요'


문제
- 드롭다운 메뉴(item)에 이벤트가 걸려있음 -> 드롭다운에 걸어서 이벤트 위임하기
- 드롭다운+content 인자로 받아서 셀렉트 박스 내용 변경하는 함수로 수정
- 금액 부호 변경할 때, 분류 셀렉트 박스 active로 바뀜
  - updateSelectBox에 active 추가하는 코드가 들어있음
  - activate/deactivate 함수로 나누고 deactivate invoke
</details>

<details>
<summary>인풋바의 모든 입력값이 유효할 때 확인 버튼 활성화하기</summary>

각 값을 검증하는 함수는 나중에 생각하고, 모든 함수를 호출할 타이밍은 언제가 되야하나?
또 해당 이벤트를 설정할 요소는 어디여야 할까?
input과 select-box를 모두 감싸는 form 태그가 있어서 이걸 사용하는게 적절해보인다.

1. select-box p 태그를 input으로 교체
2. 모든 input 값의 유효성을 검사 => 하나라도 유효값이 아니면 함수 종료
3. 확인 버튼 활성화

active 클래스명을 추가해줘도 css 적용이 안 되서 한참 헤맴.
</details>
