import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  showScrollToTopButton = false;
  title = 'lcdlm';

  ngOnInit() {
    window.addEventListener('scroll',()=>{
      this.showScrollToTopButton = window.scrollY > 200;
    });
  }
}
