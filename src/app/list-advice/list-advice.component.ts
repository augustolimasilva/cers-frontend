import { Component, OnInit } from '@angular/core';
import { AdviceService } from '../advice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Advice } from '../advice';
import { Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-list-advice',
  templateUrl: './list-advice.component.html',
  styleUrls: ['./list-advice.component.css']
})
export class ListAdviceComponent implements OnInit {

  constructor(private adviceService: AdviceService) { }

  advicesArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  advices: Observable<Advice[]>;
  advice: Advice = new Advice();
  deleteMessage = false;
  adviceDetail: any;
  retorno: any;
  ismensagem: boolean = false;
  modal: boolean = false;
  visualizado: boolean = false;

  ngOnInit() {
    this.dtOptions = {
      pageLength: 6,
      stateSave: true,
      lengthMenu: [[6, 12, 20, -1], [6, 12, 20, 'All']],
      processing: true
    };
    this.adviceService.listAdvice()
                      .subscribe(
                        data => {
                          this.advices = data;
                          this.dtTrigger.next();
                        });
  }

  deleteAdvice(id: number) {
    this.adviceService.deleteAdvice(id)
                      .subscribe(
                        data => {
                          this.ismensagem = true;
                          this.retorno = data.message;
                          this.adviceService.listAdvice()
                                            .subscribe(
                                              x => {
                                              this.advices = x;
                                              this.modal = false;
                                              });
                        }, error => {
                          this.ismensagem = true;
                          this.retorno = error.error.message;
                        });
  }

  detailAdvice(id: number) {
    this.adviceService.getAdvice(id)
                      .subscribe(
                        data => {
                          this.adviceDetail = data;
                          this.advice = this.adviceDetail;

                          if (this.advice.dtVisualization === null) {
                            this.adviceService.updateAdvice(this.advice.id, this.advice)
                                              .subscribe(x => this.visualizado = true);
                          } else {
                            this.visualizado = true;
                          }
                        });
  }

  updateAdviceForm = new FormGroup ({
    title: new FormControl('', [Validators.required, 
                                Validators.minLength(10), 
                                Validators.maxLength(200)]
                          ),
    description: new FormControl('', [Validators.required, 
                                      Validators.minLength(10), 
                                      Validators.maxLength(200)]
                                )
  });

  updateAdvice(updateadvice, id: number) {
    this.advice = new Advice();
    this.advice.dtPublication = this.adviceDetail.dtPublication;
    this.advice.dtVisualization = this.adviceDetail.dtVisualization;
    this.advice.title = this.adviceTitle.value;
    this.advice.description = this.adviceDescription.value;
    this.update(id);
    this.modal = false;
  }

  update(id: number) {
    this.adviceService.updateAdvice(id, this.advice)
                      .subscribe(data => {
                        this.ismensagem = true;
                        this.retorno = 'Advice Detail Updated!';
                        this.adviceService.listAdvice().subscribe(
                          x => {
                            this.advices = x;
                          }
                        );
                      }, error => {
                        this.ismensagem = true;
                        this.retorno = error.error.message;
                      });
  }

  get adviceTitle() {
    return this.updateAdviceForm.get('title');
  }

  get adviceDescription() {
    return this.updateAdviceForm.get('description');
  }

  showModal(id: number) {
    this.detailAdvice(id);
    this.ismensagem = false;
    this.modal = true;
  }

  close() {
    this.modal = false;
  }

  closeAlert() {
    this.ismensagem = false;
  }
}
