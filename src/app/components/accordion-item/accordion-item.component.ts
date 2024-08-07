import {Component, Input} from '@angular/core';
import {QuestionType} from "../../../types/question.type";

@Component({
  selector: 'accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent  {
@Input() question!: QuestionType;
  panelOpenState = false;

}
