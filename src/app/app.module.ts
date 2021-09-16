import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FarmersComponent } from './farmers/farmers.component';
import { FarmerListComponent } from './farmers/farmer-list/farmer-list.component';
import { FarmerDetailComponent } from './farmers/farmer-detail/farmer-detail.component';
import { FarmerItemComponent } from './farmers/farmer-list/farmer-item/farmer-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { FarmerStartComponent } from './farmers/farmer-start/farmer-start.component';
import { FarmerEditComponent } from './farmers/farmer-edit/farmer-edit.component';
import { FarmerService } from './farmers/farmer.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FarmersComponent,
    FarmerListComponent,
    FarmerDetailComponent,
    FarmerItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    FarmerStartComponent,
    FarmerEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, FarmerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
