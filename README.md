# desafio-academia-tecnica-capgemini-para-mulheres
Resolução do desafio proposto pela empresa Proway para academia técnica em Java e Angular para mulheres da empresa Capgemini
<h1>Resolução desafio programação Academia Técnica Capgemini Proway</h1>

<h3>A agência Divulga Tudo precisa de um programa para gerenciar os seus anúncios online. O objetivo dos anúncios faz parte de uma campanha nas redes sociais. O sistema de gerenciamento permitirá a gestão do anúncio e o rastreio dos resultados da campanha.</h3>
<h3>Este programa será composto de duas partes:</h3>
<h3>1ª Parte – Uma calculadora de alcance de anúncio online.</h3>
<h3>Considere os seguintes critérios fictícios para desenvolver a calculadora de alcance de anúncio:</h3>
<p><strong>Baseados em dados de análise de anúncios anteriores, a agência tem os seguintes dados:</strong></p>  
<ul>
  <li>a cada 100 pessoas que visualizam o anúncio 12 clicam nele.</li>
  <li>a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.</li>
  <li>cada compartilhamento nas redes sociais gera 40 novas visualizações.</li>
  <li>30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido.</li>
  <li>o mesmo anúncio é compartilhado no máximo 4 vezes em sequência</li>
  <li>(1ª pessoa -> compartilha -> 2ª pessoa -> compartilha - > 3ª pessoa -> compartilha -> 4ª pessoa)</li> 
</ul>

Crie um script em sua linguagem de programação preferida que receba o valor investido em reais e retorne uma projeção aproximada da quantidade máxima de pessoas que visualizarão o mesmo anúncio (considerando o anúncio original + os compartilhamentos).

<h3> 2ª Parte - Sistema de cadastro de anúncios online </h3>
Considere os seguintes critérios fictícios para desenvolver o cadastro de anúncios:
Crie um sistema que permita o cadastro de anúncios. O anúncio deverá conter os seguintes dados:

<li>nome do anúncio</li>
<li>cliente</li>
<li>data de início</li>
<lidata de término</li>
<li>investimento por dia</li>
</br>
<h3>O sistema fornecerá os relatórios de cada anúncio contendo:</h3>

<li>valor total investido</li>

<li>quantidade máxima de visualizações</li>

<li>quantidade máxima de cliques</li>

<li>quantidade máxima de compartilhamentos</li>

<li>Os relatórios poderão ser filtrados por intervalo de tempo e cliente.</li>
</br>

<h2>Instruções para rodar o Projeto</h2>
<p>Faça uma cópia do projeto para sua máquina: git clone https://github.com/aremartins/desafio-academia-tecnica-capgemini-para-mulheres.git ou um download.</p>
</br>
<h2>Calculadora</h2>
<p>📋 Como pré requisito, você precisará do Java JDK instalado na sua máquina. Foi utilizada a versão 8 do Java e de uma IDE para Java configurada e sua máquina, como Eclipse ou Intellij.  </p>
<p>🚀 Com o projeto baixado na sua máquina, abra a pasta SRC, e o arquivo Calculadora.java na IDE.  Ou ao invés de baixar o projeto, simplesmente copie o código contido em Calculadora.java diretamente do GitHub e crie um novo projeto Java na sua máquina, copie e cole o código em uma classe nomeada como Calculadora. </p>
<p>⚙️ Informe o valor que gostaria de investir para fazer o cálculo da projeção de visualizações e rode o programa. O resultado será exibido no console.</p>

</br>
</br>
<h2> Sistema de cadastro de anúncios </h2>
<p>📋 Para a resolução deste desafio, foi criado um sistema em HTML, CSS e JavaScript. Não há muitos pré requisitos para visualizar o resultado, mas indico a utilização do navegador Google Chrome.</p>
<p>🚀 Abra a pasta com os arquivos do projeto na sua máquina, eexecute o arquivo index.html; </p>
<p>⚙️ Faça a simulação de um cadastro, digitando os dados solicitados no formulário;</p>
<p>Clique no botão salvar</p>
<p>O sistema irá calcular o valor total investido de acordo com o intervalo de dias informado nos campos data inicial e data final, irá também calcular a projeção da quantidade máxima de visualizações, cliques e compartilhamentos que o anúncio poderá ter;</p>
<p>As informações ficaram salvas em um relatório gerado em uma tabela na mesma página;</p>
<p>Acima da tabela tem um campo de filtro onde é possível pesquisar anuncios através do nome do anúncio.</p>
<p>Obs: A opção para pesquisar por data está sendo implementada</p>
<p>Os dados estão sendo persistidos com a api WebStorage em LocalStorage. As informações ficarão salvas localmente</p>
<h3>Aqui você pode ver uma prévia do sistema<h3>
<img src="https://github.com/aremartins/desafio-academia-tecnica-capgemini-para-mulheres/blob/main/showCapgemnini.gif?raw=true"/>
  </br>
  </br>
  <h2>🛠️Entendo a construção do Sistema</h2>
  <h3>1º Desafio - Calculadora de anúncios</h3>
  <p>Para a resolução deste desafio eu primeiramente havia feito utilizando JavaScript, que é a linguagem que utilizo a mais tempo. Mas recentemente tenho me interessado muito por Java também e resolvi começar a estudar, quando vi a proposta da Academia Capgmemini me senti ainda mais motivada, e,  paralelamente na semana anterior ao prazo final da entrega do desafio consegui passar em uma seleção para um treinamento em Java de um mês, que está acontecendo no período noturno - O Talentos Tech Bank. Dessa forma consegui aplicar o que aprendi recentemente  para resolução deste desafio. Além do que eu já sabia um pouco, aprendi como pedir dados para o usuário através da classe Scanner e assim apliquei a lógica do desafio no valor de entrada(valor que o usuário deseja investir). Inicialmente o resultado estava dando errado de acordo com meu entendimento do que o sistema deveria retornar, debugando descobri que como havia declarado as variáveis como double, o cálculo para os clientes que compartilhavam o anúncio estavam dando um valor 'quebrado'. Por exemplo para 10,00 de investimento inicial, ao invés de retornar 5 clientes que compartilhavam o anúncio retornava 5,36666666. Para resolver este problema, apliquei o math.round nas variáveis com esse problema.</p> 
  </br>
 <h3>2ºDesafio - Sistema de Cadastro de anúncios.</h3>
 <p>Utilizei JavaScript para aplicação da lógica e alguns recursos de CSS. Na funcionalidade para pesquisar os anúncios por nome, apliquei uma classe na tabela de anúncios com 'display:none' e deixei desativada, assim inicialmente todos os anúncios cadastrados são exibidos. Ao digitar o nome do anúncio, essa classe é ativada para todos os anúncios, menos para os anúncios que o usuário está pesquisando, assim só aparecem os anúncios de interesse. Para que os nomes sejam exibidos simultaneamente com as letras que o usuário está digitando (letra a letra) e para filtrar independente de as letras serem digitadas em maiúscula ou minúsculas ou com acentuação, utilizei uma lógica com expressão regular. </p>
<p> Para salvar os cadastros e gerar um relatório com as informações, os dados estão sendo persistidos com a api WebStorage em LocalStorage. As informações ficarão salvas localmente</p>
</br>
  </br>

  <p><strong>Feito com ❤️ por Aretha Martins!</strong></p>


