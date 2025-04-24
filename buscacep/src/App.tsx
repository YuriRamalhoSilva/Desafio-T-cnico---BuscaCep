import CepForm from "./components/CepForm/CepForm";
import AddressInfo from "./components/AddressInfo/AdrresInfo";
import "./styles/globalStyles.css";
import { useCep } from "./hooks/useCep";


function App() {
  // Chamada do hook aqui
  const { data, loading, error, searchCep } = useCep();

  return (
    <div className="app">
      <h1>Consulta de CEP</h1>
      
      {/* Passa a função searchCep para o componente de formulário */}
      <CepForm onSearch={searchCep} isLoading={loading} />
      
      {/* Passa os dados para o componente de exibição */}
      <AddressInfo data={data} loading={loading} error={error} />
    </div>
  );
}
export default App