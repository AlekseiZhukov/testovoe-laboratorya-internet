import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 openMobileMenu = false;
  constructor() { }

  @HostListener("click", ['$event']) onClick(event: MouseEvent){
    if ((event.target as HTMLElement).getAttribute('data-myAttr') === 'mobileLink') {
      this.openMobileMenu = false
    }
  }

  toggleMobileMenu(): void {
    this.openMobileMenu = !this.openMobileMenu
  }


  ngOnInit(): void {
  }

}
