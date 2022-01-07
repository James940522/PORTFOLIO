import "./index.scss";

const Head = () => {
  return (
    <section className="head-section">
      <div className="head-title-box">
        <h1>
          - 정재민 -
          <br />웹 개발자 포트폴리오
        </h1>
      </div>
      <div className="head-contents-box">
        안녕하십니까,
        <br />
        함께 일하고 싶은 프론트 엔드 개발자를 꿈꾸는 정재민 입니다.
        <br />
        사람과 소통하는것을 좋아해 협업을 할때 큰 에너지를 발산합니다.
        <br />
      </div>
      <hr id="head-hr" />
      <button id="head-btn" onClick={() => {}}>
        더 알아보기 ↓
      </button>
    </section>
  );
};

export default Head;
