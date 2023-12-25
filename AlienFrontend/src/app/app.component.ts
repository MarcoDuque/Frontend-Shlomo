import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from "./screens/courses/courses.component";
import { CustomersComponent } from "./screens/customers/customers.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CoursesComponent, CustomersComponent]
})
export class AppComponent {
  title = 'AlienFrontend';
}
