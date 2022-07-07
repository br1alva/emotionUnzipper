import { Experience } from './experience.model';
import { Relationship } from './relationship.model';

export interface Character {
  id: string;
  name: string;
  owns: Relationship[];
  belongs: Relationship[];
  story: Experience[];
}
