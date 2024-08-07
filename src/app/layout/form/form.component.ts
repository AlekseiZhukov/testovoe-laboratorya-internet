import { Component, OnDestroy } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {FormService} from "../../services/form.service";
import {Subscription} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnDestroy {

  form = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^[А-ЯЁ][а-яё]+/)]],
    phone: ['', [Validators.required]],
    agree: [false],
  });
  private subscription: Subscription | null = null;

  constructor(private fb: FormBuilder, private formService: FormService) { }

  get name() {
    return this.form.get('name');
  }
  get phone() {
    return this.form.get('phone');
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }

  submitForm() {
    if (this.form.valid && this.form.value.name && this.form.value.phone && (this.form.value.agree !== null && this.form.value.agree !== undefined)) {
      this.subscription = (this.formService.sendDataForm(this.form.value.name, this.form.value.phone, this.form.value.agree)
        .subscribe({
          next: (data: any) => {
            //что-то делаем с данными
            this.form.reset()
          },
          error: (err: HttpErrorResponse) => {
            //обр. ошибки
            console.log(err)
            this.form.reset()
          }
        }))
    }
  }
}
