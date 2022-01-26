import { useState } from "react";
import { CharacterSides } from "../types/CharacterSides";
import { mapSpots } from "../data/mapSpots";

type Props = {
    name: string;
    life: number;
}

export const useCharacter = (propName: string, propLife: number) => {
    const [name, setName] = useState(propName);
    const [power, setPower] = useState({max: 15, min: 5})
    const [alive, setAlive] = useState(true);
    const [life, setLife] = useState(propLife);
    const [pos, setPos] = useState({x: 1, y: 2});
    const [side, setSide] = useState<CharacterSides>('down');

    const isAlive = () => {

    }


    const attack = (enemyPos : {x: number, y: number}) => {
        const randomPower = power.min + Math.random() * (power.max - power.min);
        const distanceX = pos.x -enemyPos.x;
        const distanceY = pos.y - enemyPos.y;

        if (distanceX + distanceY > 2) {
            return false;
        }
        return randomPower;
    }

    const receiveDamage = (damage: number) => {
        setLife(life => (
            life = Number(lifeAfterDamage(life, damage))
        ));
    }

    const lifeAfterDamage = (life: number, damage: number) => {
        console.log(`Recebeu ${damage}`)
        console.log(`Life ${life}`)
        if (life - damage > 0) return life - damage;
        if (life - damage < 0) return 0;
    }

    const moveLeft = () => {
        setPos(pos => ({
            x: canMove(pos.x - 1, pos.y) ? pos.x - 1 : pos.x,
            y: pos.y
        }));
        setSide('left');
    }

    const moveRight = () => {
        setPos(pos => ({
            x: canMove(pos.x + 1, pos.y) ? pos.x + 1 : pos.x,
            y: pos.y
        }));
        setSide('right');
    }

    const moveUp = () => {
        setPos(pos => ({
            x: pos.x,
            y: canMove(pos.x, pos.y - 1) ? pos.y - 1 : pos.y
        }));
        setSide('up');
    }

    const moveDown = () => {
        setPos(pos => ({
            x: pos.x,
            y: canMove(pos.x, pos.y + 1) ? pos.y + 1 : pos.y
        }));
        setSide('down');
    }

    const canMove = (x: number, y: number) => {
        if (mapSpots[y] === undefined || mapSpots[x] === undefined) return false;
        return (
            mapSpots[y][x] === 1
        );
    }

    return {
        x: pos.x,
        y: pos.y,
        side,
        name,
        life,
        moveDown,
        moveUp,
        moveLeft,
        moveRight,
        attack,
        receiveDamage
    };
}