Aqui está um README completo para o aplicativo de Pomodoro que criamos:

⏳ Aplicativo Pomodoro com React Native e Expo

Este é um aplicativo de Pomodoro desenvolvido com React Native e Expo, ideal para ajudar você a gerenciar seu tempo e aumentar sua produtividade. O método Pomodoro utiliza blocos de tempo de trabalho focado intercalados com intervalos curtos e longos para otimizar a concentração e o descanso.

📸 Capturas de Tela

🚀 Funcionalidades

	•	Modo Pomodoro, Short Break e Long Break para alternar entre períodos de foco e descanso.
	•	Exibição de tempo restante com um círculo animado.
	•	Opção para configurar a duração de cada modo.
	•	Notificação sonora quando o tempo termina.
	•	Interface intuitiva com design simples e minimalista.

🛠️ Tecnologias Utilizadas

	•	React Native: Framework para o desenvolvimento de aplicativos móveis.
	•	Expo: Plataforma que facilita o desenvolvimento em React Native.
	•	NativeWind: Para aplicar estilos semelhantes ao Tailwind CSS.
	•	expo-av: Biblioteca do Expo para reproduzir áudio (para o alerta sonoro).
	•	@expo/vector-icons: Biblioteca de ícones do Expo.
	•	expo-linear-gradient: Para adicionar um fundo em degradê.

📋 Pré-requisitos

	1.	Expo CLI: Certifique-se de que o Expo CLI está instalado:

npm install -g expo-cli


	2.	Expo Go no seu dispositivo móvel para testar o aplicativo diretamente.

⚙️ Instalação

	1.	Clone o repositório:

git clone https://github.com/edertaveira/Pomodoro.git
cd pomodoro-app


	2.	Instale as dependências:

npm install


	3.	Instale os pacotes expo-av, expo-linear-gradient, e @expo/vector-icons:

expo install expo-av expo-linear-gradient @expo/vector-icons


	4.	Adicione um arquivo de som (ex. alarm.mp3) na pasta assets para o alerta ao final de cada ciclo.

▶️ Executando o Aplicativo

	1.	Inicie o aplicativo:

expo start


	2.	Escaneie o código QR com o aplicativo Expo Go no seu dispositivo ou execute no emulador de sua preferência.

📚 Uso

	1.	Modo Pomodoro: Pressione “Iniciar” para começar um ciclo de trabalho.
	2.	Short Break e Long Break: Altere para estes modos para períodos de descanso curto ou longo.
	3.	Configuração de Tempos: Clique no ícone de engrenagem para abrir as configurações e ajustar a duração dos períodos de Pomodoro, Short Break e Long Break.
	4.	Alerta Sonoro: Um som tocará automaticamente quando o tempo acabar.

🎨 Personalização

	•	Cores e Estilos: O design do app é minimalista, mas você pode customizar as cores no componente LinearGradient e na propriedade stroke do círculo.
	•	Tempos Padrão: Você pode alterar os tempos padrão diretamente nas variáveis INITIAL_POMODORO_TIME, INITIAL_SHORT_BREAK_TIME, e INITIAL_LONG_BREAK_TIME.

🐛 Tratamento de Erros

	•	Erro de Permissão de Áudio: Se o som não tocar, verifique as permissões de áudio do dispositivo.
	•	Timer Não Funciona: Se o timer não iniciar, verifique se a função setIsActive está sendo chamada corretamente ao pressionar o botão de início.

📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

🌟 Se este projeto foi útil para você, considere deixar uma estrela no repositório! 🌟

Este README fornece uma descrição completa do aplicativo, incluindo instruções de instalação, uso e personalização, além de informações de contribuição e contato.
