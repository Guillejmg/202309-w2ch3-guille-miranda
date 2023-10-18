import {arrayLenght,arrayPush} from "./app";

describe('arrayLenght test', () => {
  test('should be',() => { 
    const list = [9,'u',1,11,3]
    const expectedResult = 5;
    const result = arrayLenght(list);
    expect (result).toBe(expectedResult);
    });
});

describe('arrayPush test', () => {
  test('should be',()=>{
    const list = [9,'u',1,11,3];
    const expectedResult = [9,'u',1,11];
    const result = arrayPush(list);
  expect (result).toBe(expectedResult);
  });
});
