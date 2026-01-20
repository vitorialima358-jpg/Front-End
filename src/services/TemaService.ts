import api from "./api";
import type Tema from "../models/Tema";

export async function buscarTemas(): Promise<Tema[]> {
  const response = await api.get("/temas");
  return response.data;
}