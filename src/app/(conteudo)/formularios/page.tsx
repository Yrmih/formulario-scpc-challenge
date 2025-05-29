import FormCapacitacao from "../../shared/components/FormCapacitacao"
import RelatoriosServidores from "../../shared/components/dataTableRelatorio"
import { useState } from "react";

export default function CapacitacaoFormPage() {
    const [capacitacoes, setCapacitacoes] = useState([]);

    const handleCapacitacaoCadastrada = (novaCapacitacao: any) => {
        setCapacitacoes((prev) => [novaCapacitacao, ...prev]);
    }
    return (
        <div>
            <FormCapacitacao />
            <RelatoriosServidores />
        </div>
    )
}