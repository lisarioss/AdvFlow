import { useEffect, useState } from "react";
import { api } from "../../../services/api";

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

export function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    api.get("/clients")
      .then((response) => {
        console.log(response.data);
        setClients(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
  api.get("/clients")
    .then((response) => {
      console.log("RESPOSTA API:", response.data);
      setClients(response.data);
    })
    .catch((error) => {
      console.error("ERRO:", error);
    });
  }, []);

  return (
    <div>
      <h1>Clientes</h1>

      {clients.length === 0 ? (
        <p>Nenhum cliente encontrado.</p>
      ) : (
        clients.map((client) => (
          <div
            key={client.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{client.name}</h3>
            <p>{client.email}</p>
            <p>{client.phone}</p>
          </div>
        ))
      )}
    </div>
  );
}