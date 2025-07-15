import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ErrorService } from './Services/ErrorService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  
  private subscription: Subscription[] = [];
  errorMessage: string | null = null;

  constructor(private errorService: ErrorService) { }

  ngOnInit(): void {
    

    this.subscription.push(
      this.errorService.error$.subscribe(message => {
        this.errorMessage = message;
      })
    );


   
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub => sub.unsubscribe());
  }
  
 
 
}
