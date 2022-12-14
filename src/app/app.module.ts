import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Para trabajar con Reactive Forms
import { ReactiveFormsModule } from '@angular/forms';

// Para trbajar con peticiones http
import { HttpClientModule } from '@angular/common/http';

// Pra trabajar con Tablas de material
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

// Para trabajar con controles de formularios de material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';

// Para trabajar con mensaje de alertas
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Para trabajar con iconos de material
import { MatIconModule } from '@angular/material/icon';

// Pra trabajar con modales de material
import { MatDialogModule } from '@angular/material/dialog';

// Pra trabajar con cuadricular
import { MatGridListModule } from '@angular/material/grid-list';
import { DialogAddEditComponent } from './Dialogs/dialog-add-edit/dialog-add-edit.component';
import { DialogoDeleteComponent } from './Dialogs/dialogo-delete/dialogo-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogAddEditComponent,
    DialogoDeleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MomentDateModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
