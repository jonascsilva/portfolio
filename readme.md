# Resumo

Este projeto trata de uma aplicação web focada em estudantes, que os auxilia a absorverem o conteúdo que estão estudando. Essa aplicação será desenvolvida com práticas de engenharia de software e permitirá que os alunos façam anotações em documentos, revisem o conteúdo com flashcards, utilizando a técnica de aprendizagem espaçada, e respondam quizzes para avaliarem o seu desempenho. Com esses três aspectos, a aplicação tende a auxiliar os seus usuários a absorverem melhor o conteúdo que estão estudando e em um tempo menor. Os documentos suportarão markdown e permitirão aos usuários preservarem qualquer informação relevante sobre o conteúdo. Os flashcards são fichas de estudo com uma pergunta de um lado e a resposta do outro, e a técnica de repetição espaçada utilizada por eles é uma abordagem fundamentada no “Efeito do espaçamento”. Esse efeito psicológico demonstra que as pessoas absorvem melhor o conteúdo quando estudam de forma espaçada, em vez de estudar o mesmo conteúdo por um longo período de uma só vez. Os quizzes são um conjunto de questões que, ao final deles, apresentarão uma nota de acordo com os acertos do usuário. Com essas três ferramentas, e permitindo qualquer usuário compartilhar os conteúdos criados com os outros, a aplicação tem o objetivo de que eles tenham um desempenho melhor na escola ou em qualquer área de interesse.

# 1. Introdução

## 1.1 Contexto

O projeto é voltado a estudantes que desejam estudar determinado assunto, seja para uma prova, uma apresentação ou simplesmente para um melhor aprendizado de um conteúdo de seu interesse. Esse reforço será feito pela interação do usuário com os flashcards, quizzes e anotações no sistema.

## 1.2 Justificativa

O projeto é relevante para o campo da engenharia de software pois, por meio da integração de diversas ferramentas de estudo e da implementação de revisão espaçada em uma única solução, a aplicação auxiliará estudantes na revisão e memorização de qualquer conteúdo desejado.

Por mais que é possível estudar utilizando técnicas de aprendizagem espaçada sem o amparo de uma ferramenta, estudar por meio de uma aplicação web espera-se ter benefícios como: a possibilidade de fazer backups, sincronização automática dos conteúdos, acesso de qualquer navegador e automatização do espaço das revisões dos flashcards. A ideia desse projeto veio da dificuldade observada na maioria dos estudantes em absorverem o conteúdo que estão estudando, o que resulta em um baixo desempenho acadêmico.

## 1.3 Objetivos

O objetivo principal deste projeto é desenvolver uma aplicação web que permita estudantes de diferentes matérias e níveis educacionais absorverem e memorizarem o que eles estejam estudando, eliminando a necessidade de usar folhas e cartões físicos para revisar o conteúdo. Para atender a esse objetivo os seguintes objetivos secundários são necessários: permitir o usuário estudar os seus flashcards utilizando o método de aprendizado espaçado; praticar o seu conhecimento com quizzes; suportar a criação de anotações; permitir que os usuários compartilhem seus quizzes, flashcards e anotações (evitando que outros usuários precisem criar todo o conteúdo que desejam estudar), e apresentar um sistema de autenticação para os usuários acessarem o conteúdo que eles criarem de qualquer lugar, assim otimizando o tempo de aprendizado desses estudantes.

Um algoritmo de repetição espaçada será implementado com base no Sistema de Leitner, que é um método que organiza os flashcards em diferentes “caixas”. Todos os flashcards começam na primeira “caixa”, e sempre que o flashcards é respondido corretamente, ele avança para a próxima “caixa”, que tem seu conteúdo revisado com menos frequência. Se ele não for respondido corretamente, ele retorna à “caixa” anterior, que é revisada com mais frequência. Este método ajusta dinamicamente os intervalos de revisão com base na memorização do usuário, o que torna a revisão mais eficiente.

