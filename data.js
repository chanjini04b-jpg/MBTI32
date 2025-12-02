// MBTI 32가지 유형 데이터
const mbtiTypes = {
    'INTJ-A': {
        type: 'INTJ-A',
        name: '자신감 있는 전략가',
        category: 'analyst',
        description: '독립적이고 자신감 넘치는 전략적 사고가. 목표 달성을 위해 체계적으로 계획하고 실행합니다.',
        traits: {
            energy: 80,
            nature: 85,
            tactics: 90,
            identity: 85
        },
        strengths: ['전략적 사고', '독립성', '자신감', '혁신성', '결단력'],
        weaknesses: ['감정 표현 부족', '지나친 자신감', '비판적', '사회성 부족'],
        careers: ['과학자', '엔지니어', 'CEO', '전략 컨설턴트', '건축가'],
        relationships: '독립적이지만 깊이 있는 관계를 선호합니다. 지적인 대화를 중요하게 생각합니다.'
    },
    'INTJ-T': {
        type: 'INTJ-T',
        name: '신중한 전략가',
        category: 'analyst',
        description: '신중하고 완벽주의적인 전략가. 끊임없이 자기 개선을 추구하며 목표를 향해 나아갑니다.',
        traits: {
            energy: 75,
            nature: 85,
            tactics: 90,
            identity: 60
        },
        strengths: ['분석력', '신중함', '완벽주의', '자기 성찰', '체계성'],
        weaknesses: ['과도한 걱정', '자기 비판', '우유부단', '스트레스 민감'],
        careers: ['연구원', '데이터 분석가', '프로젝트 매니저', '시스템 설계자'],
        relationships: '신뢰를 쌓는 데 시간이 걸리지만 깊은 유대감을 형성합니다.'
    },
    'INTP-A': {
        type: 'INTP-A',
        name: '자신감 있는 논리학자',
        category: 'analyst',
        description: '호기심 많고 자신감 있는 사색가. 복잡한 문제를 논리적으로 분석하고 해결합니다.',
        traits: {
            energy: 70,
            nature: 90,
            tactics: 75,
            identity: 85
        },
        strengths: ['논리적 사고', '창의성', '객관성', '분석력', '적응력'],
        weaknesses: ['실용성 부족', '감정 무시', '산만함', '사회성 부족'],
        careers: ['철학자', '프로그래머', '수학자', '물리학자', '연구원'],
        relationships: '지적 호기심을 공유할 수 있는 관계를 선호합니다.'
    },
    'INTP-T': {
        type: 'INTP-T',
        name: '신중한 논리학자',
        category: 'analyst',
        description: '신중하고 사색적인 분석가. 완벽한 이론을 추구하며 끊임없이 의문을 제기합니다.',
        traits: {
            energy: 65,
            nature: 90,
            tactics: 70,
            identity: 55
        },
        strengths: ['깊이 있는 사고', '겸손', '자기 개선', '논리성', '창의성'],
        weaknesses: ['우유부단', '과도한 분석', '자신감 부족', '실행력 부족'],
        careers: ['학자', '이론 물리학자', '소프트웨어 개발자', '작가'],
        relationships: '이해심 깊은 파트너와 깊이 있는 대화를 나누길 원합니다.'
    },
    'ENTJ-A': {
        type: 'ENTJ-A',
        name: '대담한 지휘관',
        category: 'analyst',
        description: '카리스마 있고 대담한 리더. 효율성과 성과를 중시하며 목표를 향해 팀을 이끕니다.',
        traits: {
            energy: 90,
            nature: 85,
            tactics: 95,
            identity: 90
        },
        strengths: ['리더십', '결단력', '효율성', '전략적 사고', '자신감'],
        weaknesses: ['무감각', '지배적', '인내심 부족', '비판적'],
        careers: ['CEO', '기업가', '변호사', '정치인', '군 장교'],
        relationships: '동등한 파트너십과 도전적인 관계를 선호합니다.'
    },
    'ENTJ-T': {
        type: 'ENTJ-T',
        name: '신중한 지휘관',
        category: 'analyst',
        description: '야심 있지만 신중한 리더. 성과를 추구하면서도 자기 개선을 게을리하지 않습니다.',
        traits: {
            energy: 85,
            nature: 85,
            tactics: 90,
            identity: 65
        },
        strengths: ['목표 지향적', '책임감', '개선 의지', '전략성', '리더십'],
        weaknesses: ['과도한 압박', '자기 비판', '스트레스', '완벽주의'],
        careers: ['경영 컨설턴트', '프로젝트 매니저', '금융 애널리스트', '전략가'],
        relationships: '성장을 함께할 수 있는 파트너를 찾습니다.'
    },
    'ENTP-A': {
        type: 'ENTP-A',
        name: '대담한 변론가',
        category: 'analyst',
        description: '창의적이고 대담한 혁신가. 지적 토론을 즐기며 새로운 아이디어를 탐구합니다.',
        traits: {
            energy: 85,
            nature: 90,
            tactics: 70,
            identity: 85
        },
        strengths: ['창의성', '토론 능력', '적응력', '카리스마', '지적 호기심'],
        weaknesses: ['집중력 부족', '논쟁적', '무감각', '계획성 부족'],
        careers: ['기업가', '발명가', '마케터', '변호사', '컨설턴트'],
        relationships: '지적으로 자극적이고 모험적인 관계를 선호합니다.'
    },
    'ENTP-T': {
        type: 'ENTP-T',
        name: '신중한 변론가',
        category: 'analyst',
        description: '창의적이지만 신중한 혁신가. 새로운 가능성을 탐구하면서도 신중하게 접근합니다.',
        traits: {
            energy: 80,
            nature: 90,
            tactics: 65,
            identity: 60
        },
        strengths: ['창의적 사고', '개방성', '적응력', '문제 해결', '통찰력'],
        weaknesses: ['우유부단', '과도한 분석', '산만함', '스트레스 민감'],
        careers: ['혁신 컨설턴트', 'UX 디자이너', '연구 개발자', '작가'],
        relationships: '이해심과 지적 교류를 모두 중시합니다.'
    },
    'INFJ-A': {
        type: 'INFJ-A',
        name: '자신감 있는 옹호자',
        category: 'diplomat',
        description: '이상주의적이고 자신감 있는 조력자. 타인을 돕고 세상을 더 나은 곳으로 만들고자 합니다.',
        traits: {
            energy: 70,
            nature: 75,
            tactics: 85,
            identity: 85
        },
        strengths: ['통찰력', '이상주의', '공감 능력', '창의성', '헌신'],
        weaknesses: ['완벽주의', '비현실적', '번아웃', '비판 민감'],
        careers: ['상담사', '작가', '심리학자', '교육자', '사회복지사'],
        relationships: '깊고 의미 있는 관계를 추구하며 헌신적입니다.'
    },
    'INFJ-T': {
        type: 'INFJ-T',
        name: '신중한 옹호자',
        category: 'diplomat',
        description: '이상을 품되 신중한 조력자. 타인을 돕되 자신의 한계도 인식합니다.',
        traits: {
            energy: 65,
            nature: 75,
            tactics: 85,
            identity: 55
        },
        strengths: ['깊은 공감', '자기 성찰', '섬세함', '통찰력', '헌신'],
        weaknesses: ['과도한 걱정', '번아웃', '자기 희생', '우유부단'],
        careers: ['심리 상담사', '비영리 활동가', '작가', '영적 지도자'],
        relationships: '정서적 안정과 깊은 이해를 나눌 수 있는 관계를 원합니다.'
    },
    'INFP-A': {
        type: 'INFP-A',
        name: '자신감 있는 중재자',
        category: 'diplomat',
        description: '이상주의적이고 자신감 있는 예술가. 자신의 가치관을 따르며 창의적으로 표현합니다.',
        traits: {
            energy: 65,
            nature: 80,
            tactics: 70,
            identity: 85
        },
        strengths: ['창의성', '공감 능력', '개방성', '이상주의', '적응력'],
        weaknesses: ['비현실적', '우유부단', '자기 비판', '실용성 부족'],
        careers: ['작가', '예술가', '상담사', '음악가', '디자이너'],
        relationships: '진정성과 깊은 감정적 연결을 중시합니다.'
    },
    'INFP-T': {
        type: 'INFP-T',
        name: '신중한 중재자',
        category: 'diplomat',
        description: '섬세하고 신중한 이상주의자. 자신의 가치를 지키되 끊임없이 성찰합니다.',
        traits: {
            energy: 60,
            nature: 80,
            tactics: 65,
            identity: 50
        },
        strengths: ['깊은 감수성', '공감', '창의성', '겸손', '성찰'],
        weaknesses: ['과도한 자기 비판', '우울', '회피', '우유부단'],
        careers: ['시인', '치료사', '사회복지사', '예술가', '작곡가'],
        relationships: '깊은 이해와 정서적 지지를 주고받는 관계를 원합니다.'
    },
    'ENFJ-A': {
        type: 'ENFJ-A',
        name: '대담한 선도자',
        category: 'diplomat',
        description: '카리스마 있고 영감을 주는 리더. 타인의 잠재력을 이끌어내고 격려합니다.',
        traits: {
            energy: 90,
            nature: 75,
            tactics: 85,
            identity: 90
        },
        strengths: ['리더십', '카리스마', '공감 능력', '의사소통', '열정'],
        weaknesses: ['과도한 이타심', '비판 민감', '번아웃', '결정 회피'],
        careers: ['교사', '코치', 'HR 매니저', '정치인', '이벤트 기획자'],
        relationships: '따뜻하고 지지적인 관계를 만들며 헌신적입니다.'
    },
    'ENFJ-T': {
        type: 'ENFJ-T',
        name: '신중한 선도자',
        category: 'diplomat',
        description: '공감 능력이 뛰어나지만 신중한 리더. 타인을 돕되 자신의 한계도 고려합니다.',
        traits: {
            energy: 85,
            nature: 75,
            tactics: 85,
            identity: 60
        },
        strengths: ['깊은 공감', '겸손', '조화', '의사소통', '헌신'],
        weaknesses: ['과도한 책임감', '자기 희생', '번아웃', '걱정'],
        careers: ['상담사', '사회복지사', '비영리 리더', '교육자'],
        relationships: '상호 지지와 성장을 함께할 수 있는 관계를 추구합니다.'
    },
    'ENFP-A': {
        type: 'ENFP-A',
        name: '대담한 활동가',
        category: 'diplomat',
        description: '열정적이고 자유로운 영혼. 새로운 경험과 가능성을 탐구하며 타인에게 영감을 줍니다.',
        traits: {
            energy: 90,
            nature: 80,
            tactics: 60,
            identity: 85
        },
        strengths: ['열정', '창의성', '사교성', '낙관주의', '적응력'],
        weaknesses: ['집중력 부족', '계획성 부족', '감정 기복', '과도한 열정'],
        careers: ['마케터', '배우', '이벤트 기획자', '기업가', '강사'],
        relationships: '열정적이고 자유로우며 깊은 유대감을 형성합니다.'
    },
    'ENFP-T': {
        type: 'ENFP-T',
        name: '신중한 활동가',
        category: 'diplomat',
        description: '열정적이지만 신중한 탐험가. 새로운 가능성을 찾되 자기 성찰도 게을리하지 않습니다.',
        traits: {
            energy: 85,
            nature: 80,
            tactics: 55,
            identity: 55
        },
        strengths: ['창의성', '공감', '개방성', '열정', '성찰'],
        weaknesses: ['우유부단', '과도한 걱정', '산만함', '자기 의심'],
        careers: ['작가', '상담사', '크리에이터', '컨설턴트', 'HR 전문가'],
        relationships: '정서적 깊이와 자유로움을 동시에 추구합니다.'
    },
    'ISTJ-A': {
        type: 'ISTJ-A',
        name: '자신감 있는 현실주의자',
        category: 'sentinel',
        description: '신뢰할 수 있고 체계적인 실무자. 책임감 있게 일을 완수하며 전통과 질서를 중시합니다.',
        traits: {
            energy: 60,
            nature: 70,
            tactics: 95,
            identity: 85
        },
        strengths: ['책임감', '체계성', '신뢰성', '성실함', '실용성'],
        weaknesses: ['경직성', '감정 표현 부족', '변화 저항', '완고함'],
        careers: ['회계사', '관리자', '엔지니어', '군인', '법조인'],
        relationships: '안정적이고 신뢰할 수 있는 관계를 선호합니다.'
    },
    'ISTJ-T': {
        type: 'ISTJ-T',
        name: '신중한 현실주의자',
        category: 'sentinel',
        description: '책임감 있고 신중한 실무자. 완벽하게 일을 처리하고자 하며 끊임없이 개선합니다.',
        traits: {
            energy: 55,
            nature: 70,
            tactics: 95,
            identity: 55
        },
        strengths: ['세심함', '책임감', '신뢰성', '완벽주의', '성실함'],
        weaknesses: ['과도한 걱정', '완벽주의', '경직성', '스트레스'],
        careers: ['품질 관리자', '감사', '데이터 분석가', '행정 전문가'],
        relationships: '안정성과 신뢰를 바탕으로 관계를 쌓습니다.'
    },
    'ISFJ-A': {
        type: 'ISFJ-A',
        name: '자신감 있는 수호자',
        category: 'sentinel',
        description: '헌신적이고 따뜻한 보호자. 타인을 돌보며 조화로운 환경을 만듭니다.',
        traits: {
            energy: 65,
            nature: 65,
            tactics: 90,
            identity: 85
        },
        strengths: ['헌신', '배려', '책임감', '실용성', '인내심'],
        weaknesses: ['자기 주장 부족', '과도한 희생', '변화 저항', '비판 민감'],
        careers: ['간호사', '교사', '사서', '행정가', '영양사'],
        relationships: '헌신적이고 안정적인 관계를 형성합니다.'
    },
    'ISFJ-T': {
        type: 'ISFJ-T',
        name: '신중한 수호자',
        category: 'sentinel',
        description: '섬세하고 헌신적인 돌봄이. 타인을 위해 노력하되 자신의 필요도 인식합니다.',
        traits: {
            energy: 60,
            nature: 65,
            tactics: 90,
            identity: 50
        },
        strengths: ['깊은 배려', '섬세함', '책임감', '인내', '헌신'],
        weaknesses: ['과도한 걱정', '자기 희생', '스트레스', '자신감 부족'],
        careers: ['상담사', '사회복지사', '의료 전문가', '보육교사'],
        relationships: '깊은 신뢰와 안정성을 추구하며 헌신적입니다.'
    },
    'ESTJ-A': {
        type: 'ESTJ-A',
        name: '대담한 경영자',
        category: 'sentinel',
        description: '효율적이고 실용적인 관리자. 조직을 이끌고 질서를 확립합니다.',
        traits: {
            energy: 85,
            nature: 70,
            tactics: 95,
            identity: 90
        },
        strengths: ['리더십', '조직력', '실용성', '결단력', '책임감'],
        weaknesses: ['경직성', '감정 무시', '지배적', '완고함'],
        careers: ['관리자', 'CEO', '경찰관', '군 장교', '프로젝트 매니저'],
        relationships: '안정적이고 전통적인 관계를 선호합니다.'
    },
    'ESTJ-T': {
        type: 'ESTJ-T',
        name: '신중한 경영자',
        category: 'sentinel',
        description: '체계적이지만 신중한 리더. 효율성을 추구하되 자기 개선도 중요시합니다.',
        traits: {
            energy: 80,
            nature: 70,
            tactics: 95,
            identity: 60
        },
        strengths: ['조직력', '책임감', '개선 의지', '실용성', '신뢰성'],
        weaknesses: ['과도한 압박', '완벽주의', '스트레스', '경직성'],
        careers: ['운영 관리자', '품질 관리자', '행정 전문가', '감독관'],
        relationships: '안정성과 상호 존중을 기반으로 관계를 형성합니다.'
    },
    'ESFJ-A': {
        type: 'ESFJ-A',
        name: '대담한 집정관',
        category: 'sentinel',
        description: '사교적이고 헌신적인 조력자. 타인을 돌보며 조화로운 공동체를 만듭니다.',
        traits: {
            energy: 90,
            nature: 65,
            tactics: 90,
            identity: 85
        },
        strengths: ['사교성', '헌신', '조화', '책임감', '배려'],
        weaknesses: ['비판 민감', '자기 주장 부족', '과도한 희생', '변화 저항'],
        careers: ['간호사', '교사', '이벤트 기획자', 'HR 전문가', '영업사원'],
        relationships: '따뜻하고 지지적이며 사회적 관계를 중시합니다.'
    },
    'ESFJ-T': {
        type: 'ESFJ-T',
        name: '신중한 집정관',
        category: 'sentinel',
        description: '배려심 깊지만 신중한 돌봄이. 타인을 돕되 자신의 감정도 돌아봅니다.',
        traits: {
            energy: 85,
            nature: 65,
            tactics: 90,
            identity: 55
        },
        strengths: ['깊은 배려', '조화', '책임감', '섬세함', '헌신'],
        weaknesses: ['과도한 걱정', '비판 민감', '자기 희생', '스트레스'],
        careers: ['상담사', '사회복지사', '고객 서비스', '교육자'],
        relationships: '정서적 안정과 상호 지지를 추구합니다.'
    },
    'ISTP-A': {
        type: 'ISTP-A',
        name: '대담한 장인',
        category: 'explorer',
        description: '실용적이고 대담한 문제 해결사. 손으로 직접 만들고 실험하며 배웁니다.',
        traits: {
            energy: 55,
            nature: 80,
            tactics: 65,
            identity: 85
        },
        strengths: ['실용성', '적응력', '문제 해결', '침착함', '기술력'],
        weaknesses: ['감정 표현 부족', '무감각', '위험 감수', '계획성 부족'],
        careers: ['기술자', '정비사', '엔지니어', '파일럿', '운동선수'],
        relationships: '독립적이지만 충성스러우며 실용적인 애정을 표현합니다.'
    },
    'ISTP-T': {
        type: 'ISTP-T',
        name: '신중한 장인',
        category: 'explorer',
        description: '실용적이지만 신중한 탐험가. 문제를 해결하되 결과를 깊이 고민합니다.',
        traits: {
            energy: 50,
            nature: 80,
            tactics: 60,
            identity: 55
        },
        strengths: ['문제 해결', '세심함', '적응력', '실용성', '분석력'],
        weaknesses: ['우유부단', '과도한 분석', '자신감 부족', '스트레스'],
        careers: ['품질 검사원', '기술 분석가', '연구 기술자', '디자이너'],
        relationships: '신뢰를 쌓는 데 시간이 걸리지만 충실합니다.'
    },
    'ISFP-A': {
        type: 'ISFP-A',
        name: '대담한 모험가',
        category: 'explorer',
        description: '예술적이고 자유로운 영혼. 아름다움을 추구하며 순간을 즐깁니다.',
        traits: {
            energy: 60,
            nature: 75,
            tactics: 60,
            identity: 85
        },
        strengths: ['예술성', '공감', '적응력', '개방성', '창의성'],
        weaknesses: ['계획성 부족', '자기 주장 부족', '비판 민감', '우유부단'],
        careers: ['예술가', '디자이너', '음악가', '사진작가', '요리사'],
        relationships: '자유롭고 진정성 있는 관계를 추구합니다.'
    },
    'ISFP-T': {
        type: 'ISFP-T',
        name: '신중한 모험가',
        category: 'explorer',
        description: '섬세하고 예술적인 탐험가. 아름다움을 추구하되 자기 성찰도 중시합니다.',
        traits: {
            energy: 55,
            nature: 75,
            tactics: 55,
            identity: 50
        },
        strengths: ['깊은 감수성', '예술성', '공감', '겸손', '창의성'],
        weaknesses: ['자기 의심', '과도한 걱정', '우유부단', '스트레스'],
        careers: ['치료사', '예술가', '디자이너', '작곡가', '공예가'],
        relationships: '깊은 정서적 연결과 자유로움을 모두 원합니다.'
    },
    'ESTP-A': {
        type: 'ESTP-A',
        name: '대담한 사업가',
        category: 'explorer',
        description: '에너지 넘치고 대담한 행동가. 순간을 즐기며 위험을 두려워하지 않습니다.',
        traits: {
            energy: 95,
            nature: 80,
            tactics: 60,
            identity: 90
        },
        strengths: ['행동력', '사교성', '적응력', '문제 해결', '자신감'],
        weaknesses: ['무모함', '계획성 부족', '감정 무시', '인내심 부족'],
        careers: ['영업사원', '기업가', '운동선수', '구급대원', '연예인'],
        relationships: '역동적이고 재미있는 관계를 선호합니다.'
    },
    'ESTP-T': {
        type: 'ESTP-T',
        name: '신중한 사업가',
        category: 'explorer',
        description: '에너지 넘치지만 신중한 행동가. 순간을 즐기되 결과도 고려합니다.',
        traits: {
            energy: 90,
            nature: 80,
            tactics: 55,
            identity: 60
        },
        strengths: ['적응력', '행동력', '사교성', '문제 해결', '실용성'],
        weaknesses: ['우유부단', '계획성 부족', '스트레스', '과도한 분석'],
        careers: ['이벤트 매니저', '영업 컨설턴트', '프로모터', '코치'],
        relationships: '재미와 안정성을 모두 추구합니다.'
    },
    'ESFP-A': {
        type: 'ESFP-A',
        name: '대담한 연예인',
        category: 'explorer',
        description: '활기차고 즐거움을 사랑하는 엔터테이너. 주변을 밝게 만들며 순간을 즐깁니다.',
        traits: {
            energy: 95,
            nature: 75,
            tactics: 55,
            identity: 90
        },
        strengths: ['사교성', '낙관주의', '열정', '공감', '적응력'],
        weaknesses: ['계획성 부족', '집중력 부족', '비판 민감', '충동적'],
        careers: ['연예인', '이벤트 기획자', '강사', '영업사원', '요리사'],
        relationships: '즐겁고 열정적인 관계를 만들며 헌신적입니다.'
    },
    'ESFP-T': {
        type: 'ESFP-T',
        name: '신중한 연예인',
        category: 'explorer',
        description: '활기차지만 신중한 사교가. 즐거움을 추구하되 타인의 반응도 신경 씁니다.',
        traits: {
            energy: 90,
            nature: 75,
            tactics: 50,
            identity: 55
        },
        strengths: ['공감', '사교성', '적응력', '열정', '배려'],
        weaknesses: ['비판 민감', '우유부단', '계획성 부족', '과도한 걱정'],
        careers: ['상담사', '고객 서비스', '엔터테이너', '사회복지사'],
        relationships: '즐거움과 정서적 안정을 모두 중시합니다.'
    }
};

