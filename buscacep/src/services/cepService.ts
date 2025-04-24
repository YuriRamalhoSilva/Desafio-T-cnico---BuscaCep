import { CepData } from '../types/cep';

export async function chamarApi(cep: string): Promise<CepData> {
    // Remove tudo que não é dígito
    cep = cep.replace(/\D/g, '');
    
    if (cep.length !== 8) {
        throw new Error('CEP deve conter exatamente 8 dígitos');
    }

    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    
    if (!response.ok) {
        throw new Error('Erro na comunicação com o serviço de CEP');
    }

    const data = await response.json();

    if (data.erro) {
        throw new Error('CEP não encontrado');
    }

    // Retorna todos os dados relevantes
    return {
        cep: data.cep,
        logradouro: data.logradouro,
        complemento: data.complemento,
        bairro: data.bairro,
        localidade: data.localidade,
        estado: data.estado,
        uf: data.uf
    };
}