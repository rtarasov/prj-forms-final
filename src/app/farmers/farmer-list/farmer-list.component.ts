import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Farmer } from '../farmer.model';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-farmer-list',
  templateUrl: './farmer-list.component.html',
  styleUrls: ['./farmer-list.component.css']
})
export class FarmerListComponent implements OnInit, OnDestroy {
  farmers: Farmer[];
  subscription: Subscription;

  constructor(private farmerService: FarmerService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.farmerService.farmersChanged
      .subscribe(
        (farmers: Farmer[]) => {
          this.farmers = farmers;
        }
      );
    this.farmers = this.farmerService.getFarmers();
  }

  onNewFarmer() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
