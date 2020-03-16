import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import{FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ResetPasswordComponent } from './reset-password/reset-password.component'
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import {ToastrModule} from 'ngx-toastr'
import { ResponseResetPasswordComponent } from './response-reset-password/response-reset-password.component';
import { PhoneVerficationComponent } from './phone-verfication/phone-verfication.component';
import { MatSliderModule } from '@angular/material/slider';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatSidenavModule, MatToolbarModule, MatDialogModule,
} from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ProfileComponent } from './profile/profile.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { AdminsComponent } from './admins/admins.component';
import {NgsRevealModule} from 'ngx-scrollreveal';
import { HomePageComponent } from './home-page/home-page.component';
import { ProduitForCategoryComponent } from './produit-for-category/produit-for-category.component';
import { ProductComponent } from './product/product.component';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { CartComponent } from './cart/cart.component';
import {
 MatCardModule,
} from '@angular/material';
import { PurchasesComponent } from './purchases/purchases.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CommandsComponent } from './commands/commands.component';
import { UixMatNumberSpinnerModule } from "uix-mat-number-spinner";
import { NotificationComponent } from './notification/notification.component';
import { StorageModule } from '@ngx-pwa/local-storage';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { PaypalComponent } from './paypal/paypal.component';
import { NotAutorizeComponent } from './not-autorize/not-autorize.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ResetPasswordComponent,
    ResponseResetPasswordComponent,
    PhoneVerficationComponent,
    MainNavComponent,
    ProfileComponent,
    AddAdminComponent,
    AddProductComponent,
    AddCategoryComponent,
    CategoriesComponent,
    ProductsComponent,
    AdminsComponent,
    HomePageComponent,
    ProduitForCategoryComponent,
    ProductComponent,
    CartComponent,
    PurchasesComponent,
    CheckoutComponent,
    CommandsComponent,
    NotificationComponent,
    DialogContentComponent,
    PaypalComponent,
    NotAutorizeComponent
  ],
  entryComponents: [DialogContentComponent],

  imports: [
    UixMatNumberSpinnerModule,
    MatCardModule,
    Ng2TelInputModule,
    NgsRevealModule,
    RouterModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(
      {
        progressBar:true,
        progressAnimation:'increasing'
      }
    ),
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
   StorageModule.forRoot({ IDBNoWrap: true }),
    
    
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
