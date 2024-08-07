import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {

  readonly data = [
    {
      id: 1,
      image: 'waiting.png',
      title: 'Прочитай задание внимательно',
      description: 'Думаю у тебя не займет это больше двух-трех минут'
    },
    {
      id: 2,
      image: 'delivery-truck.png',
      title: 'Изучи весь макет заранее',
      description: 'Подумай как это будет работать на разных разрешениях и при скролле'
    },
    {
      id: 3,
      image: 'secure.png',
      title: 'Сделай хорошо',
      description: 'Чтобы мы могли тебе доверить подобные задачи в будущем'
    },
    {
      id: 4,
      image: 'money-bags.png',
      title: 'Получи предложение',
      description: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
