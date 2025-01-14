import { Component, OnInit } from '@angular/core';
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
  query: string = '100g brisket fries tuna apple banana orange strawberry watermelon pineapple mango avocado blueberry raspberry lemon lime peach pear grape cherry plum kiwi apricot coconut carrot potato tomato cucumber onion garlic lettuce spinach broccoli cauliflower mushroom zucchini eggplant pepper corn green beans asparagus rice pasta bread cheese milk yogurt butter chicken beef pork fish shrimp salmon eggs bacon sausage ham tofu lentils beans chickpeas peas almonds nuts peanuts cashews sunflower seeds pumpkin seeds chocolate cake cookie pie ice cream honey sugar salt cinnamon vanilla olive oil vinegar ketchup mustard mayonnaise jam peanut butter';

  constructor(private nutritionService: NutritionService) {}

  ngOnInit(): void {
    this.nutritionService.getNutrition(this.query).subscribe((data: any[]) => {
      this.nutritionData = data.map(item => {
        return {
          ...item,
          name: this.translateName(item.name)
        };
      });
    }, (error: any) => {
      console.error('Error fetching data', error);
    });
  }

  translateName(name: string): string {
    const translations: { [key: string]: string } = {
      'brisket': 'Brisket',
      'fries': 'Patatas Fritas',
      'tuna': 'Atún',
      'apple': 'Manzana',
      'banana': 'Plátano',
      'orange': 'Naranja',
      'strawberry': 'Fresa',
      'watermelon': 'Sandía',
      'pineapple': 'Piña',
      'mango': 'Mango',
      'avocado': 'Aguacate',
      'blueberry': 'Arándano',
      'raspberry': 'Frambuesa',
      'lemon': 'Limón',
      'lime': 'Lima',
      'peach': 'Melocotón',
      'pear': 'Pera',
      'grape': 'Uva',
      'cherry': 'Cereza',
      'plum': 'Ciruela',
      'kiwi': 'Kiwi',
      'apricot': 'Albaricoque',
      'coconut': 'Coco',
      'carrot': 'Zanahoria',
      'potato': 'Patata',
      'tomato': 'Tomate',
      'cucumber': 'Pepino',
      'onion': 'Cebolla',
      'garlic': 'Ajo',
      'lettuce': 'Lechuga',
      'spinach': 'Espinaca',
      'broccoli': 'Brócoli',
      'cauliflower': 'Coliflor',
      'mushroom': 'Champiñón',
      'zucchini': 'Calabacín',
      'eggplant': 'Berenjena',
      'pepper': 'Pimiento',
      'corn': 'Maíz',
      'green beans': 'Judías Verdes',
      'asparagus': 'Espárragos',
      'rice': 'Arroz',
      'pasta': 'Pasta',
      'bread': 'Pan',
      'cheese': 'Queso',
      'milk': 'Leche',
      'yogurt': 'Yogur',
      'butter': 'Mantequilla',
      'chicken': 'Pollo',
      'beef': 'Carne de Vaca',
      'pork': 'Cerdo',
      'fish': 'Pescado',
      'shrimp': 'Camarón',
      'salmon': 'Salmón',
      'eggs': 'Huevos',
      'bacon': 'Bacon',
      'sausage': 'Salchicha',
      'ham': 'Jamón',
      'tofu': 'Tofu',
      'lentils': 'Lentejas',
      'beans': 'Habichuelas',
      'chickpeas': 'Garbanzos',
      'peas': 'Guisantes',
      'almonds': 'Almendras',
      'nuts': 'Nueces',
      'peanuts': 'Cacahuates',
      'cashews': 'Anacardos',
      'sunflower seeds': 'Semillas de Girasol',
      'pumpkin seeds': 'Semillas de Calabaza',
      'chocolate': 'Chocolate',
      'cake': 'Tarta',
      'cookie': 'Galleta',
      'pie': 'Pastel',
      'ice cream': 'Helado',
      'honey': 'Miel',
      'sugar': 'Azúcar',
      'salt': 'Sal',
      'cinnamon': 'Canela',
      'vanilla': 'Vainilla',
      'olive oil': 'Aceite de Oliva',
      'vinegar': 'Vinagre',
      'ketchup': 'Ketchup',
      'mustard': 'Mostaza',
      'mayonnaise': 'Mayonesa',
      'jam': 'Mermelada',
      'peanut butter': 'Mantequilla de Cacahuete'
    };
    return translations[name.toLowerCase()] || name;
  }
}