# 2. Descrição do Projeto

## 2.1 Tema do Projeto

Auxiliar alunos nos estudos de qualquer assunto, permitindo que eles anotem o que julgarem relevante, revisem o assunto usando flashcards que implementam a técnica de repetição espaçada e testem o seu desempenho com quizzes.

## 2.2 Problemas a Resolver

- **Dificuldades na Gestão e Revisão de Anotações:** Atualmente, os estudantes enfrentam dificuldades em gerenciar e revisar anotações de forma eficaz, frequentemente recorrendo a métodos manuais que podem ser dispersos e inconsistentes. Isso leva a uma revisão ineficiente e a uma maior probabilidade de perder informações importantes, dificultando a preparação adequada para exames e outras avaliações acadêmicas.
- **Inconsistências na aplicação de técnicas de aprendizagem espaçada:** Apesar de ser reconhecida como uma técnica de estudo eficaz, a aplicação inconsistente da aprendizagem espaçada pelos estudantes, devido à falta de ferramentas adequadas, resulta em uma baixa retenção de conhecimento.
- **Acessibilidade ao conteúdo de estudo:** A ausência de uma plataforma centralizada que integre anotações, flashcards e quizzes em um único ambiente e que seja acessível de qualquer lugar em que haja internet, resulta em uma experiência fragmentada para o usuário, o que atrapalha os estudantes revisarem os seus conteúdos.

## 2.3 Limitações

- **Diversidade de estilos de aprendizagem:** A aplicação é projetada com foco em anotações, quizzes e flashcards usando a técnica de aprendizagem espaçada. No entanto, pode não atender eficazmente todos as técnicas de aprendizagem. Portanto, a aplicação será menos benéfica para estudantes que preferem outros métodos.
- **Acesso e conectividade à Internet:** O uso da aplicação depende da conectividade estável à internet. Dessa forma, ela não estará disponível para estudantes em regiões sem acesso à internet.
- **Conteúdo personalizado:** Dado que a aplicação permite que os alunos criem e revisem conteúdo personalizado e ela não verificará o conteúdo criado, a qualidade e eficácia do aprendizado ainda dependem significativamente da capacidade do usuário de desenvolver ou encontrar bons conteúdos. Isso pode resultar em revisões ineficazes
- **Avaliação de desempenho:** Os quizzes são uma ferramenta para avaliar o conhecimento do usuário, mas as pontuações podem não refletir completamente o entendimento do estudante sobre o assunto, portanto, não substitui avaliações formais ou feedbacks de profissionais

# 3. Especificação Técnica

### Requisitos de Software

- Desenvolvimento de uma aplicação web acessível com o uso de navegadores web atuais.
- Capacidade de criar e editar anotações em documentos, incluindo funcionalidades de formatação de texto.
- Implementação da técnica de aprendizagem espaçada em flashcards, com algoritmos para ajustar a frequência de revisão baseada no desempenho do usuário.
- Funcionalidades de quizzes para avaliação do entendimento do conteúdo, com feedback instantâneo sobre as respostas.
- Interface de usuário simples e intuitiva para facilitar o gerenciamento de anotações, revisões de flashcards e realização de quizzes.
- Funcionalidade de criar uma conta e acessá-la, preservando a privacidade das informações dos estudantes.

### Protocolos

- Utilização de protocolos seguros, como o HTTPS, para proteger os dados transmitidos.
- Implementação de protocolos de autenticação e autorização, como o OAuth 2.0, para controlar o acesso a plataforma.

### Algoritmos

- Algoritmos de aprendizagem espaçada para otimizar a revisão de flashcards, ajustando a dificuldade e a frequência baseada no desempenho do usuário.
- Algoritmos de recomendação para sugerir conteúdos publicados por outros usuários, baseados nas áreas de interesse do usuário, para evitar que o usuário tenha que criar tudo que deseja estudar.

