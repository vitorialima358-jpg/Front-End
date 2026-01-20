import type Postagem from "./Postagem";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string; // email
  foto: string;
  senha: string;
  postagem?: Postagem[] | null;
}
