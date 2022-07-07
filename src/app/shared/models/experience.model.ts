import { Character } from './character.model';
import { Feeling } from './feeling.model';

export interface Experience {
  id: string;
  involved: Character[];
  story: string;
  feeling?: Feeling;
}