### Procedimentos

- Desenvolvimento do software usando a metodologia Kanban para garantir um processo de desenvolvimento iterativo e adaptativo.
- Criação de testes durante o desenvolvimento da aplicação, como unitários e de integração, para garantir que as funcionalidades estejam funcionando corretamente.
- Implantação de uma pipeline (GitHub actions) para assegurar que o código sendo adicionado na aplicação não contenha problemas.

### Formatos de Dados

- Utilização de JSON para o armazenamento e transmissão de dados entre o frontend e o backend.
- Utilização de formatos de arquivos populares para importação e exportação de anotações, flashcards e quizzes, como CSV, permitindo os usuários manter cópias offline.

## 3.1. Requisitos de Software

### Lista de Requisitos

#### Requisitos funcionais

- RF1: Permitir a criação de quizzes.
- RF2: Permitir a edição de quizzes.
- RF3: Permitir a exclusão de quizzes.
- RF4: Permitir o compartilhamento de quizzes.
- RF5: Permitir o usuário responder os quizzes.
- RF6: Permitir a criação de anotações.
- RF7: Permitir a edição de anotações.
- RF8: Permitir a exclusão de anotações.
- RF9: Permitir o compartilhamento de anotações.
- RF10: Permitir a criação de flashcards.
- RF11: Permitir a edição de flashcards.
- RF12: Permitir a exclusão de flashcards.
- RF13: Permitir o compartilhamento de flashcards.
- RF14: Permitir o usuário praticar os flashcards.
- RF15: Possuir uma tela de login.
- RF16: Possuir uma tela para a criação de conta.
- RF17: Permitir a criação de usuários.
- RF18: Permitir a edição de usuários.
- RF19: Permitir a exclusão de usuários.
- RF20: Permitir a visualização de detalhes de usuários.

#### Requisitos não funcionais

- RNF1: Permitir o usuário praticar os flashcards sem nenhum algoritmo.
- RNF2: Permitir o usuário praticar os flashcards com o Sistema Leitner.
- RNF4: Ser responsivo para diferentes tamanhos de tela.
- RNF5: Explicar as metodologias de aprendizagem espaçada utilizadas.
- RNF6: Disponibilizar opção de modo escuro.
- RNF7: Estar de acordo com regulamentações de privacidade.
- RNF8: Ser seguro contra ataques cibernéticos comuns.
- RNF9: Suportar diferentes navegadores.
- RNF10: Ser fácil de usar e intuitivo.

### Representação dos Requisitos

![use case - 1](docs/use%20case%20-%201.png)

O diagrama de casos de uso mostra as interações entre o estudante e aplicação. O estudante pode criar uma conta, fazer login, e dentro do sistema, criar quizzes, anotações e flashcards. Cada uma dessas funcionalidades inclui ações como visualizar, editar, excluir e compartilhar o conteúdo, além de responder quizzes e praticar flashcards. O diagrama destaca o foco da aplicação na gestão dos recursos de estudo, apoiando o aprendizado do usuário.

## 3.2. Considerações de Design

### Visão Inicial da Arquitetura

A arquitetura da aplicação será baseada no modelo cliente-servidor, utilizando o framework Next.js no cliente e no servidor. O Next.js é um framework para o React, e foi escolhido devido as suas opções de renderização, o que otimiza o desempenho e a experiência do usuário. O Next.js é um framework fullstack focado no frontend, facilitando a integração com as APIs e o roteamento no servidor utilizando o Node.js, o que permite o desenvolvimento com TypeScript para o frontend e backend.

O banco de dados escolhido é o PostgreSQL, que é conhecido por sua robustez e capacidade de lidar com grandes volumes de dados, o que é essencial para lidar com a complexidade das informações e interações dos usuários.

A comunicação entre cliente e servidor será realizada através da API REST, proporcionando uma arquitetura escalável e de fácil manutenção.

