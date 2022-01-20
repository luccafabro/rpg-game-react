import styled from 'styled-components';
import '../../styles/fonts.css';

export const Container = styled.div<{
    size: number,
    left: number,
    top: number,
    sidePos: number
}>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    background-image: url('/assets/char.png');
    background-position: 0px ${props => props.sidePos}px;
`;

export const Name = styled.div`
    font-family: 'Press Start 2P', cursive;
    font-size: 6px;
    position: absolute;
    top: -7px;
`