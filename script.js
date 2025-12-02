// 전역 변수
let currentQuestion = 0;
let answers = {
    EI: 0,  // E: 양수, I: 음수
    SN: 0,  // N: 양수, S: 음수
    TF: 0,  // F: 양수, T: 음수
    JP: 0,  // P: 양수, J: 음수
    AT: 0   // A: 양수, T: 음수
};
let currentSelectedType = null;

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    renderTypeCards();
});

// 섹션으로 스크롤
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// 유형 카드 렌더링
function renderTypeCards(filter = 'all') {
    const grid = document.getElementById('types-grid');
    grid.innerHTML = '';
    
    Object.values(mbtiTypes).forEach(type => {
        if (filter === 'all' || type.category === filter) {
            const card = createTypeCard(type);
            grid.appendChild(card);
        }
    });
}

// 유형 카드 생성
function createTypeCard(type) {
    const card = document.createElement('div');
    card.className = 'type-card';
    card.onclick = () => showTypeDetail(type.type);
    
    card.innerHTML = `
        <div class="type-badge ${type.category}">${type.type}</div>
        <h3 class="type-name">${type.name}</h3>
        <p class="type-description">${type.description}</p>
    `;
    
    return card;
}

// 유형 필터링
function filterTypes(category) {
    // 활성 버튼 업데이트
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderTypeCards(category);
}

