import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NutritionService } from '../../services/nutrition.service';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  nutritionData: any[] = [];
  query: string = '100g brisket fries tuna apple banana orange strawberry watermelon pineapple mango avocado blueberry raspberry lemon lime peach pear grape cherry plum kiwi apricot coconut carrot potato tomato cucumber onion garlic lettuce spinach broccoli cauliflower mushroom zucchini eggplant pepper corn green beans asparagus rice pasta bread cheese milk yogurt butter chicken beef pork fish shrimp salmon tuna eggs bacon sausage ham tofu lentils beans chickpeas peas almonds walnuts peanuts cashews sunflower seeds pumpkin seeds chocolate cake cookie pie ice cream honey sugar salt pepper cinnamon vanilla olive oil vinegar ketchup mustard mayonnaise jam peanut butter';

  constructor(private nutritionService: NutritionService) {}

  ngOnInit(): void {
    this.nutritionService.getNutrition(this.query).subscribe((data: any[]) => {
      this.nutritionData = data;
    }, (error: any) => {
      console.error('Error fetching data', error);
    });
  }
}
