

export const arrayLenght = (a) => {
  if (a===String) {
    a=String;
    const toArray = a.split("");
  }

  let count = 0;

  for (const i of a) { 
    count++ 

  } 

  return count
  
};

