# 📱 Estudo: Tab Bar Animada com React Native

Projeto de estudo para desenvolver uma barra de navegação inferior personalizada (*Custom Tab Bar*) com React Native, TypeScript, Styled Components e React Native Reanimated.

O objetivo é entender como controlar o posicionamento dos elementos, calcular dimensões e criar animações fluidas entre as abas.

## 🚀 Tecnologias utilizadas

* **React Native** — construção da interface.
* **TypeScript** — tipagem estática.
* **React Navigation** — gerenciamento da navegação entre abas.
* **Styled Components** — estilização dos componentes.
* **React Native Reanimated** — animações performáticas.

## 📚 Conteúdos estudados

### 1. Criação da Tab Bar personalizada

A barra de navegação é construída com componentes reutilizáveis, como `Container`, `TabButton`, `Icon`, `Title` e `AnimatedView`.

O componente recebe as propriedades do React Navigation para identificar a aba selecionada e navegar entre as telas.

```tsx
export function TabBar({ state, navigation }: BottomTabBarProps) {
  return (
    <Container>
      {state.routes.map((route, index) => {
        const focused = state.index === index;

        return (
          <TabButton
            key={route.key}
            foccus={focused}
            onPress={() => navigation.navigate(route.name)}
          >
            <Icon foccus={focused}>⌂</Icon>
            <Title foccus={focused}>{route.name}</Title>
          </TabButton>
        );
      })}
    </Container>
  );
}
```

### 2. Cálculo da largura de cada aba

Para posicionar o indicador corretamente, é necessário conhecer a largura total da barra e a quantidade de abas.

```tsx
const tabWidth = barWidth / state.routes.length;
```

* `barWidth`: largura total da barra.
* `state.routes.length`: quantidade de abas.
* `tabWidth`: largura disponível para cada aba, considerando divisões iguais.

A largura total é obtida por meio do evento `onLayout`:

```tsx
<Container
  onLayout={(event) => {
    setBarWidth(event.nativeEvent.layout.width);
  }}
>
```

### 3. Posicionamento do indicador animado

O indicador utiliza `translateX` para se deslocar horizontalmente de acordo com a aba selecionada.

```tsx
const translateX = useSharedValue(0);

useEffect(() => {
  translateX.value = withSpring(state.index * tabWidth);
}, [state.index, tabWidth]);

const animatedStyle = useAnimatedStyle(() => ({
  transform: [
    { translateX: translateX.value },
  ],
}));
```

**Conceitos importantes:**

* `useSharedValue`: armazena um valor que pode ser animado.
* `useAnimatedStyle`: cria estilos que reagem aos valores animados.
* `withSpring`: movimenta o indicador com efeito de mola.
* `translateX`: controla o deslocamento horizontal.
* `state.index`: representa o índice da aba selecionada.

### 4. Centralização do indicador

Quando o indicador é menor que a aba, precisamos calcular a posição inicial para centralizá-lo.

A fórmula é:

$$
left = \frac{tabWidth - indicatorWidth}{2}
$$

Exemplo:

```tsx
const indicatorWidth = tabWidth / 1.2;
const indicatorLeft = (tabWidth - indicatorWidth) / 2;
```

Aplicação no componente:

```tsx
<AnimatedView
  style={[
    animatedStyle,
    {
      width: indicatorWidth,
      left: indicatorLeft,
    },
  ]}
/>
```

Dessa forma, a posição é calculada automaticamente, sem precisar testar valores fixos até encontrar o alinhamento desejado.

### 5. Estilização com Styled Components

Os componentes são estilizados separadamente para facilitar a manutenção e reutilização.

Exemplo de um indicador animado:

```tsx
export const AnimatedView = styled(Animated.View)`
  position: absolute;
  height: 100%;
  background-color: #5636d3;
  border-radius: 20px;
`;
```

A propriedade `position: absolute` permite posicionar o indicador sobre a barra sem alterar o espaço ocupado pelos botões.

Já `position: relative` no contêiner estabelece a referência para o posicionamento absoluto do indicador.

## 🎨 Próximo objetivo: animação líquida

A próxima etapa do estudo é desenvolver um indicador com aparência líquida (*Liquid Tab Bar*).

A ideia é fazer com que o indicador se estique e se deforme durante a troca de abas, criando a impressão de um elemento flexível.

### Comportamento esperado

1. O indicador começa na aba selecionada.
2. Ao selecionar outra aba, inicia o deslocamento.
3. Durante o movimento, a largura e a posição se alteram para produzir a deformação.
4. Ao chegar ao destino, o indicador retorna ao formato original.

Para implementar esse efeito, serão explorados:

* Animação simultânea de posição e largura.
* `useSharedValue` para controlar múltiplos valores.
* `withTiming` e `withSpring` para combinar velocidades e elasticidade.
* `useAnimatedStyle` para atualizar os estilos durante a animação.

O efeito líquido completo ainda é uma etapa de desenvolvimento deste estudo.

## 🧠 Aprendizados

Com este projeto, o objetivo é desenvolver conhecimentos sobre:

* Construção de componentes personalizados.
* Integração com React Navigation.
* Medição de dimensões com `onLayout`.
* Cálculo de posições e larguras proporcionais.
* Estilização com Styled Components.
* Animações com React Native Reanimated.
* Organização e reutilização de componentes em TypeScript.

## 📌 Status do projeto

**Em desenvolvimento.**

O projeto faz parte dos meus estudos de React Native, com foco em interfaces personalizadas e animações.

## 👨‍💻 Autor

**Vingren de Souza Dias**

Estudos de desenvolvimento mobile com React Native, Expo e TypeScript.