// MBTI 테스트 질문 (40개)
const testQuestions = [
    // E vs I (외향 vs 내향)
    { question: '파티나 모임에서 에너지를 얻는다', dimension: 'EI', direction: 1 },
    { question: '혼자 있는 시간이 필요하고 그것이 재충전이 된다', dimension: 'EI', direction: -1 },
    { question: '새로운 사람들을 만나는 것을 즐긴다', dimension: 'EI', direction: 1 },
    { question: '깊이 있는 일대일 대화를 선호한다', dimension: 'EI', direction: -1 },
    { question: '여러 사람과 동시에 어울리는 것이 편하다', dimension: 'EI', direction: 1 },
    
    // S vs N (감각 vs 직관)
    { question: '현실적이고 구체적인 사실에 집중한다', dimension: 'SN', direction: -1 },
    { question: '가능성과 미래에 대해 생각하는 것을 좋아한다', dimension: 'SN', direction: 1 },
    { question: '세부 사항과 디테일을 중요하게 여긴다', dimension: 'SN', direction: -1 },
    { question: '새로운 아이디어와 이론에 흥미를 느낀다', dimension: 'SN', direction: 1 },
    { question: '경험과 실용성을 중시한다', dimension: 'SN', direction: -1 },
    
    // T vs F (사고 vs 감정)
    { question: '논리와 객관성을 중시한다', dimension: 'TF', direction: -1 },
    { question: '타인의 감정을 먼저 고려한다', dimension: 'TF', direction: 1 },
    { question: '공정성과 원칙이 중요하다', dimension: 'TF', direction: -1 },
    { question: '조화와 관계가 중요하다', dimension: 'TF', direction: 1 },
    { question: '비판적 분석을 잘한다', dimension: 'TF', direction: -1 },
    
    // J vs P (판단 vs 인식)
    { question: '계획을 세우고 그대로 따르는 것을 선호한다', dimension: 'JP', direction: -1 },
    { question: '유연하게 대처하고 즉흥적인 것을 좋아한다', dimension: 'JP', direction: 1 },
    { question: '일을 미리미리 끝내는 편이다', dimension: 'JP', direction: -1 },
    { question: '마감 직전에 집중력이 높아진다', dimension: 'JP', direction: 1 },
    { question: '체계적이고 조직적인 것을 선호한다', dimension: 'JP', direction: -1 },
    
    // A vs T (적극 vs 신중) - 추가 질문들
    { question: '스트레스 상황에서도 침착함을 유지한다', dimension: 'AT', direction: 1 },
    { question: '자주 걱정하고 불안해한다', dimension: 'AT', direction: -1 },
    { question: '자신의 능력에 대해 확신이 있다', dimension: 'AT', direction: 1 },
    { question: '실수에 대해 오래 고민한다', dimension: 'AT', direction: -1 },
    { question: '비판을 건설적으로 받아들인다', dimension: 'AT', direction: 1 },
    
    // 추가 심화 질문들
    { question: '대화할 때 먼저 말을 꺼내는 편이다', dimension: 'EI', direction: 1 },
    { question: '말하기 전에 충분히 생각한다', dimension: 'EI', direction: -1 },
    { question: '추상적인 개념을 다루는 것이 편하다', dimension: 'SN', direction: 1 },
    { question: '단계별로 차근차근 진행하는 것을 선호한다', dimension: 'SN', direction: -1 },
    { question: '의사결정 시 머리로 판단한다', dimension: 'TF', direction: -1 },
    { question: '의사결정 시 마음이 중요하다', dimension: 'TF', direction: 1 },
    { question: '정리정돈이 잘 되어 있어야 한다', dimension: 'JP', direction: -1 },
    { question: '다양한 옵션을 열어두는 것을 선호한다', dimension: 'JP', direction: 1 },
    { question: '자신의 선택에 확신을 가진다', dimension: 'AT', direction: 1 },
    { question: '결정을 내린 후에도 재고하는 경우가 많다', dimension: 'AT', direction: -1 },
    { question: '위험을 감수하는 것을 두려워하지 않는다', dimension: 'AT', direction: 1 },
    { question: '안전한 선택을 선호한다', dimension: 'AT', direction: -1 },
    { question: '타인의 평가에 크게 신경 쓰지 않는다', dimension: 'AT', direction: 1 },
    { question: '타인의 의견을 중요하게 여긴다', dimension: 'AT', direction: -1 },
    { question: '변화와 불확실성을 즐긴다', dimension: 'AT', direction: 1 }
];
