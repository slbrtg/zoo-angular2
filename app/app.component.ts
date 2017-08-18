import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Angular Zoo</h1>
  <br>
  <animal-list [childAnimalList]="masterAnimalList"></animal-list>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    // constructor(public species: string, public name: string, public age: number, public diet: string, public zooLocation: string, public numOfCaretakers: number, public sex: string, public likes: string, public dislikes: string)

    new Animal("Doggo", "good boi", 2, "treats", "internet", 1, "boy", "food, pettings", "Cold, Naked Depression")
  ]
}
