import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {

  // --------------------------------------------------
  // PRODUCT INFORMATION
  // --------------------------------------------------

  productTitle =
    'Silver Sport 2 Wheelchair with Full Arms and Swing-Away Removable Footrests';

  itemNumber = 'SSP218DDA-ELR';

  upcNumber = '822383140414';

  hcpcsNumber = 'E4002';

  productPrice = '$262.23';


  // --------------------------------------------------
  // PRODUCT IMAGES
  // --------------------------------------------------

  images = [
    {
      src: 'https://pdp-seven.vercel.app/img/chairFour.jpg',
      alt: 'Silver Sport wheelchair'
    },
    {
      src: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTvC2F1QxVvzQZ8v4TDqbuP3eNWJGWTlJZGdQUZa2WtS4Hl5Pt2qNIUGeysAd6Z0v0nrqMSf2tZLDbXsmxJxkobpRUs_fuN4-CxruBaqHURbPoZMkJ6FW1NYA',
      alt: 'Silver Sport wheelchair'
    },
    {
      src: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQhQ88r-6Vkq7BauykiGYYJU1Vv549lD5oemPPjwfRczVzZlM_MnYyHvU_a-DXf1cdCRQHAnqzRSX38NQ7nKHmpqwZ7VkFDHTOPU_J2qpashPVyZzFthL9hx4P3',
      alt: 'Silver Sport wheelchair'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSGRZ1Kk2qFCDefnPsNPw0IH514AV7sIAvIJTtfkUYX2ubqpsJU7bF0n0D6h5RAYxEKWM7OE0F1XZTF7jFzBuP1JmBNt6Xcq8fxhty7H0bWHQ6jVrLHOFhjgw',
      alt: 'Silver Sport wheelchair'
    }
  ];

  selectedImageIndex = 0;


  // --------------------------------------------------
  // SEAT SIZE
  // --------------------------------------------------

  seatSizes = [
    '16"',
    '18"',
    '20"',
    '22"'
  ];

  selectedSeatSize = '18"';


  // --------------------------------------------------
  // COLORS
  // --------------------------------------------------

  colors = [
    {
      name: 'red',
      className: 'red'
    },
    {
      name: 'blue',
      className: 'blue'
    },
    {
      name: 'black',
      className: 'black'
    },
    {
      name: 'green',
      className: 'green'
    },
    {
      name: 'white',
      className: 'white'
    }
  ];

  selectedColor = 'red';


  // --------------------------------------------------
  // ARM STYLE
  // --------------------------------------------------

  armStyles = [
    'Desk',
    'Full',
    'Adjustable Flip-Back Armrests',
    'Compact Padded Support Arm',
    'Swivel Height Adjustable Ergonomic Arm'
  ];

  selectedArmStyle = 'Full';


  // --------------------------------------------------
  // FRONT RIGGING
  // --------------------------------------------------

  riggingOptions = [
    'Footrests',
    'Legrests',
    'Elevating Leg Rests with Straps',
    'Swing-Away Foot Platform for Comfort'
  ];

  selectedRigging = 'Legrests';


  // --------------------------------------------------
  // ABOUT ITEM
  // --------------------------------------------------

  showMore = false;


  // --------------------------------------------------
  // IMAGE FUNCTIONS
  // --------------------------------------------------

  updateMainImage(index: number): void {

    if (index < 0 || index >= this.images.length) {
      return;
    }

    this.selectedImageIndex = index;
  }


  previousImage(): void {

    if (this.selectedImageIndex > 0) {

      this.selectedImageIndex--;

    } else {

      this.selectedImageIndex = this.images.length - 1;

    }

  }


  nextImage(): void {

    if (this.selectedImageIndex < this.images.length - 1) {

      this.selectedImageIndex++;

    } else {

      this.selectedImageIndex = 0;

    }

  }


  // --------------------------------------------------
  // OPTION FUNCTIONS
  // --------------------------------------------------

  selectSeatSize(size: string): void {

    this.selectedSeatSize = size;

    console.log('Selected seat size:', size);

  }


  selectColor(color: string): void {

    this.selectedColor = color;

    console.log('Selected color:', color);

  }


  selectArmStyle(style: string): void {

    this.selectedArmStyle = style;

    console.log('Selected arm style:', style);

  }


  selectRigging(option: string): void {

    this.selectedRigging = option;

    console.log('Selected front rigging:', option);

  }


  // --------------------------------------------------
  // SEE MORE
  // --------------------------------------------------

  toggleMore(): void {

    this.showMore = !this.showMore;

  }


  // --------------------------------------------------
  // SCROLL TO THIRD SECTION
  // --------------------------------------------------

  scrollToProductOptions(): void {

    const element = document.getElementById(
      'SeeAllProductOptions'
    );

    if (element) {

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    }

  }

}