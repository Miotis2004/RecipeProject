import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Hamburger', 'Hot and juicy hamburger.', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/2/25/0/bw2b07_hambugers1.jpg.rend.hgtvcom.826.620.suffix/1558017418187.jpeg'),
    new Recipe('French Fries', 'Create french fries with a crispy exterior and a flaky interior.', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-lena-yt-fries-007-1562856338.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
