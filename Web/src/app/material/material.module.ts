import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule} from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatDivider, MatDividerModule} from '@angular/material/divider';





@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatTooltipModule,
    MatCardModule,
    MatDividerModule

  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatTooltipModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
