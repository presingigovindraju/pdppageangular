import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProductOption {
  itemNumber: string;
  upc: string;
  seatSize: string;
  frontRigging: string;
  hcpcs: string;
  price: string;
}

interface Specification {
  name: string;
  value: string;
}

@Component({
  selector: 'app-product-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-tabs.html',
  styleUrl: './product-tabs.css'
})
export class ProductTabs {

  // --------------------------------------------------
  // ACTIVE TAB
  // --------------------------------------------------

  activeTab = 0;


  tabs = [
    'Product Options',
    'Features',
    'Specifications',
    'Resources/Downloads'
  ];


  selectTab(index: number): void {

    this.activeTab = index;

  }


  // --------------------------------------------------
  // PRODUCT OPTIONS
  // --------------------------------------------------

  productOptions: ProductOption[] = [

    {
      itemNumber: 'PLA416FBUARAD-ELR',
      upc: '822383005263',
      seatSize: '16"',
      frontRigging: 'Elevating Leg Rest',
      hcpcs: '$299.99',
      price: '$299.99'
    },

    {
      itemNumber: 'PLA416FBUARAD-ELR',
      upc: '822383005263',
      seatSize: '16"',
      frontRigging: 'Elevating Leg Rest',
      hcpcs: '$299.99',
      price: '$299.99'
    },

    {
      itemNumber: 'PLA416FBUARAD-ELR',
      upc: '822383005263',
      seatSize: '16"',
      frontRigging: 'Elevating Leg Rest',
      hcpcs: '$299.99',
      price: '$299.99'
    },

    {
      itemNumber: 'PLA416FBUARAD-ELR',
      upc: '822383005263',
      seatSize: '16"',
      frontRigging: 'Elevating Leg Rest',
      hcpcs: '$299.99',
      price: '$299.99'
    },

    {
      itemNumber: 'PLA416FBUARAD-ELR',
      upc: '822383005263',
      seatSize: '16"',
      frontRigging: 'Elevating Leg Rest',
      hcpcs: '$299.99',
      price: '$299.99'
    },

    {
      itemNumber: 'PLA416FBUARAD-ELR',
      upc: '822383005263',
      seatSize: '16"',
      frontRigging: 'Elevating Leg Rest',
      hcpcs: '$299.99',
      price: '$299.99'
    },

    {
      itemNumber: 'PLA416FBUARAD-ELR',
      upc: '822383005263',
      seatSize: '16"',
      frontRigging: 'Elevating Leg Rest',
      hcpcs: '$299.99',
      price: '$299.99'
    },

    {
      itemNumber: 'PLA416FBUARAD-ELR',
      upc: '822383005263',
      seatSize: '16"',
      frontRigging: 'Elevating Leg Rest',
      hcpcs: '$299.99',
      price: '$299.99'
    }

  ];


  // --------------------------------------------------
  // FEATURES
  // --------------------------------------------------

  featuresOne = [

    'Compact and lightweight design for easy transport',

    'LED display with battery and flow rate indicators',

    'Quiet operation suitable for home and clinical use',

    'Medical-grade materials ensure patient safety'

  ];


  featuresTwo = [

    'Adjustable oxygen flow up to 5 L/min',

    'Comes with reusable air filters for cost efficiency',

    'Low oxygen alarm for patient safety',

    'Continuous and pulse dose modes available',

    'Backed by a 2-year manufacturer warranty'

  ];


  // --------------------------------------------------
  // SPECIFICATIONS
  // --------------------------------------------------

  specificationsOne: Specification[] = [

    {
      name: 'Primary Product Color',
      value: 'Black'
    },

    {
      name: 'Primary Product Material',
      value: 'Steel'
    },

    {
      name: 'Overall Product Height',
      value: '36"'
    },

    {
      name: 'Overall Product Length',
      value: '42"'
    },

    {
      name: 'Overall Product Width',
      value: '26"'
    },

    {
      name: 'Folded Dimensions',
      value: '42" x 12.5" x 36"'
    },

    {
      name: 'Base Shipping Height',
      value: '36.6'
    },

    {
      name: 'Base Shipping Length',
      value: '32.48'
    },

    {
      name: 'Base Shipping Width',
      value: '11.42'
    },

    {
      name: 'Base Shipping Weight',
      value: '47.69'
    },

    {
      name: 'Actual Product Weight',
      value: '44 lbs'
    },

    {
      name: 'Product Weight Capacity',
      value: '300 lb'
    },

    {
      name: 'Seat Width',
      value: '18"'
    }

  ];


  specificationsTwo: Specification[] = [

    {
      name: 'Seat Depth',
      value: '16"'
    },

    {
      name: 'Seat to Floor Height',
      value: '17.5"-19.5"'
    },

    {
      name: 'Seat to Armrest Height',
      value: '8"'
    },

    {
      name: 'Armrest Length',
      value: '14"'
    },

    {
      name: 'Armrest to Floor Height',
      value: '27.5"'
    },

    {
      name: 'Closed Width',
      value: '12.5"'
    },

    {
      name: 'Rear Wheel Size',
      value: '24"'
    },

    {
      name: 'Front Wheel Size',
      value: '8"'
    },

    {
      name: 'Product Overall Height',
      value: '36"'
    },

    {
      name: 'Product Overall Length',
      value: '42"'
    },

    {
      name: 'Product Overall Width',
      value: '26"'
    }

  ];


  // --------------------------------------------------
  // DOWNLOAD
  // --------------------------------------------------

  downloadFile(fileName: string): void {

    console.log('Download:', fileName);

  }

}