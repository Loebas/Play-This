import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Game } from '../game/game';

import { from } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  @Output() newGame = new EventEmitter<Game>();
  public gameForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  onSubmit() {
    //nog te implementeren: tags naar string[]
    let tags = null;
    let newGame = new Game(null, this.gameForm.get('gameNaam').value, this.gameForm.get('minSpelers').value, this.gameForm.get('maxSpelers').value, tags);
    this.newGame.emit(newGame);


  };

  getErrorMessage(errors: any) {
    if (errors.required)
      return 'Verplicht veld';
  }



  get tags(): FormArray {

    return <FormArray>this.gameForm.get('tags');
  }

  addTag() {

    this.tags.push(new FormControl(''));

    // if (this.tags[this.tags.length - 1].length > 1)
    //  
  }

  ngOnInit() {


    this.gameForm = new FormGroup(
      {
        gameNaam: new FormControl('', [Validators.required]),
        minSpelers: new FormControl('', [Validators.required]),
        maxSpelers: new FormControl('', [Validators.required]),
        tags: this.fb.array([new FormControl(''), new FormControl('')])


      }

    );


  }
}
