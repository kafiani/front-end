import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResponseResetPasswordComponent } from './response-reset-password/response-reset-password.component';
import { PhoneVerficationComponent } from './phone-verfication/phone-verfication.component';
import { ProfileComponent } from './profile/profile.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { AdminsComponent } from './admins/admins.component';
import { ProduitForCategoryComponent } from './produit-for-category/produit-for-category.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CommandsComponent } from './commands/commands.component';
import { NotificationComponent } from './notification/notification.component';
import { PaypalComponent } from './paypal/paypal.component';
import { IfIsUserService } from './Services/if-is-user.service';
import { IfIsSuperAdminService } from './Services/if-is-super-admin.service';
import { IfIsAdminService } from './Services/if-is-admin.service';
import { BeforeLoginService } from './Services/before-login.service';
import { NotAutorizeComponent } from './not-autorize/not-autorize.component';


const routes: Routes = [
  {path:'' , component:HeaderComponent},
  {path:"login" , component:LoginComponent,
  canActivate:[BeforeLoginService]
},
{path:"not-autorize" , component:NotAutorizeComponent},
  {path:"register" , component:RegisterComponent,
  canActivate:[BeforeLoginService]},
  {path:"resetPassword" , component:ResetPasswordComponent},
  {path:'response-reset-password', component:ResponseResetPasswordComponent},
  { path:'phone_verfication',component:PhoneVerficationComponent},
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[IfIsUserService]

},
  {path:'addAdmin',component:AddAdminComponent,
  canActivate:[IfIsSuperAdminService]
},
  {path:'addCategorie',component:AddCategoryComponent,
  canActivate:[IfIsAdminService]
},
  {path:'addProduct',component:AddProductComponent, canActivate:[IfIsAdminService]},
  {path:'Products',component:ProductsComponent, canActivate:[IfIsAdminService]},
  {path:'Categories',component:CategoriesComponent, canActivate:[IfIsAdminService]},
  {path:'Admins',component:AdminsComponent, canActivate:[IfIsSuperAdminService]},
  {path:'commands',component:CommandsComponent, canActivate:[IfIsAdminService]},
  {path:'category/:id',component:ProduitForCategoryComponent},
  {path:'product/:id',component:ProductComponent},
  {path:'cart',component:CartComponent,
  canActivate:[IfIsUserService]
},
  {path:'purshases',component:PurchasesComponent,
  canActivate:[IfIsUserService]
},
  {path:'checkout',component:CheckoutComponent,
  canActivate:[IfIsUserService]
},
  {path: 'payment', component:PaypalComponent,
  canActivate:[IfIsUserService]
},

  {path:'notification',component:NotificationComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
