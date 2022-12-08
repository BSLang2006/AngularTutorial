import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/category';

@Component({
  selector: 'app-step-three-details',
  templateUrl: './step-three-details.component.html',
  styleUrls: ['./step-three-details.component.css']
})
export class StepThreeDetailsComponent implements OnInit {

  @Input() category?: Category;

  constructor() { }

  ngOnInit(): void {
  }
 
  //selectedCategory?: Category;

}