### Padrões de Arquitetura

- **Component-Based Architecture**: Essa arquitetura é essencial para o desenvolvimento frontend em React, ela se trata da construção de interfaces com componentes reutilizáveis e independentes. Essa prática facilitará a manutenção e a escalabilidade da aplicação, além de promover consistência visual.
- **Monolithic Architecture**: Considerando que o Next.js é um framework que pode cuidar tanto do frontend quanto do backend, a arquitetura de monolito pode ser especialmente apropriada. Nessa arquitetura, a aplicação é desenvolvida como um único projeto, o que simplifica o desenvolvimento, especialmente no começo dos projetos e quando a equipe é pequena.

### Modelo C4

#### Nível 1 - Contexto

![c4 - 1](docs/c4%20-%201.png)

O diagrama exibe o nível 1 do modelo C4, fornecendo uma visão geral da aplicação e sua interação com os usuários, sem detalhar a estrutura interna. O estudante utiliza o StudyNest, para gerenciar notas, flashcards e quizzes. A comunicação entre ambos ocorre via HTTPS.

#### Nível 2 - Container

![c4 - 2](docs/c4%20-%202.png)

O diagrama exibe o nível 2 do modelo C4, fornecendo uma visão detalhada dos principais contêineres dentro da aplicação, sem detalhar a estrutura interna de cada um. A aplicação web é implementada em React.js e serve como painel de controle para o usuário.

A aplicação web se comunica com o o backend ("API Service") implementado em Node.js, através de requisições REST. O backend lida com a lógica de negócio e se comunica com o banco de dados PostgreSQL, para salvar e ler dados.

#### Nível 3 - Componente - Frontend

![c4 - 3 - 1](docs/c4%20-%203%20-%201.png)

O diagrama exibe o nível 3 do modelo C4, fornecendo uma visão detalhada dos componentes de frontend da aplicação, sem detalhar a implementação interna de cada componente. O estudante interage com duas páginas principais: a página de autenticação e a página de painel de controle.

- **Página de Autenticação**: página que permite que o usuário faça login ou se registre. Ela se comunica com o backend para solicitar dados de autenticação e redireciona o usuário conforme necessário.

- **Página de Painel de Controle**: página onde o usuário interage com notas, flashcards e quizzes. Ela solicita dados do usuário ao backend e redireciona o usuário conforme a situação de autenticação.

#### Nível 3 - Componente - Backend

![c4 - 3 - 2](docs/c4%20-%203%20-%202.png)

O diagrama exibe o nível 3 do modelo C4, fornecendo uma visão detalhada dos componentes de backend da aplicação, sem detalhar a implementação interna de cada componente. O estudante interage com a aplicação web, que, por sua vez, comunica-se com os componentes de backend para gerenciar autenticação e dados do usuário.

- **Rota de Autenticação**: esta rota lida com os processos de login e registro de usuários. Ela recebe dados de autenticação da aplicação web e retorna as respostas.

- **Rota de Painel de Controle**: esta rota gerencia notas, flashcards e quizzes. Ela processa requisições da aplicação web, enviando e recebendo dados de usuário.

## 3.3. Stack Tecnológica

### Linguagens de Programação

Será utilizado o TypesScript pelo seu sistema forte de tipagens e pela integração com React (no frontend) e Node.js (no backend).

### Frameworks e Bibliotecas

#### Frontend

- **Next.js**: O framework principal que fornece várias opções de renderização, como do lado do servidor e geração de páginas estáticas.
- **React.js**: Integrado ao Next.js, é usado para construir interfaces de usuário dinâmicas.
- **Sass**: Um pré-processador CSS que permite escrever estilos mais complexos e organizados com facilidade.

#### Backend

- **Prisma**: ORM que facilita a modelagem de dados e interações com o banco de dados PostgreSQL.

#### Autenticação

