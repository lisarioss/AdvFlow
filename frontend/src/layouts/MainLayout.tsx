import { Link, Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <aside
        style={{
          width: "250px",
          padding: "20px",
          borderRight: "1px solid #ddd",
        }}
      >
        <h2>⚖️ AdvFlow</h2>

        <nav>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
            }}
          >
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>

            <li>
              <Link to="/clientes">Clientes</Link>
            </li>

            <li>
              <Link to="/processos">Processos</Link>
            </li>

            <li>
              <Link to="/financeiro">Financeiro</Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main
        style={{
          flex: 1,
          padding: "20px",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}