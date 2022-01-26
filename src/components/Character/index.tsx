import * as C from './styles';
import { CharacterSides } from '../../types/CharacterSides';

type Props = {
    x: number;
    y: number;
    side: CharacterSides;
    name: string;
    life: number;
}

export const Character = ({name, x, y, life, side}: Props) => {
    const size = 30;
    const lifeSize= life * 0.3;
    const isNotAlive = life <= 0 ? 'none' : 'block';
    const sides = {
        down: 0,
        left: -30,
        right: -60,
        up: -90
    }
    return (
        <C.Container
            isAlive={isNotAlive}
            id={name}
            size={size}
            left={x * size}
            top={y * size}
            sidePos={sides[side] ?? 0}
        >
            <C.StaticLifeBar></C.StaticLifeBar>
            <C.LifeBar lifeSize={lifeSize}>

            </C.LifeBar>
            <C.Name>
                {name}
            </C.Name>
        </C.Container>
    );
}