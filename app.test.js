import {arrayLenght} from "./app";

describe('arrayLenght test', () => {
  test('should be',() => { 
    const result = arrayLenght([9,'u',1,11,3]);
    expect (result).toBe(5);
    });
  test('should be',() => { 
    const list = "gui lle"
    const expectedResult = 7;
    const result = arrayLenght(list);
    expect (result).toBe(expectedResult);
  });
 
});


