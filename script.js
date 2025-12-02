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

// 결과 저장 (PDF - 한글 지원)
async function saveResult() {
    const myMBTI = localStorage.getItem('myMBTI');
    if (!myMBTI) {
        alert('저장할 결과가 없습니다.');
        return;
    }
    
    const type = mbtiTypes[myMBTI];
    const date = new Date().toLocaleDateString('ko-KR');
    
    // PDF용 임시 컨테이너 생성
    const pdfContainer = document.createElement('div');
    pdfContainer.style.cssText = `
        position: absolute;
        left: -9999px;
        width: 794px;
        padding: 40px;
        background: white;
        font-family: 'Malgun Gothic', '맑은 고딕', sans-serif;
    `;
    
    pdfContainer.innerHTML = `
        <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="font-size: 32px; color: #1f2937; margin-bottom: 10px;">MBTI 32가지 유형 분석</h1>
            <p style="color: #6b7280; font-size: 14px;">검사일: ${date}</p>
        </div>
        
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
            <div style="font-size: 36px; font-weight: bold; margin-bottom: 8px;">${type.type}</div>
            <div style="font-size: 20px;">${type.name}</div>
        </div>
        
        <div style="margin-bottom: 25px; line-height: 1.8; font-size: 15px; color: #374151;">
            ${type.description}
        </div>
        
        <div style="margin-bottom: 25px;">
            <h2 style="font-size: 20px; color: #1f2937; margin-bottom: 15px; border-bottom: 2px solid #6366f1; padding-bottom: 8px;">특성 점수</h2>
            ${Object.entries({
                '에너지 (Energy)': type.traits.energy,
                '본성 (Nature)': type.traits.nature,
                '전술 (Tactics)': type.traits.tactics,
                '정체성 (Identity)': type.traits.identity
            }).map(([label, value]) => `
                <div style="margin-bottom: 12px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span style="font-weight: 600; color: #374151;">${label}</span>
                        <span style="color: #6366f1; font-weight: bold;">${value}%</span>
                    </div>
                    <div style="background: #e5e7eb; height: 10px; border-radius: 5px; overflow: hidden;">
                        <div style="background: linear-gradient(90deg, #6366f1, #8b5cf6); height: 100%; width: ${value}%; border-radius: 5px;"></div>
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">
            <div>
                <h2 style="font-size: 20px; color: #10b981; margin-bottom: 15px; border-bottom: 2px solid #10b981; padding-bottom: 8px;">💪 강점</h2>
                <ul style="line-height: 2; padding-left: 20px; color: #374151;">
                    ${type.strengths.map(s => `<li>${s}</li>`).join('')}
                </ul>
            </div>
            <div>
                <h2 style="font-size: 20px; color: #f59e0b; margin-bottom: 15px; border-bottom: 2px solid #f59e0b; padding-bottom: 8px;">⚠️ 주의할 점</h2>
                <ul style="line-height: 2; padding-left: 20px; color: #374151;">
                    ${type.weaknesses.map(w => `<li>${w}</li>`).join('')}
                </ul>
            </div>
        </div>
        
        <div style="background: #f9fafb; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
            <h2 style="font-size: 20px; color: #1f2937; margin-bottom: 12px;">💼 추천 직업</h2>
            <p style="line-height: 1.8; color: #374151; font-size: 15px;">
                ${type.careers.join(' · ')}
            </p>
        </div>
        
        <div style="background: #f9fafb; padding: 20px; border-radius: 12px;">
            <h2 style="font-size: 20px; color: #1f2937; margin-bottom: 12px;">❤️ 관계 특성</h2>
            <p style="line-height: 1.8; color: #374151; font-size: 15px;">
                ${type.relationships}
            </p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px;">
            MBTI 32 Type Analysis © 2025
        </div>
    `;
    
    document.body.appendChild(pdfContainer);
    
    try {
        // html2canvas로 이미지 생성
        const canvas = await html2canvas(pdfContainer, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff'
        });
        
        const imgData = canvas.toDataURL('image/png');
        
        // PDF 생성
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        let heightLeft = imgHeight;
        let position = 0;
        
        // 첫 페이지
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= 297; // A4 height in mm
        
        // 여러 페이지가 필요한 경우
        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= 297;
        }
        
        // PDF 저장
        pdf.save(`MBTI_결과_${type.type}_${date.replace(/\./g, '_').replace(/\s/g, '')}.pdf`);
        alert('PDF 파일로 저장되었습니다!');
    } catch (error) {
        console.error('PDF 생성 오류:', error);
        alert('PDF 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
        // 임시 컨테이너 제거
        document.body.removeChild(pdfContainer);
    }
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

// 유형 정보 저장 (PDF - 한글 지원)
async function saveTypeInfo() {
    if (!currentSelectedType) {
        alert('저장할 유형이 선택되지 않았습니다.');
        return;
    }
    
    const type = mbtiTypes[currentSelectedType];
    const date = new Date().toLocaleDateString('ko-KR');
    
    // PDF용 임시 컨테이너 생성
    const pdfContainer = document.createElement('div');
    pdfContainer.style.cssText = `
        position: absolute;
        left: -9999px;
        width: 794px;
        padding: 40px;
        background: white;
        font-family: 'Malgun Gothic', '맑은 고딕', sans-serif;
    `;
    
    pdfContainer.innerHTML = `
        <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="font-size: 32px; color: #1f2937; margin-bottom: 10px;">MBTI 32가지 유형 정보</h1>
            <p style="color: #6b7280; font-size: 14px;">날짜: ${date}</p>
        </div>
        
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
            <div style="font-size: 36px; font-weight: bold; margin-bottom: 8px;">${type.type}</div>
            <div style="font-size: 20px;">${type.name}</div>
        </div>
        
        <div style="margin-bottom: 25px; line-height: 1.8; font-size: 15px; color: #374151;">
            ${type.description}
        </div>
        
        <div style="margin-bottom: 25px;">
            <h2 style="font-size: 20px; color: #1f2937; margin-bottom: 15px; border-bottom: 2px solid #6366f1; padding-bottom: 8px;">특성 점수</h2>
            ${Object.entries({
                '에너지 (Energy)': type.traits.energy,
                '본성 (Nature)': type.traits.nature,
                '전술 (Tactics)': type.traits.tactics,
                '정체성 (Identity)': type.traits.identity
            }).map(([label, value]) => `
                <div style="margin-bottom: 12px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span style="font-weight: 600; color: #374151;">${label}</span>
                        <span style="color: #6366f1; font-weight: bold;">${value}%</span>
                    </div>
                    <div style="background: #e5e7eb; height: 10px; border-radius: 5px; overflow: hidden;">
                        <div style="background: linear-gradient(90deg, #6366f1, #8b5cf6); height: 100%; width: ${value}%; border-radius: 5px;"></div>
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">
            <div>
                <h2 style="font-size: 20px; color: #10b981; margin-bottom: 15px; border-bottom: 2px solid #10b981; padding-bottom: 8px;">💪 강점</h2>
                <ul style="line-height: 2; padding-left: 20px; color: #374151;">
                    ${type.strengths.map(s => `<li>${s}</li>`).join('')}
                </ul>
            </div>
            <div>
                <h2 style="font-size: 20px; color: #f59e0b; margin-bottom: 15px; border-bottom: 2px solid #f59e0b; padding-bottom: 8px;">⚠️ 주의할 점</h2>
                <ul style="line-height: 2; padding-left: 20px; color: #374151;">
                    ${type.weaknesses.map(w => `<li>${w}</li>`).join('')}
                </ul>
            </div>
        </div>
        
        <div style="background: #f9fafb; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
            <h2 style="font-size: 20px; color: #1f2937; margin-bottom: 12px;">💼 추천 직업</h2>
            <p style="line-height: 1.8; color: #374151; font-size: 15px;">
                ${type.careers.join(' · ')}
            </p>
        </div>
        
        <div style="background: #f9fafb; padding: 20px; border-radius: 12px;">
            <h2 style="font-size: 20px; color: #1f2937; margin-bottom: 12px;">❤️ 관계 특성</h2>
            <p style="line-height: 1.8; color: #374151; font-size: 15px;">
                ${type.relationships}
            </p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px;">
            MBTI 32 Type Analysis © 2025
        </div>
    `;
    
    document.body.appendChild(pdfContainer);
    
    try {
        // html2canvas로 이미지 생성
        const canvas = await html2canvas(pdfContainer, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff'
        });
        
        const imgData = canvas.toDataURL('image/png');
        
        // PDF 생성
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        let heightLeft = imgHeight;
        let position = 0;
        
        // 첫 페이지
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= 297; // A4 height in mm
        
        // 여러 페이지가 필요한 경우
        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= 297;
        }
        
        // PDF 저장
        pdf.save(`MBTI_유형_${type.type}_${date.replace(/\./g, '_').replace(/\s/g, '')}.pdf`);
        alert('PDF 파일로 저장되었습니다!');
    } catch (error) {
        console.error('PDF 생성 오류:', error);
        alert('PDF 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
        // 임시 컨테이너 제거
        document.body.removeChild(pdfContainer);
    }
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
