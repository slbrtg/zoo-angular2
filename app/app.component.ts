import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Angular Zoo</h1>
  <br>
  <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
  <edit-animal [childSelectedAnimal]="selectedAnimal"(doneButtonClickedSender)="finishedEditing()"></edit-animal>
  <new-animal (newAnimalSender)="saveAnimal($event)"></new-animal>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    // constructor(public species: string, public name: string, public age: number, public diet: string, public zooLocation: string, public numOfCaretakers: number, public sex: string, public likes: string, public dislikes: string)

    new Animal("Doggo", "good boi", 2, "treats", "internet", 1, "boy", "food, pettings", "Cold, Naked Depression"),
    new Animal("Doggo2", "good boi", 0, "treats", "internet", 1, "boy", "food, pettings", "Cold, Naked Depression")
  ]
  selectedAnimal = null;

  saveAnimal(newAnimalFromChild: Animal){
    this.masterAnimalList.push(newAnimalFromChild);
  }

  editAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing(){
    this.selectedAnimal = null;
  }
}
