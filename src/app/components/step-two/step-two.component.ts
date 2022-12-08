import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category';
import { CATEGORY } from 'src/app/mock-categories';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {

  category: Category = {
    id: 1,
    name: ' List Begins'
  };

  categories = CATEGORY;

  constructor() { }

  ngOnInit(): void {
  }

  selectedCategory?: Category;
  
  onSelect(category: Category): void {
    this.selectedCategory = category;
  }

}