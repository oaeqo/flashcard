const mockData = {
  categories: [
    {
      id: 1,
      name: "세계 역사 상식",
      flashcards: [
        { id: 101, question: "미국의 독립 선언서가 발표된 해는?", answer: "1776년", status: "unknown" },
        { id: 102, question: "제2차 세계대전은 몇 년에 끝났나요?", answer: "1945년", status: "unknown" },
        { id: 103, question: "프랑스 혁명이 시작된 해는?", answer: "1789년", status: "unknown" },
        { id: 104, question: "영국의 엘리자베스 1세는 어떤 시대에 왕위에 있었나요?", answer: "르네상스 시대", status: "unknown" },
        { id: 105, question: "로마 제국의 멸망 시기는?", answer: "476년", status: "unknown" },
      ],
    },
    {
      id: 2,
      name: "기본적인 과학 상식",
      flashcards: [
        { id: 201, question: "물의 화학식은 무엇인가요?", answer: "H2O", status: "unknown" },
        { id: 202, question: "태양계에서 가장 큰 행성은?", answer: "목성", status: "unknown" },
        { id: 203, question: "빛의 속도는 초당 몇 킬로미터인가요?", answer: "30만 km", status: "unknown" },
        { id: 204, question: "물체가 지구에서 떨어지면 가속도가 어떻게 되나요?", answer: "지속적으로 증가한다.", status: "unknown" },
        { id: 205, question: "인체에서 가장 큰 장기는?", answer: "피부", status: "unknown" },
      ],
    },
    {
      id: 3,
      name: "세계 지리 상식",
      flashcards: [
        { id: 301, question: "세계에서 가장 큰 대륙은?", answer: "아시아", status: "unknown" },
        { id: 302, question: "세계에서 가장 긴 강은?", answer: "아마존 강", status: "unknown" },
        { id: 303, question: "세계에서 가장 큰 섬은?", answer: "그린란드", status: "unknown" },
        { id: 304, question: "세계에서 가장 높은 산은?", answer: "에베레스트 산", status: "unknown" },
        { id: 305, question: "미국의 수도는?", answer: "워싱턴 D.C.", status: "unknown" },
      ],
    },
    {
      id: 4,
      name: "일상 상식",
      flashcards: [
        { id: 401, question: "전 세계에서 가장 많이 사용되는 언어는?", answer: "영어", status: "unknown" },
        { id: 402, question: "지구에서 가장 가까운 별은?", answer: "태양", status: "unknown" },
        { id: 403, question: "사람이 하루에 필요한 수면 시간은 대체로 얼마인가요?", answer: "7~9시간", status: "unknown" },
        { id: 404, question: "인터넷에서 'www'는 무엇의 약자인가요?", answer: "월드 와이드 웹", status: "unknown" },
        { id: 405, question: "초콜릿의 주요 성분은 무엇인가요?", answer: "카카오", status: "unknown" },
      ],
    },
    {
      id: 5,
      name: "문학과 예술",
      flashcards: [
        { id: 501, question: "셰익스피어의 대표적인 희곡 중 하나는?", answer: "로미오와 줄리엣", status: "unknown" },
        { id: 502, question: "피카소는 어떤 화가였나요?", answer: "추상화가", status: "unknown" },
        { id: 503, question: "세계적인 작곡가인 베토벤의 주요 작품은?", answer: "교향곡 9번", status: "unknown" },
        { id: 504, question: "모나리자는 누구의 작품인가요?", answer: "레오나르도 다 빈치", status: "unknown" },
        { id: 505, question: "프랑스의 대표적인 소설 '레 미제라블'의 저자는?", answer: "빅토르 위고", status: "unknown" },
      ],
    },
  ],
};

export default mockData;