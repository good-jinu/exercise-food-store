# Practice Food Store

> 맛집 리스트를 보여주는 웹페이지입니다.

![screerecorded](/.github/Animation.gif)

### 결과확인 방법

먼저 패키지를 설치합니다.
```bash
yarn install
```

개발모드로 실행시킵니다.
```bash
yarn dev
```

[http://localhost:3000](http://localhost:3000)에서 결과를 확인할 수 있습니다.

<br/>

### What is used
- typscript
- Next.js
- Material ui
- json-server

<br/>

### 디렉토르 구조

src 디렉토리는 다음으로 구성되어 있습니다.

```
src
├─components
├─hooks
├─styles
└─utility
```

- components: 화면에 렌더링 되어질 컴포넌트 단위입니다.
- hooks: 컴포넌트의 로직 함수들을 따로 두어서 재사용가능하도록 하였습니다.
- styles: material ui를 이용한 style 함수입니다.
- utility: 기초적인 로직이나 재사용 가능한 함수들 입니다.
