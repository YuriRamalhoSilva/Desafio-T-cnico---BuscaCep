import CepForm from "./components/CepForm/CepForm";
import AddresInfo from "./components/AddressInfo/AdrresInfo";
import "./styles/globalStyles.css";

function App (){

    return(
        <div className="app">
            <h2>Consulta de Cep</h2>
            <CepForm />
            <AddresInfo/>
        </div>
    );

};

export default App