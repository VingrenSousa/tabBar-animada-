import styled from "styled-components/native";
import Animated from 'react-native-reanimated';
type props={
    foccus?:boolean,
    width?:number
}

export const Container =styled.View`

    flex-direction:row;
    justify-content:space-around;
    align-items: center;
    background-color:${({theme})=>theme.COLORS.black};
    height: 90px;
    position: absolute;
    

    width: 90%;
    margin-left:5%;
    bottom:40px;
    border-radius:50px;
    
`

export const TabButton =styled.Pressable<props>`
    align-items: center;
    gap: 5px;
    flex:1;`

export const Icon =styled.Text<props>`
 color:${({theme,foccus})=>foccus?theme.COLORS.black:theme.COLORS.claer};
`

export const Title =styled.Text<props>`
    color:${({theme,foccus})=>foccus?theme.COLORS.black:theme.COLORS.claer};
`

export const AnimatedView =styled(Animated.View)<props>`
  position: absolute;
 
  background-color: ${({theme})=>theme.COLORS.claer};
  border-radius: 100px;
  
`

