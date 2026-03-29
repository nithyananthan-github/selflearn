import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>SelfLearn</h1>
      <h2>Grade 4 Math Practice</h2>

      <button onClick={() => navigate("/practice")}>
        Start Practice
      </button>
    </div>
  );
}

export default Home;