import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div id="animal-list" *ngFor="let animal of childAnimalList">
    <h3>SPECIES: {{animal.species}}</h3>
    <p>---------------------------</p>
    <h3>NAME: {{animal.name}}</h3>
    <p>---------------------------</p>
    <h3>AGE: {{animal.age}}</h3>
    <p>---------------------------</p>
    <h3>DIET: {{animal.diet}}</h3>
    <p>---------------------------</p>
    <h3>ZOO: {{animal.zooLocation}}</h3>
    <p>---------------------------</p>
    <h3>CARETAKERS: {{animal.numOfCaretakers}}</h3>
    <p>---------------------------</p>
    <h3>SEX: {{animal.sex}}</h3>
    <p>---------------------------</p>
    <h3>LIKES: {{animal.likes}}</h3>
    <p>---------------------------</p>
    <h3>DISLIKES: {{animal.dislikes}}</h3>
    <p>---------------------------</p>
  </div>
  `
})

export class AnimalListComponent{
  // constructor(public species: string, public name: string, public age: number, public diet: string, public zooLocation: string, public numOfCaretakers: number, public sex: string, public likes: string, public dislikes: string)
  @Input() childAnimalList: Animal[];

}
