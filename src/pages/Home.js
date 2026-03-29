import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <div className="card">
        <h1>SelfLearn</h1>
        <h2>Grade 4 Math Practice</h2>
        <button onClick={() => navigate("/practice")}>Start Practice</button>
      </div>
    </div>
  );
}

export default Home;