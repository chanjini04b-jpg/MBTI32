# MBTI 32가지 유형 분석 사이트

MBTI 16가지 유형을 더욱 세분화한 32가지 유형 분석을 제공하는 랜딩 사이트입니다.

## 🌟 주요 기능

### 1. MBTI 32가지 유형 상세 설명
- 각 MBTI 유형을 A형(적극적)과 T형(신중한)으로 세분화
- 4가지 카테고리로 분류 (분석가형, 외교관형, 관리자형, 탐험가형)
- 각 유형별 상세 정보:
  - 특성 점수 (에너지, 본성, 전술, 정체성)
  - 강점 및 약점
  - 추천 직업
  - 관계 특성
- **저장 기능**: 유형 정보를 JSON 파일로 다운로드
- **인쇄 기능**: 원하는 유형 정보를 바로 인쇄

### 2. 나의 MBTI 분석 테스트
- 40개의 정교한 질문으로 정확한 유형 분석
- 5단계 리커트 척도 응답 방식
- 실시간 진행률 표시
- 상세한 결과 리포트:
  - 개인화된 유형 설명
  - 시각화된 특성 점수
  - 강점 및 주의할 점
  - 추천 직업 및 관계 특성
- **결과 저장**: 분석 결과를 JSON 파일로 저장
- **결과 인쇄**: 분석 결과를 인쇄하여 보관

### 3. 추가 기능
- 반응형 디자인 (모바일, 태블릿, 데스크톱 지원)
- 카테고리별 필터링
- 모달 팝업으로 상세 정보 표시
- 로컬 스토리지를 활용한 결과 저장
- 부드러운 애니메이션 및 전환 효과

## 📁 파일 구조

```
MBTI32/
├── index.html      # 메인 HTML 파일
├── styles.css      # 스타일시트
├── data.js         # MBTI 유형 데이터 및 테스트 질문
├── script.js       # 메인 JavaScript 로직
├── .gitignore      # Git 제외 파일 목록
├── CNAME           # GitHub Pages 커스텀 도메인 설정 (선택)
└── README.md       # 프로젝트 설명서
```

## 🚀 실행 방법

### 로컬 실행
1. 프로젝트 폴더에서 `index.html` 파일을 웹 브라우저로 엽니다.
2. 또는 VS Code의 Live Server 확장을 사용하여 실행합니다.

```powershell
# VS Code에서 실행
# index.html 파일을 우클릭 > "Open with Live Server"
```

### GitHub Pages 배포

1. **저장소 생성**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: MBTI 32 Type Analysis Site"
   ```

2. **GitHub에 푸시**
   ```bash
   git remote add origin https://github.com/your-username/mbti32.git
   git branch -M main
   git push -u origin main
   ```

3. **GitHub Pages 활성화**
   - GitHub 저장소 페이지에서 `Settings` 탭 클릭
   - 왼쪽 메뉴에서 `Pages` 클릭
   - `Source`에서 `main` 브랜치 선택
   - `Save` 버튼 클릭
   - 몇 분 후 `https://your-username.github.io/mbti32/` 에서 접속 가능

4. **커스텀 도메인 설정 (선택사항)**
   - `CNAME` 파일에 도메인 입력
   - GitHub Pages 설정에서 커스텀 도메인 설정

## 💡 사용 방법

### MBTI 유형 탐색
1. 홈페이지 접속
2. "32가지 유형" 섹션으로 이동
3. 카테고리별 필터링 가능 (전체, 분석가형, 외교관형, 관리자형, 탐험가형)
4. 원하는 유형 카드 클릭하여 상세 정보 확인
5. "저장" 버튼으로 유형 정보 다운로드
6. "인쇄" 버튼으로 정보 인쇄

### MBTI 테스트 진행
1. "나의 MBTI 분석" 섹션으로 이동
2. "테스트 시작" 버튼 클릭
3. 40개 질문에 솔직하게 답변
4. 결과 확인
5. "결과 저장" 버튼으로 분석 결과 다운로드
6. "결과 인쇄" 버튼으로 결과 인쇄
7. "다시 테스트" 버튼으로 재검사 가능

## 🎨 디자인 특징

- 모던하고 깔끔한 UI/UX
- 그라디언트 배경 및 색상 테마
- 카테고리별 구분된 색상 체계:
  - 분석가형: 보라색 계열
  - 외교관형: 초록색 계열
  - 관리자형: 노란색 계열
  - 탐험가형: 분홍색 계열
- 호버 효과 및 전환 애니메이션
- 인쇄 최적화 스타일

## 🔧 기술 스택

- HTML5
- CSS3 (Flexbox, Grid, Animation)
- Vanilla JavaScript (ES6+)
- Local Storage API
- Blob API (파일 다운로드)
- Print Media Query (인쇄 최적화)

## 📊 MBTI 32가지 유형

### 분석가형 (Analysts)
- INTJ-A/T: 전략가
- INTP-A/T: 논리학자
- ENTJ-A/T: 지휘관
- ENTP-A/T: 변론가

### 외교관형 (Diplomats)
- INFJ-A/T: 옹호자
- INFP-A/T: 중재자
- ENFJ-A/T: 선도자
- ENFP-A/T: 활동가

### 관리자형 (Sentinels)
- ISTJ-A/T: 현실주의자
- ISFJ-A/T: 수호자
- ESTJ-A/T: 경영자
- ESFJ-A/T: 집정관

### 탐험가형 (Explorers)
- ISTP-A/T: 장인
- ISFP-A/T: 모험가
- ESTP-A/T: 사업가
- ESFP-A/T: 연예인

## 📝 라이선스

이 프로젝트는 MIT License 하에 배포됩니다. 교육 및 개인/상업적 사용 모두 가능합니다.

## 🚀 배포

GitHub Pages를 통한 배포 방법은 [DEPLOY.md](DEPLOY.md) 문서를 참조하세요.

## 🙋‍♂️ 기여

버그 리포트나 기능 제안은 언제든 환영합니다!

---

© 2025 MBTI 32 Type. 더 정확한 나를 찾는 여정
