# MBTI 32 Type Analysis - GitHub 배포 가이드

## 빠른 시작

### 1. Git 저장소 초기화
```bash
git init
git add .
git commit -m "Initial commit: MBTI 32 Type Analysis Site"
```

### 2. GitHub 저장소 생성 및 연결
1. GitHub에서 새 저장소 생성 (예: `mbti32`)
2. 다음 명령어로 연결:
```bash
git remote add origin https://github.com/your-username/mbti32.git
git branch -M main
git push -u origin main
```

### 3. GitHub Pages 활성화
1. GitHub 저장소 페이지 접속
2. `Settings` → `Pages` 이동
3. `Source`: `main` 브랜치 선택
4. `Save` 클릭
5. 배포 완료까지 약 1-2분 대기
6. `https://your-username.github.io/mbti32/` 에서 확인

## 커스텀 도메인 설정 (선택사항)

### CNAME 파일 수정
1. `CNAME` 파일에 도메인 입력 (예: `mbti.yourdomain.com`)
2. 변경사항 커밋 및 푸시:
```bash
git add CNAME
git commit -m "Add custom domain"
git push
```

### DNS 설정
도메인 제공업체에서 다음 설정 추가:
- CNAME 레코드: `your-username.github.io` 가리키도록 설정

## 업데이트 방법

코드 수정 후:
```bash
git add .
git commit -m "Update: 변경 내용 설명"
git push
```

## 문제 해결

### 페이지가 표시되지 않는 경우
- GitHub Pages 설정 확인
- 저장소가 public인지 확인
- 브라우저 캐시 삭제 후 재시도
- 배포 상태 확인: `Actions` 탭에서 워크플로우 확인

### 스타일이 깨지는 경우
- 상대 경로 확인
- 브라우저 개발자 도구에서 네트워크 오류 확인

## 유용한 Git 명령어

```bash
# 현재 상태 확인
git status

# 변경사항 확인
git diff

# 커밋 히스토리 확인
git log --oneline

# 원격 저장소에서 최신 버전 가져오기
git pull origin main
```

## 라이선스
MIT License - 자유롭게 사용 및 수정 가능

## 기여하기
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
