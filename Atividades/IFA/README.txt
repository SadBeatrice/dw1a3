Programa utilizado na avaliação final da disciplina de DW1A3

Aluno Mathias Lucena Francesquini SP3056741

Como forma de resolver o problema dado, alterei as datas conforme o modelo:
local:{description: '3º sáb. às 17:00h', day: 6, Semana: 3}.

Onde o 'day' representa um dia da semana de 0 a 6, que vai de domingo a sabado.
E o 'Semana' é um valor utilizado como ordenação das datas dentro do mês.
Caso não tenha nenhuma consulta, como é o caso da Jaqueline, é atribuido o valor -2.
Caso tenha consulta no último dia do mês, é atribuido o valor -1.
Caso tenha consultas todos os dias é atribuido o valor 0.
E os valores de 1 a 4 são 1° semana, ..., 4° semana, respectivamente.

Para a buscar a resposta final é chamada uma função buscarResposta();
que verifica o valor da semana, e dependendo do valor chama uma função diferente,
ou retorna null se o valor é -2.
