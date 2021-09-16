import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-farmer-edit',
  templateUrl: './farmer-edit.component.html',
  styleUrls: ['./farmer-edit.component.css']
})
export class FarmerEditComponent implements OnInit {
  id: number;
  editMode = false;
  farmerForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private farmerService: FarmerService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    // const newFarmer = new Farmer(
    //   this.farmerForm.value['name'],
    //   this.farmerForm.value['description'],
    //   this.farmerForm.value['imagePath'],
    //   this.farmerForm.value['fields']);
    if (this.editMode) {
      this.farmerService.updateFarmer(this.id, this.farmerForm.value);
    } else {
      this.farmerService.addFarmer(this.farmerForm.value);
    }
    this.onCancel();
  }

  onAddField() {
    (<FormArray>this.farmerForm.get('fields')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteField(index: number) {
    (<FormArray>this.farmerForm.get('fields')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let farmerName = '';
    let farmerImagePath = '';
    let farmerDescription = '';
    let farmerFields = new FormArray([]);

    if (this.editMode) {
      const farmer = this.farmerService.getFarmer(this.id);
      farmerName = farmer.name;
      farmerImagePath = farmer.imagePath;
      farmerDescription = farmer.description;
      if (farmer['fields']) {
        for (let field of farmer.fields) {
          farmerFields.push(
            new FormGroup({
              'name': new FormControl(field.name, Validators.required),
              'amount': new FormControl(field.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.farmerForm = new FormGroup({
      'name': new FormControl(farmerName, Validators.required),
      'imagePath': new FormControl(farmerImagePath, Validators.required),
      'description': new FormControl(farmerDescription, Validators.required),
      'fields': farmerFields
    });
  }

}
