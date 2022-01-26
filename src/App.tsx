import { useEffect } from 'react';
import * as C from './App.styles';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

const App = () => {
  const defaultName = 'Player'
  const char = useCharacter('Player1', 100);
  const char2 = useCharacter('Player2', 70);
  let chars = [char, char2];

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleClick);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();
        break;
      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();
        break;
      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();
        break;
      case 'KeyS':
      case 'ArrowDown':
        char.moveDown();
        break;

    }
  }

  const handleClick = (e: MouseEvent) => {
    console.log(e.target)
    const elem = e.target as HTMLTextAreaElement;
    const playerTarget = elem.getAttribute('id');

    if (playerTarget?.includes(defaultName) &&
        playerTarget != char.name) {
        for (let i = 0; i < chars.length; i++) {
          let auxChar = chars[i];
          if (auxChar.name == playerTarget) {
            auxChar.receiveDamage(
              Number(char.attack({
                x: char.x,
                y: char.y
              }))
            )
          }
        }
    }
  }

  return (
    <C.Container>
      <C.Map>
        {chars.map((c, i) =>
          <Character key={`${i}`} x={c.x} y={c.y} life={c.life} side={c.side} name={`${c.name}`}/>
        )}
      </C.Map>
    </C.Container>
  );
}

export default App;