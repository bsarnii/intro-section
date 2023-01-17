import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  opened = false;

  openFeaturesImg = "assets/images/icon-arrow-down.svg";
  openCompanyImg = "assets/images/icon-arrow-down.svg";
  showFeatures = false;
  showCompany = false;

  toggleMenu(){
    this.opened = !this.opened;
  }
  toggleFeatures(){
    if(this.showFeatures){
      this.openFeaturesImg = "assets/images/icon-arrow-down.svg";
    } else {
      this.openFeaturesImg = "assets/images/icon-arrow-up.svg";
    }
    this.showFeatures = !this.showFeatures;
  }
  toggleCompany(){
    if(this.showCompany){
      this.openCompanyImg = "assets/images/icon-arrow-down.svg";
    } else {
      this.openCompanyImg = "assets/images/icon-arrow-up.svg";
    }
    this.showCompany = !this.showCompany
  }
}
