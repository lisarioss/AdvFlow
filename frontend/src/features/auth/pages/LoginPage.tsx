import { Link } from "react-router-dom";

export function LoginPage() {
  return (
    <div>
      <h1>AdvFlow ⚖️</h1>
      <p>Sistema de Gestão Jurídica</p>

      <Link to="/dashboard">
        Entrar
      </Link>
    </div>
  );
}