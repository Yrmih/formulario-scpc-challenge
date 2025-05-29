"use client";

import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import Link from "next/link";
import { getCapacitacao } from "../../services/CapacitacaoServices";
import { Capacitacao } from "../../interface/interface";

export default function ListagemCapacitacoes() {
  const [dados, setDados] = useState<Capacitacao[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCapacitacoes = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getCapacitacao();
        setDados(response);
      } catch {
        setError("Erro ao carregar capacitações.");
      } finally {
        setLoading(false);
      }
    };

    fetchCapacitacoes();
  }, []);

  if (loading) return <p>Carregando capacitações...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Capacitações Cadastradas</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Diretoria</TableHead>
            <TableHead>Nome do Curso</TableHead>
            <TableHead>Data Inicial</TableHead>
            <TableHead>Data Final</TableHead>
            <TableHead>Situação</TableHead>
            <TableHead>Certificado</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {dados.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                Nenhuma capacitação encontrada.
              </TableCell>
            </TableRow>
          ) : (
            dados.map((capacitacao) => (
              <TableRow key={capacitacao.id}>
                <TableCell>{capacitacao.diretoria?.nome}</TableCell>
                <TableCell>{capacitacao.nome}</TableCell>
                <TableCell>
                  {new Date(capacitacao.inicioCurso).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(capacitacao.finalCurso).toLocaleDateString()}
                </TableCell>
                <TableCell>{capacitacao.situacao}</TableCell>
                <TableCell>
                  {capacitacao.resourceUrl ? (
                    <Link href={capacitacao.resourceUrl} target="_blank">
                      <Button variant="outline" size="sm">
                        Ver PDF
                      </Button>
                    </Link>
                  ) : (
                    <span>—</span>
                  )}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
