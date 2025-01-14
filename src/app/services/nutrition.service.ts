import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {
  private apiUrl = 'https://api.api-ninjas.com/v1/nutrition?query=1kg brisket fries tuna apple banana orange strawberry watermelon pineapple mango avocado blueberry raspberry lemon lime peach pear grape cherry plum kiwi apricot coconut carrot potato tomato cucumber onion garlic lettuce spinach broccoli cauliflower mushroom zucchini eggplant pepper corn green beans asparagus rice pasta bread cheese milk yogurt butter chicken beef pork fish shrimp salmon tuna eggs bacon sausage ham tofu lentils beans chickpeas peas almonds walnuts peanuts cashews sunflower seeds pumpkin seeds chocolate cake cookie pie ice cream honey sugar salt pepper cinnamon vanilla olive oil vinegar ketchup mustard mayonnaise jam peanut butter\n';
  private apiKey = 'lKk/Mxlq73Ek3bS37WGA+w==aMX2ApYLm6i1uOBf';

  constructor(private http: HttpClient) {}

  getNutrition(query: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey
    });

    return this.http.get<any>(`${this.apiUrl}${query}`, { headers });
  }
}
