import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
<select (change)="onChange($event.target.value)">
  <option value="allAnimals">All Animals</option>
  <option value="gtoe2">2 and up</option>
  <option value="lt2">0-1</option>
</select>
<div id="animal-list" *ngFor="let animal of childAnimalList | age:filterByAge">
  <br>
  <h3>ANIMAL ENTRY:</h3>
  <p>---------------------------</p>
  <h3>SPECIES: {{animal.species}}</h3>
  <h3>NAME: {{animal.name}}</h3>
  <h3>AGE: {{animal.age}}</h3>
  <h3>DIET: {{animal.diet}}</h3>
  <h3>ZOO: {{animal.zooLocation}}</h3>
  <h3>CARETAKERS: {{animal.numOfCaretakers}}</h3>
  <h3>SEX: {{animal.sex}}</h3>
  <h3>LIKES: {{animal.likes}}</h3>
  <h3>DISLIKES: {{animal.dislikes}}</h3>
  <p>---------------------------</p>
  <br>
  <button (click)="editButtonHasBeenClicked(animal)">Edit</button>
</div>
  `
})

export class AnimalListComponent{
  // constructor(public species: string, public name: string, public age: number, public diet: string, public zooLocation: string, public numOfCaretakers: number, public sex: string, public likes: string, public dislikes: string)
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "allAnimals";

  editButtonHasBeenClicked(animalToEdit: Animal){
    console.log(animalToEdit);
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu){
    this.filterByAge = optionFromMenu;
  }


}
