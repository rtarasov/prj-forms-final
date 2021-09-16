import { Component, OnInit, Input } from '@angular/core';

import { Farmer } from '../../farmer.model';

@Component({
  selector: 'app-farmer-item',
  templateUrl: './farmer-item.component.html',
  styleUrls: ['./farmer-item.component.css']
})
export class FarmerItemComponent implements OnInit {
  @Input() farmer: Farmer;
  @Input() index: number;

  ngOnInit() {
  }
}
