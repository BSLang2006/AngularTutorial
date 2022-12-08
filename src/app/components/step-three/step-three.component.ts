import { Component, OnInit } from '@angular/core';
import { CATEGORY } from 'src/app/mock-categories';
import { Category } from 'src/app/category';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css']
})
export class StepThreeComponent implements OnInit {

  categories: Category[] = [];

  category: Category = {
    id: 1,
    name: ' List Begins'
  };

 

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  selectedCategory?: Category;
  
  onSelect(category: Category): void {
    this.selectedCategory = category;
  }

  getCategories(): void {
    this.heroService.getCategories()
    .subscribe(categories => this.categories = categories);
  }

  delete(category: Category){
    this.categories = this.categories.filter(h => h !== category);
    this.heroService.deleteCategory(category.id).subscribe();
    
 
}}
