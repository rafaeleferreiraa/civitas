import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Layout({ children }) {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      <aside style={{
        width: "220px",
        background: "#1e293b",
        color: "white",
        padding: "20px"
      }}>
        <h2>Civitas</h2>
        <button onClick={handleLogout} style={{ marginTop: "20px" }}>
          Sair
        </button>
      </aside>

      <main style={{ flex: 1, padding: "30px" }}>
        {children}
      </main>

    </div>
  );
}

export default Layout;