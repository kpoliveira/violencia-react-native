
# Aplicativo para listar casos de violência no estado de pernambuco

Esta aplicação foi cosnstruída em React Native com a biblioteca Expo para executar o Aplicativo.
O projeto se utiliza da API violencia-swagger (encontra-se neste link: https://github.com/kpoliveira/violencia-swagger) que foi construída com NodeJS e Swagger.

Para executar esta aplicação, é necessário seguir os passos seguintes:




## Executar a API (REQUIRED)



- Clone o respositório do link: https://github.com/kpoliveira/violencia-swagger em seu computador
- Abrir o terminal na pasta do projeto
- digitar "npm start"
- Acessar "http://localhost:5000/api-docs/"


## Baixar aplicativo EXPO (REQUIRED)

O Aplicativo pode ser encontrado em qualquer loja móvel

## Alterando Rede Local no código (REQUIRED)

A API irá gerar um endereço localhost para visualização dos endpoints.
Porém, para acessar a rede localhost pela aplicação, é necessário fazer uma alteração no código.

- Clone este respositório em seu computador
- Abra um editor de código como o VSCode
- Acesse as seguintes pastas:
- src/services/api/
- Acesse o arquivo index.ts
- No arquivo index.ts, altere a baseURL para o seu endereço IPv4 e no final colocar a porta 5000
- Exemplo: 'http://10.0.0.132:5000'

Para acessar a rede IPv4 do seu computador, basta acessar o terminal e digitar ipconfig.

- Salve o arquivo

## Executar o projeto (REQUIRED)



- Clone este respositório em seu computador
- Abra o terminal na pasta raiz do projeto
- Digite "expo install" no terminal
- Ao fim do carregamento, digite "expo start -c"

Será carregada uma aba no navegador com um QR Code no lado inferior esquerdo.
(RECOMENDA-SE ALTERAR A REDE NA PÁGINA QUE FOI CARREGADA DE LAN PARA TUNNEL)

Caso o seu dispositivo dor iPhone:
- Abrir a câmera do dispositivo e apontar pro QR Code gerado (se alterar para TUNNEL um novo QR Code será gerado)
- Clicar na notificação e o app será carregado

Caso o seu dispositivo dor Android:
- Abrir o app do Expo e clicar em "Scan QR Code" apontar pro QR Code gerado (se alterar para TUNNEL um novo QR Code será gerado)
- O app será carregado automaticamente
## Autor

- Kelvin Pinheiro Oliveira
- [@kpoliveira](https://github.com/kpoliveira)

  
## Usage/Examples

```javascript
npm start
http://localhost:5000/api-docs/
'http://10.0.0.132:5000'
expo install
expo start -c
```

  
