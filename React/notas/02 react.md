npm i styled-components
npm i @types/styled-components -D

![[Pasted image 20241230133657.png]]
os botoes assumem cores diferentes a partir da informação que chega do backend 
acento grave é usado para interpolação de strings

styled components permite a criação de componetes estilizados com ts diretamente 

![[Pasted image 20241230140404.png]]
![[Pasted image 20241230140413.png]]
![[Pasted image 20241230140442.png]]
faz a mesma coisa mas em larga escala facilita o serviço pq criar muitas classes da mais trabalho

ThemeProvider permite que a aplicação tenha um tema específico
![[Pasted image 20241230141313.png]]
![[Pasted image 20241230141327.png]]![[Pasted image 20241230141337.png]]

![[Pasted image 20241230142329.png]]
integra o ts com o styled components para que tipagem dinamica seja possivel 
![[Pasted image 20241230142358.png]]
![[Pasted image 20241230142408.png]]

é possivel colocar estilos globais com styled components
![[Pasted image 20241230145520.png]]
![[Pasted image 20241230145447.png]]

npm i eslint -D
npm i @rocketseat/eslint-config -D
npx eslint --init (gera a configuração)

![[Pasted image 20241230153354.png]]

não funcionou :)

routes com react
react-router
npm i react-router-dom

se cria a pasta pages

se cria um router e que retorna os elementos respectivos
encapsula-se o router em um browser router e etc

layout de rotas faz com que n seja necessário recarregar elementos que se repetem nas telas

no layout usa-se o outlet 

![[Pasted image 20250103150109.png]]
rotas encadeadas

![[Pasted image 20250103152932.png]]
NavLink

![[Pasted image 20250105134920.png]]
min max e step

![[Pasted image 20250105134946.png]]
& 

![[Pasted image 20250105134957.png]]
estilização em cadeia

![[Pasted image 20250105135014.png]]
lógica

As constantes são importadas e usadas como componentes
![[Pasted image 20250105135053.png]]
podem assumir diversas tags e complementar o html substituindo completamente as tags normais contudo com estilização e mesma função

![[Pasted image 20250105135204.png]]
é possivel referenciar variaveis de dentro do tema

![[Pasted image 20250105135339.png]]
theme provider pode ser alterado com funções e etc.
por exemplo um botão que muda o tema de claro para escuro

![[Pasted image 20250105135407.png]]

![[Pasted image 20250105135617.png]]
sugestões de preenchimento

![[Pasted image 20250105135810.png]]
tira a flecha ao final do task input no chrome

border-collapse: collapse; conta 2 bordas como 1

![[Pasted image 20250105143041.png]]

formularios:
controlled: manter a informação em uma variável dentro de um componente em tempo real, recalcula e permite mostrar coisas em tela a partir de mudanças imediatas nos inputs e etc

uncotrolled: não monitora todos inputs em tempo real, obtem os valores apenas ao submeter o formulario, ganho em perfomace 

hooks acoplam uma funcionalidade a um componente 

npm i react-hook-form

![[Pasted image 20250107171724.png]]
useForm retorna um objeto que a aprtir de um desestruturação é possivel acessar apenas os metodos desejados.

register: é usado para indicar quais inputs compoem o formulario 
![[Pasted image 20250107171923.png]]
esta função ja nomeia o input

register recebe o nome do input e retorna metodos:
metodos como onChange, onBlur, onFocus etc

![[Pasted image 20250107172126.png]]
... spread operator é usado para atribuir a todos os atributos de uma vez so

handleSubmit passa uma função que lida com a submissão do formulario
![[Pasted image 20250107172428.png]]
data é um objeto que contem os valores do form ao ser enviado

![[Pasted image 20250107172858.png]]
especifica o tipo do dado

![[Pasted image 20250107173056.png]]
permite monitorar values do form a partir do nome que foi dado ao input
![[Pasted image 20250107173121.png]]
permite manipular a tela a partir da mudança do estado dos inputs

npm i zod 
lib de validação de formularios yup zod e joi
zod tem mais integração com typescript

npm i @hookform/resolvers 
integra a hookform com as outras biblioteca 
![[Pasted image 20250107174019.png]]

![[Pasted image 20250107174157.png]]
importa tudo e permite que se faça referencia a partir de um nome
sem isso seria preciso importar função por função

![[Pasted image 20250107174701.png]]
a partir de um schema/esquema/objeto é determinado as regras do formulario
caso o usuario digite valores q não se encaixem o formulario não é enviado

![[Pasted image 20250107175301.png]]
formState pode retornar os erros
![[Pasted image 20250107175325.png]]

esse tipo de mensagem nem sempre é usado pelo fato de o propio html ja fazer uma vaildação, o usuario n consegue enviar o formulario sem os dados corretos
![[Pasted image 20250107175620.png]]
ja tem um min e max

![[Pasted image 20250107175634.png]]
msm coisa

![[Pasted image 20250107180326.png]]
defaultValues e definição do tipo do data, generics

![[Pasted image 20250107180711.png]]
da pra fazer com o propio zod a partir do schema criado anteriormente,
typeof foi usado porque newCycleFormValidation é um javascript, ou seja, 
o typescript não entende
facilita o processo no caso de adicionar um novo campo no schema

![[Pasted image 20250107181145.png]]
reseta os valores  do campos para os valores default definidos no useForm

![[Pasted image 20250108102657.png]]
passando o tipo do estado com generics

