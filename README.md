# hvex-project
![image](https://user-images.githubusercontent.com/105258182/228858641-46956f77-3884-4585-9d22-1fba844d8560.png)
 ## Sobre o Projeto:
  ### Tecnologias e bibliotecas usadas
    - Ract.js
    - Node.js
    - Styled components
    - React router dom
    - React icons
    - Docker

## Sobre o desenvolvimento:
  Para o desenvolvimento desse projeto utilizei React com a biblioteca Vite e a linguagem **TypeScript**.
  ### Etapas:
  - Criação do sistema de rotas:
     - Para a criação do sistema de rotas utilizei a biblioteca React router dom, e no arquivo **App.tsx** defini as rotas e seus respectivos componentes.   
  
  - Criação do componente principal responsável por chamar toda a página.
     - Diretório: `src/pages/mainPage/index.tsx`
  
  - Criação da pasta de **componentes**:
     - Diretório: `src/pages/components`
     - Estrutura dos componentes:
        - Cada componente representa uma parte das páginas, por ex: *`SecondPart`*, esse componente contém todos os arquivos e componentes necessários para a formação da segunda parte da landing page
        - Dentro desse componente principal você encontrará toda a estrutura da página ex: `Parte esquerda`, `Container Principal` e etc.
  
  - Criação de Mocks:
    - Para simular a interação com um banco de dados/ **API** criei um arquivo que possui uma variável do tipo lista que conta com vários objetos no formato `JSON`.
      - Diretório: `src/mocks/comantariosDb.ts`
  
  - Consumo de API:
    - Para simular o consumo de uma API utilizei as ferramentas nativas do React para controle de estado, `useEffect`.
    - Requisição para API:
      - No meu código não utilizei uma ferramenta para realizar as requisições para a API pois os arquivos já se encontravam no meu diretório, porém em um projeto real o ideal seria utilizar `fetch` ou `Axios`.

  - Responsividade:
    - Para deixar o site de maneira responsiva utilizei `media screens` e definição de largura e tamanho sempre em percentagens.
    - Para dispositivo menores/ iguais a 820px de largura, defini para maioria dos containers a tag `flex-direction: column`

  - Deploy:
    - Para o deploy da aplicação no ambiente local utilizei ´Docker´
    - Mais detalhes de como dar Deploy, no próximo card.   

## Como dar deploy da aplicação:
  ### Ferramentas necessárias:
      - Docker
      
   
  ### Gerando imagem com Dockerfile:
  **Para essa etapa utilize o `CMD` ou `powerShell`:** 
   #### 1. Dentro do diretório do projeto execute o seguinte comando para construir a imagem:
       docker build -t hvex-samuel-lima:1.0
       
  #### 2. Em seguida execute o comando: 
      docker images
      
  #### 3. e verifique se a imagem de nome `hvex-samuel-lima` foi criada.
  #### 4. Após a imagem ser criada execute o seguinte comando no seu terminal: 
        docker run -p SUA PORTA:5173 hvex-samuel-lima:1.0
  #### Substitua a frase `SUA PORTA`, pela porta que você deseja visualizar o projeto ex `8080`.
     
  #### 5. Espere a conclusão e acesse o seu localhost:`a porta que você definiu no comando anterior`
  
## Observações:
  ### Emulador do navegador:
   - Ao tentar visualizar a forma responsiva do projeto ultilizando o emulador do navegador você pode encontrar alguns problemas de desing, pois os emuladores nao lidam adequadamente com a meta `viewport`.
   - Portanto recomendo a ultilização de um dispositivo movel real.
   - A aplicação já configurada para rodar em network então você pode acessar a pagina ultilizando o ip e a porta da maquina que executou a imagem do docker.
  
