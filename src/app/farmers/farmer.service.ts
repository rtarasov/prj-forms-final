import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Farmer } from './farmer.model';
import { Field } from '../shared/field.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class FarmerService {
  farmersChanged = new Subject<Farmer[]>();

  private farmers: Farmer[] = [
    new Farmer(
      'John Johnson the farmer',
      'Johnson str. 3, Johnsontown, USA ',
      'https://api.intechopen.com/media/chapter/73560/media/F5.png',
      [
        new Field('field 1', 1),
        new Field('field 2', 20)
      ]),
    new Farmer('Milcktown farmer cooperative',
      'Mainstreet g. 1, Milktown, USA',
      'https://planetobserver.com/wp-content/uploads/2020/09/Satellite-image-Pleiades-China-Yucheng-SaltLake-50cm.jpg',
      [
        new Field('field 1', 2),
        new Field('field 2', 1),
        new Field('field 3', 3),
        new Field('field 4', 4)

      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getFarmers() {
    return this.farmers.slice();
  }

  getFarmer(index: number) {
    return this.farmers[index];
  }

  addFieldsToShoppingList(fields: Field[]) {
    this.slService.addFields(fields);
  }

  addFarmer(farmer: Farmer) {
    this.farmers.push(farmer);
    this.farmersChanged.next(this.farmers.slice());
  }

  updateFarmer(index: number, newFarmer: Farmer) {
    this.farmers[index] = newFarmer;
    this.farmersChanged.next(this.farmers.slice());
  }

  deleteFarmer(index: number) {
    this.farmers.splice(index, 1);
    this.farmersChanged.next(this.farmers.slice());
  }
}
