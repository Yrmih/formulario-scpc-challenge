"use client";
// Table,
// TableBody,
// TableCell,
// TableHead,
// TableHeader,
// TableRow,
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button"; 
import Link from "next/link";
import { getCapacitacoes } from "../../services/api/capacitacao/getCapacitacoes";
import { Capacitacao } from "../interfaces/Capacitacao";

export default function RelatorioCapacitacoes() {
  const [dados, setDados] = useState<Capacitacao[]>([]);

  useEffect(() => {
    const buscarCapacitacoes = async () => {
      try {
        const response = await getCapacitacoes();
        if (Array.isArray(response.content)) {
          setDados(response.content);
        } else {
          console.error("Erro: resposta.content não é array");
        }
      } catch (error) {
        console.error("Erro ao buscar capacitações:", error);
      }
    };

    buscarCapacitacoes();
  }, []);

  return (
    <div className="flex justify-center items-start p-4">
      <div className="w-full max-w-7xl bg-white rounded-md shadow-md p-6 overflow-auto">
        <h1 className="text-2xl font-bold mb-6">Tabela</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Diretoria</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>Carga Horária</TableHead>
              <TableHead>Instituição</TableHead>
              <TableHead>Início</TableHead>
              <TableHead>Fim</TableHead>
              <TableHead>Expedição</TableHead>
              <TableHead>Situação</TableHead>
              <TableHead>Certificado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dados.map((evento, index) => (
              <TableRow key={evento.id || index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{evento.diretoria?.nome || "—"}</TableCell>
                <TableCell>{evento.nome}</TableCell>
                <TableCell>{evento.cargaHorariaEstimada}</TableCell>
                <TableCell>{evento.nomeInstituicao}</TableCell>
                <TableCell>
                  {evento.inicioCurso
                    ? new Date(evento.inicioCurso).toLocaleDateString()
                    : "—"}
                </TableCell>
                <TableCell>
                  {evento.finalCurso
                    ? new Date(evento.finalCurso).toLocaleDateString()
                    : "—"}
                </TableCell>
                <TableCell>
                  {evento.dataExpedido
                    ? new Date(evento.dataExpedido).toLocaleDateString()
                    : "—"}
                </TableCell>
                <TableCell>{evento.situacao || "—"}</TableCell>
                <TableCell>
                  {evento.resourceUrl ? (
                    <Link href={evento.resourceUrl} target="_blank">
                      <Button variant="outline" className="text-sm">
                        📄 Ver PDF
                      </Button>
                    </Link>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
