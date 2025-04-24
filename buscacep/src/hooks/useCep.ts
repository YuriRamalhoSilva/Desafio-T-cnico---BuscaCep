import { chamarApi } from "../services/cepService";
import { CepData } from "../types/cep";
import { useState } from "react";

export function useCep() {
    const [data, setData] = useState<CepData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const searchCep = async (cepInput: string) => {
        try {
            // 1. Validação inicial
            const cepLimpo = cepInput.replace(/\D/g, '');
            if (cepLimpo.length !== 8) {
                throw new Error('Digite um CEP válido com 8 dígitos');
            }

            // 2. Reset de estados
            setLoading(true);
            setError(null);
            setData(null);

            // 3. Chamada à API
            const result = await chamarApi(cepLimpo);
            setData(result);
            
        } catch (err) {
            // 4. Tratamento de erros amigável
            let errorMessage = 'Erro ao buscar CEP';
            
            if (err instanceof Error) {
                errorMessage = err.message.includes('Failed to fetch') 
                    ? 'Erro de conexão com o servidor'
                    : err.message;
            }
            
            setError(errorMessage);
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    return { 
        data, 
        loading, 
        error, 
        searchCep 
    };
}