- **Auth.js (NextAuth.js)**: Solução de autenticação que que suporta vários provedores, facilitando a implementação de login seguro.

#### Testes

- **Jest**: Framework de testes que permite criar testes unitários e de integração.

#### Utilidades

- **Prettier**: Formatador de código que ajuda a manter um estilo consistente, ajudando a manter o código limpo e legível.
- **Eslint**: Ferramenta de linting que ajuda a identificar e corrigir problemas no código, garantindo boas práticas.

### Ferramentas de Desenvolvimento e Gestão de Projeto

O Git será utilizado para o versionamento da aplicação, garantindo a integridade e o controle histórico do código. O GitHub foi escolhido como plataforma para hospedagem do código do projeto, oferecendo uma interface familiar e recursos avançados para revisão do código. Além disso, o GitHub Projects será utilizado para o gerenciamento de tarefas através de um board Kanban, proporcionando uma visão clara do progresso das atividades e permitindo a gestão ágil do projeto, o que ajudará a responder às mudanças no escopo do projeto.

## 3.4. Considerações de Segurança

Para assegurar o funcionamento da aplicação e proteger os dados dos usuários, serão seguidas uma série de práticas de segurança da informação. Primeiramente, será utilizado o protocolo HTTPS para todas as requisições, e todas as queries ao banco de dados estarão protegidas contra injeção SQL através do uso de um ORM. Além disso, o conteúdo injetado no HTML será sanitizado, principalmente se vier de fontes externas.

Também será implementada autenticação nas rotas de API para controlar o acesso aos dados, assim como serão utilizados middlewares para verificar tokens de acesso ou sessão antes de fazer requisições. E para protegê-las de ataques de força bruta e DDoS, serão definidos limites de requisição por IP ou usuário, e serão configurados corretamente os cabeçalhos CORS para restringir quais domínios podem interagir com as APIs. Finalmente, os tokens de acesso e refresh serão armazenados de forma segura, e todos os dados sensíveis serão criptografados.

# 4. Próximos Passos

Depois que o documento for concluído e aprovado, os próximos passos serão os seguintes:
1. Desenvolver o protótipo (Figma).
2. Criar as tarefas no Board do Kanban.
3. Criar as páginas do projeto (frontend).
4. Criar as rotas do projeto (backend).
5. Criar as tabelas no banco.
6. Criar actions do GitHub.
7. Configurar a aplicação para rodar com docker
8. Realizar o primeiro deploy da aplicação na Digital Ocean.

# 5. Referências

- Efeito do espaçamento
  - https://en.wikipedia.org/wiki/Spacing_effect
- Sistema Leitner
  - https://en.wikipedia.org/wiki/Leitner_system
- Documentação do Next.js
  - https://nextjs.org/docs
- Documentação do React
  - https://react.dev
- Documentação do PostgreSQL
  - https://www.postgresql.org/docs
- Documentação do TypeScript
  - https://www.typescriptlang.org/docs
- Documentação do Node
  - https://nodejs.org/docs/latest/api
- Documentação do Sass
  - https://sass-lang.com/documentation
- Documentação do Prettier
  - https://prettier.io/docs/en](https://prettier.io/docs/en)
- Documentação do ESLint
  - https://eslint.org/docs/latest
- Documentação do Jest
  - https://jestjs.io/docs/getting-started
- Documentação do Auth.js
  - https://authjs.dev/getting-started
- Documentação do Prisma
  - https://prisma.io/docs
- Documentação do modelo C4
  - https://c4model.com

# 6. Apêndices

## Links

### Repositório do projeto

- https://github.com/jonascsilva/portfolio

### Kanban Board

- https://github.com/users/jonascsilva/projects/1

## Concorrentes

### Brainscape

- https://brainscape.com
- Flashcards.

### RemNote

- https://www.remnote.com
- Flashcards e anotações.

### Quizlet

- https://quizlet.com
- Flashcards e quizzes.
