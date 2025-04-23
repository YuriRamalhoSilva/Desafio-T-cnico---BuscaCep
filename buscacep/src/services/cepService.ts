async function chamarAPI(cep){
    
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if(data.erro){
            throw new Error ("Cep não encontrado")
        }

    } catch (error) {
        
    }
    
}