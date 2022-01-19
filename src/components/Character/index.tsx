import * as C from './styles';

type Props = {
    x: number;
    y: number;
}

export const Character = ({x, y}: Props) => {
    // 480 / 30 = 16
    const size = 30;
    return (
        <C.Container
            size={size}
            left={x * size}
            top={y * size}
        >

        </C.Container>
    );
}