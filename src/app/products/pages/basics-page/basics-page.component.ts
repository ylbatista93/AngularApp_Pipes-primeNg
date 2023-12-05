import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'yuri';
  public nameUpper: string = 'YURI';
  public fullName: string = 'yUrIelvI lEyva  bATIsta';

  public customDate: Date = new Date();

}
