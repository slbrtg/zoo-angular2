import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
<div *ngIf="childSelectedAnimal">
  <h1>Edit the animal</h1>
  <br>
  <label>Edit Species</label>
  <input [(ngModel)]="childSelectedAnimal.species">
  <br>
  <label>Edit Name</label>
  <input [(ngModel)]="childSelectedAnimal.name">
  <br>
  <label>Edit Age</label>
  <input [(ngModel)]="childSelectedAnimal.age">
  <br>
  <label>Edit Diet</label>
  <input [(ngModel)]="childSelectedAnimal.diet">
  <br>
  <label>Edit Zoo of Residence</label>
  <input [(ngModel)]="childSelectedAnimal.zooLocation">
  <br>
  <label>Edit Number of Caretakers</label>
  <input [(ngModel)]="childSelectedAnimal.numOfCaretakers">
  <br>
  <label>Edit Sex</label>
  <input [(ngModel)]="childSelectedAnimal.sex">
  <br>
  <label>Edit List of the Animal's Likes</label>
  <input [(ngModel)]="childSelectedAnimal.likes">
  <br>
  <label>Edit List of the Animal's Dislikes</label>
  <input [(ngModel)]="childSelectedAnimal.dislikes">
  <br>
</div>
  `
})
export class EditAnimalComponent{
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked(){
    this.doneButtonClickedSender.emit();
  }
}
