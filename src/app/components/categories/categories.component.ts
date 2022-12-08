import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category';
import { CATEGORY } from 'src/app/mock-categories';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  category: Category = {
    id: 1,
    name: ' List Begins'
  };

  categories = CATEGORY;

  constructor(private categoryService: HeroService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

  selectedCategory?: Category;
  
  onSelect(category: Category): void {
    this.selectedCategory = category;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {return;}
    this.categoryService.addCategory({ name } as Category)
    .subscribe(category => {
      this.categories.push(category);
    })
  }

}
