import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'shell-home',
  imports: [IonicModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router) {}

  protected navigateToMfe1() {
    this.router.navigate(['/mfe1']);
  }
}
