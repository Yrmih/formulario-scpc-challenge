import FormCapacitacao from "../../components/shared/FormCapacitacao"
import RelatoriosServidores from "../../components/shared/dataTableRelatorio"
import { useState } from "react";

export default function CapacitacaoFormPage(){
    const [capacitacoes, setCapacitacoes] = useState([]);

    const handleCapacitacaoCadastrada = (novaCapacitacao: any) => {
        setCapacitacoes((prev) => [novaCapacitacao, ...prev]);
    }
    return(
        <div>
            <FormCapacitacao/>
            <RelatoriosServidores />
        </div>
    )
}