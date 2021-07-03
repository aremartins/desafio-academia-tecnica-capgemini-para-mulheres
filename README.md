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
</br></br>
O sistema fornecerá os relatórios de cada anúncio contendo:

<li>valor total investido</li>

<li>quantidade máxima de visualizações</li>

<li>quantidade máxima de cliques</li>

<li>quantidade máxima de compartilhamentos</li>

<li>Os relatórios poderão ser filtrados por intervalo de tempo e cliente.</li>
</br></br>

<h2>Instruções para rodar o Projeto</h2>
<p>Faça uma cópia do projeto para sua máquina: git clone https://github.com/aremartins/desafio-academia-tecnica-capgemini-para-mulheres.git</p>
</br>

<h2>Instruções para rodar a Calculadora</h2>
<p> Foi usada a linguagem Java para resolução desse desafio</p>
<p>Para rodar o script você precisará do Java JDK instalado na sua máquina. Com o projeto baixado na sua máquina, abra a pasta SRC, e o arquivo Calculadora.java em uma IDEA como Eclipse ou IntelliJ ou simplesmente copie o código da Calculadora.java diretamente do GitHub e crie um novo projeto Java na sua máquina, copie e cole o código em uma classe nomeada como Calculadora. </p>
<p> Usei o Java 8 para a resolução. Informe o valor que gostaria de investir para fazer o cálculo da projeção de visualizações e rode o programa. O resultado será exibido no console.</p>

</br>
</br>
<h2> Instruções para o sistema de cadastro de anúncios </h2>
<p> Para a resolução deste desafio, foi criado um sistema em HTML, CSS e JavaScript</p>
<p>Abra a pasta com os arquivos do projeto na sua máquina, execute o arquivo index.html; </p>
<p>Faça a simulação de um cadastro, digitando os dados solicitados no formulário;</p>
<p>Clique no botão salvar</p>
<p>O sistema irá calcular o valor total investido de acordo com o intervalo de dias informado nos campos data inicial e data final, irá também calcular a projeção da quantidade máxima de visualizações, cliques e compartilhamentos que o anúncio poderá ter;</p>
<p>As informações ficaram salvas em um relatório gerado em uma tabela na mesma página;</p>
<p>Acima da tabela tem um campo de filtro onde é possível pesquisar anuncios através do nome do anúncio.</p>
<p>Obs: A opção para pesquisar por data está sendo implementada</p>
<p>Os dados estão sendo persistidos com a api WebStorage em LocalStorage. As informações ficarão salvas localmente</p>
<h3>Aqui você pode ver uma prévia do sistema<h3>
<img src="https://github.com/aremartins/desafio-academia-tecnica-capgemini-para-mulheres/blob/main/showCapgemnini.gif?raw=true"/>


