import { Product } from './Product';

export class ArrayRandomValues{
    productsRandom: Product[] = [];
    array: Product[];
    qtd: number;

    getRandomProduct(array, qtd){

        while (this.productsRandom.length < qtd) {
            let numberIndex = Math.floor(Math.random() * array.length);
            if (!this.productsRandom.includes(array[numberIndex])) {
                this.productsRandom.push(array[numberIndex]);
            }
        }
        return this.productsRandom;
    }
    
}
