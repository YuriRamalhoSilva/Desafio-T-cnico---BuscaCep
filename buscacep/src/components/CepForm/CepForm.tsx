import { useState } from "react";
import "./CepForm.css";

interface CepFormProps {
    onSearch: (cep: string) => void; // Recebe a função do pai
}

function CepForm ({onSearch}: CepFormProps) {

    const [cep, setCep] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(cep);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       
        const value = e.target.value
          .replace(/\D/g, '')
          .replace(/(\d{5})(\d)/, '$1-$2')
          .slice(0, 9);
        
        setCep(value);
    };
    
    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={cep}
            onChange={handleChange}
            placeholder="00000-000"
            maxLength={9}
          />
          <button type="submit">Buscar</button>
          
        </form>
    );
}

export default CepForm
