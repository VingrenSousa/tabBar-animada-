

import { Container,TabButton,Icon,Title, AnimatedView } from './styles';
import { useEffect, useState } from 'react';




import{
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  
} from 'react-native-reanimated';

import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';




export function TabBar({state,navigation}:BottomTabBarProps) {
    const [barWidth, setBarWidth] = useState(0); //largura total da sua barra.

    const tabWidth =state.routes.length > 0? barWidth / state.routes.length: 0;
   
    const translateX = useSharedValue(0); // Valor animável do deslocamento horizontal.

    const indicatorWidth = tabWidth / 1.1;
    const indicatorLeft = (tabWidth - indicatorWidth) / 2;


  // Aplica o movimento ao indicador.
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
    ],
  }));


    // Atualiza a posição quando muda a aba selecionada.
    useEffect(() => {
    if (tabWidth > 0) {
      translateX.value = withSpring(state.index * tabWidth);
    }
  }, [state.index, tabWidth, translateX]);

  return (
    <Container
        onLayout={(event) => {
            setBarWidth(event.nativeEvent.layout.width);
      }}
    >
        <AnimatedView
        style={[animatedStyle,
            {
              width:tabWidth/1.1, 
              left: indicatorLeft,
              height: tabWidth/1.5
            }]}

        />
        {
            state.routes.map((route,index)=>{
                const focus=state.index===index
                function handleNaviagte(){
                  navigation.navigate(route.name)
                }
                return(
                    <TabButton 
                        foccus={focus}
                        onPress={handleNaviagte}
                        key={route.key} 
                      >
                        <Icon foccus={focus}>⌂</Icon>
                        <Title foccus={focus} >{route.name}</Title>
                    </TabButton>
                )
            })
        }
    </Container>
  );
}

