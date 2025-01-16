

const Home = ({categories,onSelected}) => {
  return (
    <div className="detail-list">
      <h1>학습 카테고리</h1>
      {/* 버튼으로 name 값을 만들어죽 */}
      {
        categories.map((obj)=>{
          return <button
                  key={obj.id}
                  onClick={()=>{ onSelected(obj) }}
                  >{obj.name}</button>
        })
      }
    </div>
  );
};

export default Home;