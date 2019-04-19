import { Injectable } from '@angular/core';

import { Skill } from '../models/skill';
import { Level } from '../types/level.enum';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill[] = [
    {
        id: 0,
        name: 'CSS',
        level: Level.Expert
    },
    {
        id: 1,
        name: 'HTML5',
        level: Level.Expert
    },
    {
        id: 2,
        name: 'JavaScript, AngularJS, ReactJS, jQuery, TypeScript',
        level: Level.Advanced
        
    },
    {
      id: 3,
      name: 'SQL, NoSQL',
      level: Level.Advanced
    },
    {
      id: 4,
      name: 'Bootstrap',
      level: Level.Advanced
    },
    {
      id: 5,
      name: 'Scrum, Kanban',
      level: Level.Advanced
    },
    {
      id: 6,
      name: 'Java',
      level: Level.Intermediate
  },
  {
    id: 7,
    name: 'C#, ASP .Net',
    level: Level.Intermediate
  },
  {
    id: 8,
    name: 'NodeJS, Express, MongoDB',
    level: Level.Intermediate
  }
];

getSkills = (): Observable<Skill[]> => {
  return of(this.skills)
}

  constructor() { }
}
