# 가계부 서비스 #1

## 체크리스트

<details>
<summary>구현 요소 구조도</summary>

![가계부 기능](https://user-images.githubusercontent.com/60080167/223045069-169bbf61-90bb-4807-9d3b-d7a5cefbd2f6.png)
</details>

<br>

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
    - [ ] 클릭하면 드롭다운 패널 등장
    - [ ] 마우스가 드롭다운 패널을 벗어나면 닫기
    - [ ] x버튼 클릭하면 알림창 띄우기
        - [ ] 클릭시 아이콘을 줄였다 늘려 클릭되는 느낌 주기
        - [ ] 배경 딤 처리
    - [ ] 추가하기 누르면 입력 모달창 띄우기
      - [ ] 입력값 받아서 항목 추가하기
    - [ ] 삭제하기 이벤트 리스너 부여하기
      - [ ] 해당 항목 삭제하기
    - [ ] 모달창 밖을 클릭하면 모달창 끄기
- 분류
    - [ ] 수입, 지출에 따라 다른 목록 보여주기
- 생성
  - [ ] 입력값을 검증
  - [ ] 검증을 통과하면 활성화함(~0315 수요일)

## 학습 계획

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

## 이슈

### CSS 코드가 너무 길어져 가독성이 떨어지는 문제

### HTML element의 클래스가 너무 많아져 HTML 가독성을 해치는 문제

### parseInt(), Number() 가 NaN을 반환하는 문제
