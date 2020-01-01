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
  retorno: any;
  ismensagem: boolean = false;

  ngOnInit() { }

  saveAdviceForm= new FormGroup ({
    title: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)])
  });

  saveAdvice(saveAdvice) {
    console.log('teste');
    this.advice = new Advice();
    this.advice.title = this.adviceTitle.value;
    this.advice.description = this.adviceDescription.value;
    this.save();
    this.saveAdviceForm.reset();
  }

  save() {
    console.log('teste');
    this.adviceService.insertAdvice(this.advice)
        .subscribe(data => {
                      this.retorno = 'Advice Added SuccessFully!',
                      this.ismensagem =  true;
                    }, error => {
                      this.retorno = error.error.message,
                      this.ismensagem =  true;
                    });
  }

  get adviceTitle() {
    return this.saveAdviceForm.get('title');
  }

  get adviceDescription() {
    return this.saveAdviceForm.get('description');
  }

   closeAlert() {
    this.ismensagem = false;
  }
}