![[Pasted image 20250108102858.png]]
id sera a data atual em milissegundos 

![[Pasted image 20250108104641.png]]
percorre o array todo a te achar o ciclo e retorna ele

![[Pasted image 20250108104910.png]]
faz com q a string tenha 2 caracteres sendo preenchido com 0 a esquerda
![[Pasted image 20250108104817.png]]

useEffect: é um hook do react que implementa um efeito colateral
permite monitorar mudanças em uma variavel e dispara uma função sempre que 
ela muda independente de quem a alterou, executa tambem quando o componente é exibido em tela pela primeira vez
![[Pasted image 20250108105851.png]]
![[Pasted image 20250108110446.png]]
use effect vazio é usado para executar alguma coisa apenas quando o componente é exibido em tela, ou seja, apenas 1 vez
não usar o useEffect para atualizar valores!!!!! (set... do useState, pois vai gerar 2 atualizações se a variável monitorada for um useState)
![[Pasted image 20250108112322.png]]
o useEffect vai comparar a data de criação do ciclo com a data atual sempre que passar 1
segundo no setInterval, setInterval não é preciso por isso usamos a differenceInSeconds
da date-fns para ter precissão do tempo que passou

![[Pasted image 20250108114219.png]]
useEffect também tem retorno, nesse caso é usado para limpar o intervalo para que
não sejam criados intervalos desnecessários, o return do useEffect é chamado na segunda alteração da variavel monitorada, fazendo com que o intervalo que foi criado na primeira
modificação não seja limpado no mesmo momento em que foi criado

![[Pasted image 20250108115323.png]]
mudando o title da página 

![[Pasted image 20250108120334.png]]
condicional com js e html

![[Pasted image 20250108120309.png]]
true se tiver conteudo false se n tiver

prop drilling: quando se tem muitas propriedadas apenas para comunicação entre
componentes

context API: permite compartilhar informações entre varios componentes ao msm tempo
informações globais que podem ser modificadas por todos e atualizada globalmente para 
todos os componentes
![[Pasted image 20250108140633.png]]
o valor das variaveis n pode ser modificado

![[Pasted image 20250109134047.png]]![[Pasted image 20250109134058.png]]
no caso de passar setFunctions do useState é melhor criar uma função para ser passada
proxy para facilitar a tipagem

React hook form ja tem um contexto próprio 
![[Pasted image 20250109134351.png]]
![[Pasted image 20250109134357.png]]
![[Pasted image 20250109134515.png]]

para separar mais ainda o context é criado um arquivo com tudo do context e este retorna
o provider
![[Pasted image 20250109144559.png]]
![[Pasted image 20250109144645.png]]
![[Pasted image 20250109151457.png]]

![[Pasted image 20250109145125.png]]
listar os ciclos

![[Pasted image 20250109150329.png]]

![[Pasted image 20250109150812.png]]
para percorrer de tras pra frente: em andamento sempre vai ficar no topo

![[Pasted image 20250109151017.png]]
![[Pasted image 20250109151023.png]]

reducer é um hook que pode monitorar e agrupar toda a logica por tras de varios useState
em um unico lugar, ou seja, trata de todas as modificação que serão feitas em um estado
![[Pasted image 20250110140415.png]]
![[Pasted image 20250110140424.png]]
ele recebe um estado e uma ação, o estado é definido ao final com o objeto ou o tipo do 
dado que esta sendo tratado, o retorno dele é o estado modificado da maneira que for
precisa

neste caso o reducer fez com que 2 usestate fossem agrupados em um unico local, facilitando a logica e diminuindo ruido e repetição de codigo
![[Pasted image 20250110141532.png]]![[Pasted image 20250110141538.png]]
especifica todas as ações possíveis para evitar erros

![[Pasted image 20250110143711.png]]
![[Pasted image 20250110143722.png]]![[Pasted image 20250110143733.png]]
facilita a chamada do dispatch 

immer é uma lib pra trabalhar com dados imutaveis
ele vai permitir que a gente trabalhe com variaveis imutaveis como se fossem
mutaveis.

npm i immer
![[Pasted image 20250110143952.png]]
![[Pasted image 20250110144031.png]]
é preciso copiar os ciclos e depois adicionar um novo
![[Pasted image 20250110144237.png]]
esse draft é do msm tipo do state mas se comporta como mutavel
draft é como um rascunho 

![[Pasted image 20250110144339.png]]![[Pasted image 20250110144750.png]]
muito mais facil de entender kakakakaka

![[Pasted image 20250110145631.png]]
local storage é um local em que todas as aplicações existentes vão ter seus dados salvos
por isso usar um nome não genérico pra evitar que uma aplicação sobreponha a outra
local storage so aceita valores do tipo texto, por isso o stringify
a versão é util para o caso de abrirem a api desatualizada e evitar problemas, no caso
de mudar o tipo da estrutura/dado

![[Pasted image 20250110151501.png]]
o use reducer recebe um terceiro parametro que vai recuperar os dados da aplicação, 
esse terceiro parametro é uma função q é executada na criação do reducer 
a função de inicialização sempre tem q retornar algo, nesse caso se não tiver nada no
storage ela vai retornar o valor inicial que é o segundo parametro do reducer
o JSON retorna sempre strings
![[Pasted image 20250110150948.png]]
a data antes era um string

estyled componentes
router
context
useEffect
useReducer
react rook form
zod
immer
eslint