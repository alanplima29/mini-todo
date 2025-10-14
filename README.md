# Mini To-Do (Expo + TypeScript)

## O que o app faz
- Lista tarefas (dados fake) com **FlatList**.
- Cada item usa um componente com **props**, **useState** e **useEffect**.
- Navega entre **Home → Detalhes → Configurações** via **Expo Router**.
- Envia **parâmetros** para a tela de Detalhes (`id`, `title`).
- **Toque longo** abre **ActionSheet** com ações: *Marcar como concluída* e *Excluir*.

## Prints das telas
<p align="center">
  <img src="./assets/screenshots/home.jpeg" alt="Home" width="260" />
  <img src="./assets/screenshots/list.jpeg" alt="Lista (FlatList)" width="260" />
  <img src="./assets/screenshots/details.jpeg" alt="Detalhes" width="260" />
</p>

## Como executar


### 1) Instalar dependências
```bash
npm install
```
#### ou
```bash
yarn install
```


### 2) Iniciar
```bash
npm run start
```
#### ou
```bash
yarn start
```
### 3) Abrir no dispositivo:
### - Instalar app Expo Go (PlayStore)
### - Expo Go (escaneie o QR Code)
