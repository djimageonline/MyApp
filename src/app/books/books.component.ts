import { Component } from '@angular/core' ;

interface Book {
    name :string,
    author: string,
    image: string,
    amount: number
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

books: Book[] = [
  {
    name : 'Practical SQL',
    author : 'Anthony DeBarros',
    image : 'https://m.media-amazon.com/images/I/51z6o9WG-1L._SX376_BO1,204,203,200_.jpg',
    amount : 200
  }, 
  {
    name : 'Love Again',
    author : 'Sofie',
    image : 'https://m.media-amazon.com/images/I/41mfeP6qzVL._SX330_BO1,204,203,200_.jpg',
    amount: 345
  },
  {
    name : 'The Asset',
    author : 'Harlan Koben',
    image : 'https://m.media-amazon.com/images/I/41IUz4uSdmL._SX311_BO1,204,203,200_.jpg',
    amount: 12.99
  },
  {
    name : 'Raising the bar',
    author : 'Avery Kane',
    image : 'https://m.media-amazon.com/images/I/41Endravc4L._SX311_BO1,204,203,200_.jpg',
    amount: 14.99
  }
]


isShowing: boolean = true



}
