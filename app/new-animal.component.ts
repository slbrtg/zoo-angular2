import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
<div>
  <h1>Enter a new animal</h1>
  <br>
  <label>Species</label>
  <input class="form-control" #newSpecies>
  <br>
  <label>Name</label>
  <input class="form-control" #newName>
  <br>
  <label>Age</label>
  <input class="form-control" #newAge>
  <br>
  <label>Diet</label>
  <input class="form-control" #newDiet>
  <br>
  <label>Zoo of Residence</label>
  <input class="form-control" #newZooLocation>
  <br>
  <label>Number of Caretakers</label>
  <input class="form-control" #newNumOfCaretakers>
  <br>
  <label>Sex</label>
  <input class="form-control" #newSex>
  <br>
  <label>List of the Animal's Likes</label>
  <input class="form-control" #newLikes>
  <br>
  <label> List of the Animal's Dislikes</label>
  <input class="form-control" #newDislikes>
  <br>
  <button (click)="submitForm(newSpecies.value, newName.species, newAge.value, newDiet.value, newZooLocation.value, newNumOfCaretakers.value, newSex.value, newLikes.value, newDislikes.value);">Submit</button>
</div>
  `
})

export class NewAnimalComponent{
  // constructor(public species: string, public name: string, public age: number, public diet: string, public zooLocation: string, public numOfCaretakers: number, public sex: string, public likes: string, public dislikes: string)
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, zooLocation: string, numOfCaretakers: number, sex: string, likes: string, dislikes: string){
    let newAnimal: Animal = new Animal(species, name, age, diet, zooLocation, numOfCaretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimal);
  }

}
