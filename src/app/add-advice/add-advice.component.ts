import { Component, OnInit } from '@angular/core';
import { AdviceService } from '../advice.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Advice } from '../advice';

@Component({
  selector: 'app-add-advice',
  templateUrl: './add-advice.component.html',
  styleUrls: ['./add-advice.component.css']
})
export class AddAdviceComponent implements OnInit {

  constructor(private adviceService: AdviceService) { }

  advice: Advice = new Advice();
  submitted: boolean = false;

  ngOnInit() {
    this.submitted = false;
  }

  saveAdviceForm= new FormGroup ({
    title: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)])
  });

  saveAdvice(saveAdvice) {
    this.advice = new Advice();
    this.advice.title = this.adviceTitle.value;
    this.advice.description = this.adviceDescription.value;
    this.submitted = true;
    this.save();
  }

  save() {
    this.adviceService.insertAdvice(this.advice)
        .subscribe(data => console.log(data), error => console.log(error));
  }

  get adviceTitle() {
    return this.saveAdviceForm.get('title');
  }

  get adviceDescription() {
    return this.saveAdviceForm.get('description');
  }

  addAdviceForm() {
    this.submitted = false;
    this.saveAdviceForm.reset();
  }
}
