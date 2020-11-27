
# Teste para candidatos à vaga de desenvolvedor Fullstack


Este é um teste utilizado pela Jogga para avaliação técnica dos candidatos as nossas vagas de Fullstack. Este modelo de teste é aplicado para todos os níveis de candidatos a Fullstack, mudando o nosso critério de avaliação do resultado do teste de acordo com a vaga que você esteja se candidatando.

Portanto não precisa se preocupar caso esteja se candidatando para uma vaga mais iniciante, pois o seu projeto será avaliado baseado no nível da vaga a qual você está concorrendo, basta fazer o seu melhor!


## Instruções

Você deverá criar um repositório público para o projeto no Github. Use o README principal do seu repositório para nos contar como você desenvolveu o seu teste e nele você deverá contar as suas decisões tomadas, o porque de cada tecnologia escolhida por você e como organizou e separou o seu código. As instruções de como rodar seu projeto também devem estar presentes no README.

Não existe uma resposta correta para o teste. Você pode alcançar o objetivo de várias maneiras possíveis e será avaliado a maneira, métodos e tecnologias que você escolheu para finalizar o desafio.

Não há um tempo definido para a conclusão do teste, porém estimamos que este desafio possa ser resolvido em cerca de 16 horas de codificação. Ao concluir o teste você deve responder este e-mail com o link do repositório para que possamos dar uma conferida.

## Desafio

Você será responsável por integrar a próxima landing page de um de nossos clientes e criar uma pequena API para o armazenamento dos leads convertidos nessa landing page. Para isso você deve seguir os seguintes pontos:

1. Criar um banco de dados para que armazene leads, guardando informações como o horário do lead gerado, o produto que está sendo ofertado, possíveis origens e o que mais que você ache que pode ser relevante para guardar sobre um lead.

2. Criar uma API que permita realizar pelo menos 4 ações básicas, GET, POST, PUT, DELETE, manipulando os dados do banco criado previamente, realizando as seguintes ações:  
    2.1. Fornecer listagem dos leads via método GET;  
    2.2. Cadastrar novos leads via método POST;  
    2.3. Visualizar um lead via método GET;  
    2.4. Atualizar um lead via método PUT;  
    2.5. Deletar um lead via método DELETE.


3. Na landing iremos possuir dois pontos de conversão, um formulário na página e um formulário de whatsapp, você deve implementar a integração desse formulário com a API criada no passo **2** e os dados devem ser persistidos no banco do passo **1**.

* <span style="color:red">*Situação fícticia, criada apenas para elucidar o desafio, o conteúdo desenvolvido nesse teste será utilizado apenas para fins da avaliação do candidato.*</span>

## O que nós esperamos do seu teste

* Utilize a tecnologia ou framework da melhor forma possível (metodologia/estrutura). 

* Validação dos dados inseridos no formulário.

* Utilização de dependency managers (composer, pip, npm, yarn) para instalação de bibliotecas utilizadas no projeto.

* O formulário deve possuir como campos obrigatórios Nome(*name*), E-mail(*email*), Telefone(*phone*) e os outros campos podem ser considerados como opcional.

* Desenvolver método para submissão do formulário, este deverá ser uma requisção do tipo **POST**, além dos dados visíveis no formulário é necessário que seja enviado um  parâmetro *code* que não será visivel para o usuário da página mas que será enviado na requisição para identificação do lead.


## Material

* [O que é um lead?](https://rockcontent.com/blog/o-que-e-lead/)
* [Verbos HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods)
* [API](https://www.youtube.com/watch?v=vGuqKIRWosk)

## Pontos extras

* Deploy da aplicação (Heroku, Digital Ocean, EC2 etc).
* Utilização do Docker.
* Se durante a implementação você identificar alguma funcionalidade que torne o resultado mais interessante, funcional ou seguro pode ficar a vontade em acrescentar e depois explicar sua ideia. 


## O que nós não gostaríamos

* Descobrir que não foi você quem fez seu teste.
* Ver commits grandes, sem muita explicação nas mensagens em seu repositório.
* Encontrar um commit com o .env, as dependências de NPM, Yarn ou outros arquivos que possuam informações sensíveis e não deveriam ser versionados.

## O que avaliaremos de seu teste

* Histórico de commits do git.
* As instruções de como rodar o projeto.
* Organização, semântica, estrutura, legibilidade, manutenibilidade do seu código.
* Alcance dos objetivos propostos.

**Importante**: <span style="color:red">*Usamos o mesmo teste para todos os níveis de fullstack: junior, pleno ou senior, mas procuramos adequar nossa exigência na avaliação com cada um desses níveis sem, por exemplo, exigir excelência de quem está começando.*</span>

