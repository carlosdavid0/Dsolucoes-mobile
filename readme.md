# Meu Projeto Expo

Este é um projeto simples de React Native utilizando Expo. O aplicativo contém uma página de login e uma página inicial.

## Estrutura do Projeto

```
├── .expo
├── .expo-shared
├── assets
├── src
│   ├── assets
│   └── pages
│       ├── Home
│       └── Login
├── App.js
├── app.json
├── babel.config.js
├── package.json
└── yarn.lock
```

### Descrição dos Diretórios

- **`.expo`**: Arquivos de configuração e cache gerados pelo Expo.
- **`.expo-shared`**: Configurações compartilhadas do Expo, incluindo a lista de ativos utilizados.
- **`assets`**: Contém ícones e imagens usados no aplicativo.
- **`src`**: Contém os arquivos de código-fonte do aplicativo.
  - **`assets`**: Contém recursos específicos para o código, como o logo.
  - **`pages`**: Contém as páginas do aplicativo (Login e Home).

## Instalação e Inicialização

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/carlosdavid0/Dsolucoes-mobile.git
   cd Dsolucoes-mobile
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicialize o projeto:**

   Para iniciar o servidor de desenvolvimento, execute:

   ```bash
   npm start
   # ou
   yarn start
   ```

   Isso abrirá o Expo DevTools, onde você pode escolher rodar o aplicativo no Android, iOS ou na web.

## Dependências

- **expo**: Framework que facilita o desenvolvimento de aplicativos React Native.
- **react**: Biblioteca JavaScript para construir interfaces de usuário.
- **react-native**: Framework para construir aplicativos móveis usando React.
- **react-native-elements**: Biblioteca de componentes UI prontos para uso no React Native.
- **react-native-status-bar-height**: Biblioteca para obter a altura da barra de status.

## Desenvolvimento

O aplicativo inicia exibindo a página de Login (`src/pages/Login/index.js`). Após a autenticação, o usuário é redirecionado para a página Home (`src/pages/Home/index.js`).

### Exemplo de Uso

```javascript
import React from "react";
import { Login } from "./src/pages/Login";

export default function App() {
  return <Login />;
}
```

### Estrutura das Páginas

- **Login**: Página inicial do aplicativo, onde o usuário realiza o login.
- **Home**: Página acessada após a autenticação bem-sucedida.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
