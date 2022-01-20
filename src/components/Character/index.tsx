import * as C from './styles';
import { CharacterSides } from '../../types/CharacterSides';

type Props = {
    x: number;
    y: number;
    side: CharacterSides;
    name: string;
}

export const Character = ({name, x, y, side}: Props) => {
    // 480 / 30 = 16
    const size = 30;
    const sides = {
        down: 0,
        left: -30,
        right: -60,
        up: -90
    }
    return (
        <C.Container
            size={size}
            left={x * size}
            top={y * size}
            sidePos={sides[side] ?? 0}
        >
            <C.Name>
                {name}
            </C.Name>
        </C.Container>
    );
}