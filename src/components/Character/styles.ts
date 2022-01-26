import styled from 'styled-components';
import '../../styles/fonts.css';

export const Container = styled.div<{
    size: number,
    left: number,
    top: number,
    sidePos: number
    isAlive: string
}>`
    display: ${props => props.isAlive};
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    background-image: url('/assets/char.png');
    background-position: 0px ${props => props.sidePos}px;
`;

export const Name = styled.div<{

}>`
    font-family: 'Press Start 2P', cursive;
    font-size: 6px;
    position: absolute;
    top: -7px;
`

export const StaticLifeBar = styled.div<{

}>`
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: black;
`

export const LifeBar = styled.div<{
    lifeSize: number
}>`
    position: absolute;
    width: ${props => props.lifeSize}px;
    height: 2px;
    background-color: green;
`