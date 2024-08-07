import {Component} from '@angular/core';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent  {
  questions = [
    {
      id: 1,
      question: 'Подтверждено: сознание наших соотечественников не замутнено пропагандой?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam amet aperiam commodi delectus distinctio eos est explicabo, inventore labore laboriosam nisi nobis placeat quam quibusdam reiciendis, repudiandae, tenetur unde/**/'
    },
    {
      id: 2,
      question: 'Прототип нового сервиса - это как трубный призыв?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam amet aperiam commodi delectus distinctio eos est explicabo, inventore labore laboriosam nisi nobis placeat quam quibusdam reiciendis, repudiandae, tenetur unde/**/'
    },
    {
      id: 3,
      question: 'Частокол на границе продолжает удивлять?',
      answer: 'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.'
    },
    {
      id: 4,
      question: 'Очевидцы сообщают, что слышали грохот грома градущих изменений?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam amet aperiam commodi delectus distinctio eos est explicabo, inventore labore laboriosam nisi nobis placeat quam quibusdam reiciendis, repudiandae, tenetur unde/**/'
    },
    {
      id: 5,
      question: 'И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam amet aperiam commodi delectus distinctio eos est explicabo, inventore labore laboriosam nisi nobis placeat quam quibusdam reiciendis, repudiandae, tenetur unde/**/'
    },
    {
      id: 6,
      question: 'Нынче никто не может себе позволить инициировать треск разлетающихся скреп?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam amet aperiam commodi delectus distinctio eos est explicabo, inventore labore laboriosam nisi nobis placeat quam quibusdam reiciendis, repudiandae, tenetur unde/**/'
    },
    {
      id: 7,
      question: 'Высококачественный прототип будущего проекта обнадёживает?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam amet aperiam commodi delectus distinctio eos est explicabo, inventore labore laboriosam nisi nobis placeat quam quibusdam reiciendis, repudiandae, tenetur unde/**/'
    },
  ];


}