// 유형 상세 정보 표시
function showTypeDetail(typeCode) {
    const type = mbtiTypes[typeCode];
    currentSelectedType = typeCode;
    
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <div class="type-badge ${type.category}" style="font-size: 2rem; padding: 1rem 2rem; margin-bottom: 1rem;">
            ${type.type}
        </div>
        <h2>${type.name}</h2>
        <p style="font-size: 1.1rem; line-height: 1.8; margin: 1.5rem 0;">${type.description}</p>
        
        <div style="margin: 2rem 0;">
            <h3>특성 점수</h3>
            <div class="result-traits">
                <div class="trait-item">
                    <div class="trait-label">에너지 (Energy)</div>
                    <div class="trait-bar">
                        <div class="trait-fill" style="width: ${type.traits.energy}%"></div>
                    </div>
                </div>
                <div class="trait-item">
                    <div class="trait-label">본성 (Nature)</div>
                    <div class="trait-bar">
                        <div class="trait-fill" style="width: ${type.traits.nature}%"></div>
                    </div>
                </div>
                <div class="trait-item">
                    <div class="trait-label">전술 (Tactics)</div>
                    <div class="trait-bar">
                        <div class="trait-fill" style="width: ${type.traits.tactics}%"></div>
                    </div>
                </div>
                <div class="trait-item">
                    <div class="trait-label">정체성 (Identity)</div>
                    <div class="trait-bar">
                        <div class="trait-fill" style="width: ${type.traits.identity}%"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div style="margin: 2rem 0; text-align: left;">
            <h3>강점</h3>
            <ul style="line-height: 2;">
                ${type.strengths.map(s => `<li>${s}</li>`).join('')}
            </ul>
        </div>
        
        <div style="margin: 2rem 0; text-align: left;">
            <h3>약점</h3>
            <ul style="line-height: 2;">
                ${type.weaknesses.map(w => `<li>${w}</li>`).join('')}
            </ul>
        </div>
        
        <div style="margin: 2rem 0; text-align: left;">
            <h3>적합한 직업</h3>
            <p style="font-size: 1.05rem; line-height: 1.8;">
                ${type.careers.join(', ')}
            </p>
        </div>
        
        <div style="margin: 2rem 0; text-align: left;">
            <h3>관계</h3>
            <p style="font-size: 1.05rem; line-height: 1.8;">
                ${type.relationships}
            </p>
        </div>
    `;
    
    document.getElementById('type-modal').classList.remove('hidden');
}

// 모달 닫기
function closeModal() {
    document.getElementById('type-modal').classList.add('hidden');
}

// 테스트 시작
function startTest() {
    currentQuestion = 0;
    answers = { EI: 0, SN: 0, TF: 0, JP: 0, AT: 0 };
    
    document.getElementById('test-intro').classList.add('hidden');
    document.getElementById('test-content').classList.remove('hidden');
    
    showQuestion();
}

// 질문 표시
function showQuestion() {
    const question = testQuestions[currentQuestion];
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('current-question').textContent = currentQuestion + 1;
    
    const progress = ((currentQuestion + 1) / testQuestions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

// 답변 처리
function answer(value) {
    const question = testQuestions[currentQuestion];
    const score = (value - 3) * question.direction; // -2 ~ +2 범위로 변환
    
    answers[question.dimension] += score;
    
    currentQuestion++;
    
    if (currentQuestion < testQuestions.length) {
        showQuestion();
    } else {
        calculateResult();
    }
}

// 결과 계산
function calculateResult() {
    // MBTI 4글자 결정
    const mbti = 
        (answers.EI > 0 ? 'E' : 'I') +
        (answers.SN > 0 ? 'N' : 'S') +
        (answers.TF > 0 ? 'F' : 'T') +
        (answers.JP > 0 ? 'P' : 'J');
    
    // A vs T 결정
    const identity = answers.AT > 0 ? 'A' : 'T';
    
    const finalType = mbti + '-' + identity;
    
    showResult(finalType);
}

// 결과 표시
function showResult(typeCode) {
    const type = mbtiTypes[typeCode];
    
    document.getElementById('test-content').classList.add('hidden');
    document.getElementById('test-result').classList.remove('hidden');
    
    const resultCard = document.getElementById('result-card');
    resultCard.innerHTML = `
        <div class="type-badge ${type.category}" style="font-size: 3rem; padding: 1.5rem 3rem; margin-bottom: 1rem;">
            ${type.type}
        </div>
        <h2 class="result-name">${type.name}</h2>
        <div class="result-description">
            <p style="font-size: 1.2rem; line-height: 1.8; margin-bottom: 2rem;">${type.description}</p>
            
            <div style="margin: 2rem 0;">
                <h3 style="margin-bottom: 1rem;">당신의 특성 점수</h3>
                <div class="result-traits">
                    <div class="trait-item">
                        <div class="trait-label">에너지 (Energy)</div>
                        <div class="trait-bar">
                            <div class="trait-fill" style="width: ${type.traits.energy}%"></div>
                        </div>
                        <small>${type.traits.energy}%</small>
                    </div>
                    <div class="trait-item">
                        <div class="trait-label">본성 (Nature)</div>
                        <div class="trait-bar">
                            <div class="trait-fill" style="width: ${type.traits.nature}%"></div>
                        </div>
                        <small>${type.traits.nature}%</small>
                    </div>
                    <div class="trait-item">
                        <div class="trait-label">전술 (Tactics)</div>
                        <div class="trait-bar">
                            <div class="trait-fill" style="width: ${type.traits.tactics}%"></div>
                        </div>
                        <small>${type.traits.tactics}%</small>
                    </div>
                    <div class="trait-item">
                        <div class="trait-label">정체성 (Identity)</div>
                        <div class="trait-bar">
                            <div class="trait-fill" style="width: ${type.traits.identity}%"></div>
                        </div>
                        <small>${type.traits.identity}%</small>
                    </div>
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0; text-align: left;">
                <div>
                    <h3 style="color: var(--success-color); margin-bottom: 1rem;">💪 강점</h3>
                    <ul style="line-height: 2;">
                        ${type.strengths.slice(0, 3).map(s => `<li>${s}</li>`).join('')}
                    </ul>
                </div>
                <div>
                    <h3 style="color: var(--warning-color); margin-bottom: 1rem;">⚠️ 주의할 점</h3>
                    <ul style="line-height: 2;">
                        ${type.weaknesses.slice(0, 3).map(w => `<li>${w}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 12px; margin: 2rem 0; text-align: left;">
                <h3 style="margin-bottom: 1rem;">💼 추천 직업</h3>
                <p style="font-size: 1.05rem; line-height: 1.8;">
                    ${type.careers.join(' · ')}
                </p>
            </div>
            
            <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 12px; text-align: left;">
                <h3 style="margin-bottom: 1rem;">❤️ 관계 특성</h3>
                <p style="font-size: 1.05rem; line-height: 1.8;">
                    ${type.relationships}
                </p>
            </div>
        </div>
    `;
    
    // 결과를 로컬 스토리지에 저장
    localStorage.setItem('myMBTI', typeCode);
    localStorage.setItem('myMBTIDate', new Date().toLocaleDateString('ko-KR'));
}

// 결과 저장
function saveResult() {
    const myMBTI = localStorage.getItem('myMBTI');
    if (!myMBTI) {
        alert('저장할 결과가 없습니다.');
        return;
    }
    
    const type = mbtiTypes[myMBTI];
    const date = new Date().toLocaleDateString('ko-KR');
    
    // JSON 형식으로 결과 생성
    const resultData = {
        date: date,
        type: type.type,
        name: type.name,
        category: type.category,
        description: type.description,
        traits: type.traits,
        strengths: type.strengths,
        weaknesses: type.weaknesses,
        careers: type.careers,
        relationships: type.relationships
    };
    
    // JSON 파일로 다운로드
    const dataStr = JSON.stringify(resultData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `MBTI_결과_${type.type}_${date.replace(/\./g, '_')}.json`;
    link.click();
    URL.revokeObjectURL(url);
    
    alert('결과가 저장되었습니다!');
}

// 결과 인쇄
function printResult() {
    window.print();
}

// 테스트 재시작
function restartTest() {
    document.getElementById('test-result').classList.add('hidden');
    document.getElementById('test-intro').classList.remove('hidden');
    scrollToSection('test');
}

// 유형 정보 저장
function saveTypeInfo() {
    if (!currentSelectedType) {
        alert('저장할 유형이 선택되지 않았습니다.');
        return;
    }
    
    const type = mbtiTypes[currentSelectedType];
    const date = new Date().toLocaleDateString('ko-KR');
    
    const resultData = {
        date: date,
        type: type.type,
        name: type.name,
        category: type.category,
        description: type.description,
        traits: type.traits,
        strengths: type.strengths,
        weaknesses: type.weaknesses,
        careers: type.careers,
        relationships: type.relationships
    };
    
    const dataStr = JSON.stringify(resultData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `MBTI_${type.type}_설명_${date.replace(/\./g, '_')}.json`;
    link.click();
    URL.revokeObjectURL(url);
    
    alert('유형 정보가 저장되었습니다!');
}

// 유형 정보 인쇄
function printTypeInfo() {
    window.print();
}

// 모달 외부 클릭 시 닫기
window.onclick = function(event) {
    const modal = document.getElementById('type-modal');
    if (event.target === modal) {
        closeModal();
    }
}

// 키보드 ESC로 모달 닫기
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
