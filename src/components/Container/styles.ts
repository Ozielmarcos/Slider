import styled from "styled-components";
import { ContainerBaseProps } from "./props";

export const ContainerBase = styled.div<ContainerBaseProps>`
width: ${(props) => props.$width};
height: ${(props) => props.$height};
margin: ${(props) => props.$margin};
padding: ${(props) => props.$padding};
display: ${(props) => props.$display};
flex: ${(props) => props.$flex};
align-items: ${(props) => props.$alignItems};
justify-content: ${(props) => props.$justifyContent};
row-gap: ${(props) => props.$rowGap};
column-gap: ${(props) => props.$columnGap};
border: ${(props) => props.$border};
border-radius: ${(props) => props.$borderRadius};
background-color: ${(props) => props.$backgroundColor};
background-image: ${(props) => props.$backgroundImage};
background-repeat: ${(props) => props.$backgroundRepeat};
background-position: ${(props) => props.$backgroundPosition};
background-size: ${(props) => props.$backgroundSize};
overflow: ${(props)=>props.$overflow};
position: ${(props)=>props.$position};
top: ${(props)=>props.$top};
left: ${(props)=>props.$left};
right: ${(props)=>props.$right};
bottom: ${(props)=>props.$bottom};
`