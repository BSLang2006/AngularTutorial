import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category';
import { CATEGORY } from 'src/app/mock-categories';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {

  category: Category = {
    id: 1,
    name: ' List Begins'
  };

  categories = CATEGORY;

  constructor() { }

  ngOnInit(): void {
  }

}
