import java.util.Scanner;

public class Calculadora {

	public static void main(String[] args) {

		System.out.println("Informe o valor que irá investir:");

		Scanner in = new Scanner(System.in);

		double valorInvestido = in.nextDouble();

		double clientesVisualizamAnuncioOriginal = 0;
		double clientesClicamACada100Visualizacoes = 0;
		double clientesCompartilhamACada20Cliques = 0;
		double novasVisualizacoesPorCompartilhamento = 0;
		double cliquesPosNovosCompartilhamentos = 0;
		double totalVisualizacoes = 0;

		clientesVisualizamAnuncioOriginal = valorInvestido * 30;
		clientesClicamACada100Visualizacoes = Math.round(clientesVisualizamAnuncioOriginal * 0.12);
		clientesCompartilhamACada20Cliques = Math.round(clientesClicamACada100Visualizacoes * 0.15);
		novasVisualizacoesPorCompartilhamento = clientesCompartilhamACada20Cliques * 40;

		for (int i = 1; i < 4; i++) {
			for (int c = 0; c < clientesCompartilhamACada20Cliques; c++) {
				novasVisualizacoesPorCompartilhamento = novasVisualizacoesPorCompartilhamento + 40;
				cliquesPosNovosCompartilhamentos = Math.round(novasVisualizacoesPorCompartilhamento * 0.12);
			}

		}

		totalVisualizacoes = novasVisualizacoesPorCompartilhamento + clientesVisualizamAnuncioOriginal;

		System.out.println("Investindo" + " R$" + valorInvestido + " seu anúncio terá aproximadamente "
				+ totalVisualizacoes + " visualizações");

	}

}
