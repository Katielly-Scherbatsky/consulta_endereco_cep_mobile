# Aplicativo de Consulta de Endereço via CEP

Este é um aplicativo desenvolvido em **React Native** que permite ao usuário consultar informações de endereço utilizando a API **CEP Aberto**. O usuário insere um CEP, e ao submeter o formulário, o aplicativo faz uma requisição à API para recuperar os dados e exibi-los na tela.

## Funcionalidades

- Consulta de endereço a partir de um CEP.
- Exibição das informações retornadas pela API (logradouro, bairro, cidade, estado, etc.).
- Tratamento de erros para CEPs inválidos ou inexistentes.
- Indicador de carregamento enquanto a requisição estiver em andamento.

## Tecnologias Utilizadas

- **React Native**
- **Expo** (opcional para desenvolvimento mais rápido)
- **Hooks**: `useState`, `useEffect`
- **Fetch API** para requisições HTTP

## Requisitos

### Formulário de Entrada
- Campo de texto para inserção do CEP.
- Botão para submeter a consulta.

### Requisição à API CEP
- Utiliza o método **HTTP GET** para consultar a API.
- A URL da API e sua documentação podem ser acessadas em: [Via Cep](https://viacep.com.br/).

### Tratamento de Erros
- Caso o CEP não seja encontrado ou a API retorne erro, uma mensagem apropriada será exibida ao usuário.

### Feedback Visual
- Um indicador de carregamento é mostrado enquanto a requisição está em andamento.
- A interface é atualizada conforme a resposta da API (sucesso ou erro).

## Boas Práticas

- Organização do código utilizando **componentes funcionais** e **hooks**.
- Manutenção de um código limpo e modularizado.
- Utilização de tratamento adequado de erros para melhor experiência do usuário.

## Como Executar o Projeto

### 1. Clone o Repositório
```sh
$ git clone https://github.com/seu-usuario/nome-do-repositorio.git
$ cd nome-do-repositorio
```

### 2. Instale as Dependências
Se estiver usando **Expo**:
```sh
$ npm install -g expo-cli
$ npm install
```
Se estiver usando React Native CLI:
```sh
$ npm install
$ npx react-native run-android # Para rodar no Android
$ npx react-native run-ios # Para rodar no iOS (MacOS apenas)
```

### 3. Execute o Aplicativo
Se estiver usando **Expo**:
```sh
$ expo start
```
Caso esteja usando React Native CLI:
```sh
$ npx react-native start
```

## Licença

Este projeto está sob a [Licença MIT](LICENSE).

