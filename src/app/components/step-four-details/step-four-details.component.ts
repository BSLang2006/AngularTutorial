import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/category';

@Component({
  selector: 'app-step-four-details',
  templateUrl: './step-four-details.component.html',
  styleUrls: ['./step-four-details.component.css']
})
export class StepFourDetailsComponent implements OnInit {

  @Input() category?: Category;

  constructor() { }

  ngOnInit(): void {
  }
 
  //selectedCategory?: Category;
  
 
}
