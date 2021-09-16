import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Farmer } from '../farmer.model';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-farmer-detail',
  templateUrl: './farmer-detail.component.html',
  styleUrls: ['./farmer-detail.component.css']
})
export class FarmerDetailComponent implements OnInit {
  farmer: Farmer;
  id: number;

  constructor(private farmerService: FarmerService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.farmer = this.farmerService.getFarmer(this.id);
        }
      );
  }

  onAddToShoppingList() {
    this.farmerService.addFieldsToShoppingList(this.farmer.fields);
  }

  onEditFarmer() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteFarmer() {
    this.farmerService.deleteFarmer(this.id);
    this.router.navigate(['/farmers']);
  }

}
