import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Field } from '../shared/field.model';
import { ShoppingListService } from './shopping-list.service';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  fields: Field[];
  private subscription: Subscription;

  constructor(private slService: ShoppingListService, private http: HttpClient) { }

  ngOnInit() {
    this.fields = this.slService.getFields();
    this.subscription = this.slService.fieldsChanged
      .subscribe(
        (fields: Field[]) => {
          this.fields = fields;
        }
      );
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  imageSrc: string;
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
    
  get f(){
    return this.myForm.controls;
  }
    
  onFileChange(event) {
    const reader = new FileReader();
      
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      
      reader.onload = () => {
    
        this.imageSrc = reader.result as string;
      
        this.myForm.patchValue({
          fileSource: reader.result
        });
    
      };
    
    }
  }
    
  submit(){
    console.log(this.myForm.value);
    /*
    this.http.post('http://localhost:8001/upload.php', this.myForm.value)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
      */
  }
}
