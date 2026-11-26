# 장민주 포트폴리오

## 폴더 구조
```
portfolio/
├─ index.html      원페이지 전체 (섹션마다 주석으로 구분)
├─ css/reset.css   기본 초기화
├─ css/style.css   전체 스타일 (맨 위 :root 변수에서 색/폰트 변경)
├─ js/main.js      헤더, 모바일 메뉴, Archive 필터, 모달
└─ images/         캡처·사진 넣을 폴더
```

## 내 컴퓨터에서 작업하고 GitHub Pages로 올리기
1. github.com 가입 후 저장소 이름을 `아이디.github.io` 로 만들기
2. GitHub Desktop 설치 → 저장소 Clone → 이 폴더 파일들을 그 안에 넣기
3. VS Code로 폴더 열기 → 확장 프로그램 Live Server 설치 → index.html 우클릭 "Open with Live Server" (저장하면 바로 새로고침)
4. 작업 후 GitHub Desktop에서 Commit → Push
5. 저장소 Settings → Pages → Branch: main 선택 후 Save
6. 1~2분 뒤 https://아이디.github.io 로 접속 (https 자동 적용)

## 자리 표시 바꾸는 법
- `[ ]` 대괄호 텍스트는 전부 임시 내용입니다.
- `<div class="... ph">` 자리 표시는 `<img src="images/파일명.jpg" alt="설명">` 로 바꾸세요.
- Archive 카드에 긴 캡처 이미지를 넣으면 마우스를 올렸을 때 자동으로 스크롤됩니다.
