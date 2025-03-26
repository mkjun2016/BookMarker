# 북마커 - 나만의 독서록  
> 개인 독서 경험을 관리하고 AI 기반 추천을 제공하는 독서 기록 앱

[![NPM Version][npm-image]][npm-url]

책을 읽고 독후감을 작성하고, AI 추천을 통해 새로운 책을 발견할 수 있는 앱을 개발 중입니다.  

![](../header.png)

## 개발 환경 설정

```sh
pod install
npm install
npm start
```

## 앱 주요 기능  
### ✅ 독서 기록 및 감정 태그  
- 책을 읽고 독후감을 작성하며, 감정을 태그로 추가하여 감정 변화를 추적할 수 있습니다.  
- 개인별 독서 히스토리를 시각적으로 관리할 수 있습니다.  

### ✅ AI 기반 책 추천 (ChatGPT API 활용)  
- 사용자의 독서 취향을 학습하여 개인 맞춤형 책을 추천합니다.  
- 특정 키워드를 입력하면 AI가 유사한 주제의 책을 추천합니다.  

### ✅ 주간 베스트셀러 조회 (알라딘 API 연동)  
- 실시간으로 알라딘 베스트셀러 TOP 10을 확인할 수 있습니다.  

### ✅ 도서 검색 기능 (네이버 책 API 활용)  
- 네이버 북스 API를 통해 원하는 책을 쉽게 검색할 수 있습니다. 

## 기술 스택  
- **프론트엔드**: React Native, TypeScript
- **API 통신**: Axios, RESTful API
- **AI 추천 시스템**: OpenAI ChatGPT API
- **외부 데이터 연동**: 네이버 책 API, 알라딘 API

## 업데이트 내역  

* 0.0.6  
    * 관심사에 따른 AI 기반 책 추천 페이지 제작  
    * UI 및 기능 일부 개발 완료
    * AI 기반 책 추천 페이지 기능 개발 완료 

* 0.0.5  
    * ChatGPT API 적용 및 연동 완료
    * 책 추천 기능 개발 시작  
    * 독서 성과를 반영한 랭킹 시스템 기획

* 0.0.4  
    * 책 기록 페이지 개발 완료
    * 내 책장 페이지 개발 시작
    * 베스트셀러 페이지 제작  
        - 알라딘 API로 연동 완료, 국내 TOP10 조회 완료  

* 0.0.3
    * 독서 기록 페이지 UI 개발 완료

* 0.0.2
    * 네이버 API를 활용한 도서 검색 기능 추가 
    * 책 검색 페이지 UI 개발 완료

* 0.0.1  
    * 프로젝트 개발 시작  

## 정보

개발자: 전문규 (mkjun2016@naver.com)

KevinComp 라이센스를 준수하며 ``LICENSE``에서 자세한 정보를 확인할 수 있습니다.

## 기여 방법

1. (<https://github.com/yourname/yourproject/fork>)을 포크합니다.
2. 새로운 브랜치를 생성하고 개발합니다.
3. 변경 사항을 커밋한 후 풀 리퀘스트(PR)를 보내주세요.

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki