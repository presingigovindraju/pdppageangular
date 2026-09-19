import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Accessory {
  name: string;
  itemNumber: string;
  price: string;
  image: string;
}

@Component({
  selector: 'app-accessories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accessories.html',
  styleUrl: './accessories.css'
})
export class Accessories {

  itemsPerRow = 4;

  visibleRows = 1;


  accessories: Accessory[] = Array.from(
    { length: 20 },
    () => ({
      name: 'Heel Strap',
      itemNumber: 'STDS831',
      price: '$262.23',
      image:
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSGRZ1Kk2qFCDefnPsNPw0IH514AV7sIAvIJTtfkUYX2ubqpsJU7bF0n0D6h5RAYxEKWM7OE0F1XZTF7jFzBuP1JmBNt6Xcq8fxhty7H0bWHQ6jVrLHOFhjgw'
    })
  );


  get visibleAccessories(): Accessory[] {

    const numberOfItems =
      this.visibleRows * this.itemsPerRow;

    return this.accessories.slice(
      0,
      numberOfItems
    );

  }


  get showSeeAll(): boolean {

    return (
      this.visibleRows * this.itemsPerRow <
      this.accessories.length
    );

  }


  showMore(): void {

    this.visibleRows++;

  }


  addToCart(item: Accessory): void {

    console.log(
      'Add to cart:',
      item
    );

  }

}