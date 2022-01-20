import { useEffect } from 'react';
import * as C from './App.styles';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

const App = () => {
  const defaultName = 'Player'
  const char = useCharacter(defaultName);
  const char2 = useCharacter(defaultName);
  let chars = [char, char2];

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
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
  return (
    <C.Container>
      <C.Map>
        {chars.map((c, i) => <Character x={c.x} y={c.y} side={c.side} name={`${c.name}${i+1}`}/>)}
      </C.Map>
    </C.Container>
  );
}

export default App;