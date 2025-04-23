Estrutura do projeto:
src/  
├── assets/               # Imagens, ícones, etc.  
├── components/           # Componentes reutilizáveis  
│   ├── CepForm/          # Formulário de busca  
│   │   ├── CepForm.tsx  
│   │   ├── CepForm.module.css  
│   │   └── index.ts      # Exportação do componente  
│   │  
│   └── AddressInfo/      # Exibição dos dados  
│       ├── AddressInfo.tsx  
│       ├── AddressInfo.module.css  
│       └── index.ts  
│  
├── hooks/                # Hooks customizados  
│   └── useCep.ts         # Lógica de busca do CEP  
│  
├── services/             # Chamadas à API  
│   └── cepService.ts     # Funções para buscar CEP  
│  
├── types/                # Tipos TypeScript  
│   └── cep.d.ts          # Tipos para dados do CEP  
│  
├── utils/                # Funções utilitárias  
│   └── validation.ts     # Validação de CEP  
│  
├── App.tsx               # Componente principal  
├── main.tsx              # Ponto de entrada  
└── styles/               # Estilos globais  
    └── globals.css  

