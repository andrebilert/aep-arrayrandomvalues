import { describe, test, expect } from '@jest/globals';
import { Product } from '../src/TDD/Product';
import { ArrayRandomValues } from '../src/TDD/random';
import { ErrorMessage } from '../src/TDD/errorMessages';

let array = new ArrayRandomValues();

describe('RandomArray', () => {
    test('Deve retornar um array vazio se a quantidade solicitada for zero', () => {
        const produtos: Product[] = [
            { name: 'Caneta', quantity: 10, price: 7.99 },
            { name: 'Impressora', quantity: 0, price: 649.5 },
            { name: 'Caderno', quantity: 4, price: 27.1 },
        ];
        const result = array.getRandomProduct(produtos, 0);
        expect(result.length).toBe(0);
    });

    test('Deve retornar um erro se a quantidade solicitada for maior do que a quantidade total de produtos disponíveis', () => {
        const produtos: Product[] = [
            { name: 'Caneta', quantity: 10, price: 7.99 },
            { name: 'Impressora', quantity: 0, price: 649.5 },
            { name: 'Caderno', quantity: 4, price: 27.1 },
        ];
        expect(array.getRandomProduct(produtos, 5)).toBe(ErrorMessage.ARRAY_ERROR_LENGTH);
    });

    test('Deve retornar um erro se a quantidade for maior ou igual ao tamanho do array de Produtos', () => {
        const produtos: Product[] = [
          { name: 'Caneta', quantity: 10, price: 7.99 },
          { name: 'Impressora', quantity: 0, price: 649.5 },
          { name: 'Caderno', quantity: 4, price: 27.1 },
        ];
        expect(array.getRandomProduct(produtos, 3)).not.toBe(ErrorMessage.ARRAY_ERROR_LENGTH);
        expect(array.getRandomProduct(produtos, 4)).toBe(ErrorMessage.ARRAY_ERROR_LENGTH);
      });
      

    test('Deve receber um array de Produtos e uma quantidade igual ou menor que zero e retornar um erro', () => {
        const produtos: Product[] = [
            { name: 'Caneta', quantity: 10, price: 7.99 },
            { name: 'Impressora', quantity: 0, price: 649.5 },
            { name: 'Caderno', quantity: 4, price: 27.1 },
        ];
        expect(array.getRandomProduct(produtos, 0)).toBe(ErrorMessage.ARRAY_ERROR_QUANT);
        expect(array.getRandomProduct(produtos, -1)).toBe(ErrorMessage.ARRAY_ERROR_QUANT);
    });

    test('Deve retornar um erro se o array de produtos estiver vazio', () => {
        const produtos: Product[] = [];
        expect(array.getRandomProduct(produtos, 3)).toBe(ErrorMessage.ARRAY_ERROR_NULL);
    });

    
});
