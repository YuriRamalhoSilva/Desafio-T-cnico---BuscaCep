import { CepData } from "../../types/cep";
import "./AddresInfo.css";

interface AddresInfoProps {
    data: CepData | null;
    loading: boolean;
    error: string | null;
}

function AddresInfo ({ data, loading, error}: AddresInfoProps) {
 
    return (
        
        <div className="AddresInfo">
            <div>
                <h2>Dados do Endereço</h2>
            </div>
            {loading && <p>Carregando...</p>}
            {error && <p className="error">{error}</p>}
            {data && (
                <div>
                    <p>CEP: {data.cep}</p>
                    <p>Logradouro: {data.logradouro}</p>
                    <p>Complemento: {data.complemento}</p>
                    <p>Bairro: {data.bairro}</p>
                    <p>Cidade: {data.localidade}</p>
                    <p>Estado: {data.estado} - {data.uf}</p>

                </div>
            )}
            
            
        </div>
    )
}

export default AddresInfo