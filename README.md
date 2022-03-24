# creathusjobs/Desafio Frontend.md
## Start da aplicação
Clone o repositório.
```
git clone https://github.com/Nil-ton/creathusjobs-Desafio-Frontend.git
```
Instale as dependencias.
```
npm install
```

Start da aplicação como desenvolvedor
```
npm run dev
```


## Bibliotecas
- React-ts
- Styled-components
- Axios
- React query
- React Testing Library
- Jest
- swc
- MSW
- Date-fns

## Aplicação 
- construir uma grade de cursos

## Utilização das Bibliotecas
- Usar o React query e o axios para pegar os dados da aplicação
- Usar o jest, swc, MSW e o React testing library para fazer os testes da aplicação
- Utilizar o styled-component para estilizar os components da aplicação
- Utilizar o Date-fns para facilitar o manuseio de datas. 

## O que eu sei sobreo desafio
- SVG do layout(utilizar o figma para obter as informaçoes do layout)
- E as informaçoes do grid(utilizar o React query e o axios para capturar as informações do grid)


## Estrutura de pastas

Configuração do Jest.
```
jest.config.ts
```

Imagens utilizadas na aplicação.
```
./src/assets
```

Por ser uma aplicação single page preferi usar a pasta *components* para construir as partes utilizadas na aplicação.

Elas seguem o mesmo padrão:
```
src
    +---components
        +---<nome do component>
            index.tsx
            style.tsx
            test.spec.tsx
```
*index.tsx* é o component.
<br>
*style.tsx* é a estilização.
<br>
*test.spec.tsx* são os testes aplicados no component.
<br>

Components utilizadas na aplicação:
```
./src/components/Header
./src/components/Main
./src/components/Footer
```

Para facilitar o uso do React Query utilize a useFetch para pegar os dados utilizados na aplicação.
```
./src/hooks/useFetch/index.tsx
./src/hooks/useFetch/types.ts
```

Instancia do queryClient 
```
./src/service/queryClient/index.tsx
```

CSS reset da aplicação.
```
./src/styles/globalStyle/index.tsx
```

Variveis css utilizadas por toda aplicação.
```
./src/style/theme/index.tsx
```

Configurações para os testes não falharem por causa das importações das imagens.
```
./src/test/__mocks__/fileTransformer.js
```

Para os testes interpretação algumas funcionalidade do @testing-library/jest-dom e a configuração o msw para os testes interpretarem o useFetch.
```
./src/test/setup.ts
```

Funcionalidade para os testes interpretarem os dados do QueryClientProvider e os hooks.
```
./src/test/utils.tsx
```

Aplicação com os components
```
./src/App.tsx
```

O main envolve a aplicação com os contextos e o CSS reset
```
./src/main.tsx