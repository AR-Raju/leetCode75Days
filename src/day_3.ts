{
  /* 
1431. Kids With the Greatest Number of Candies
*/
}

// Using for loop

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const result: boolean[] = [];
  const greatestCandy = Math.max(...candies);

  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= greatestCandy);
  }

  return result;
}

// Using map

function kidsWithCandiesm(candies: number[], extraCandies: number): boolean[] {
  const greatestCandy = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies >= greatestCandy);
}

// Using foreach

function kidsWithCandiesfe(candies: number[], extraCandies: number): boolean[] {
  const greatestCandy = Math.max(...candies);
  const result: boolean[] = [];
  candies.forEach((candy) => {
    result.push(candy + extraCandies >= greatestCandy);
  });

  return result;
}

// Using reduce

function kidsWithCandiesr(candies: number[], extraCandies: number): boolean[] {
  const greatestCandy = Math.max(...candies);
  return candies.reduce((result, candy) => {
    result.push(candy + extraCandies >= greatestCandy);
    return result;
  }, [] as boolean[]);
}

const result = kidsWithCandiesr([12, 1, 12], 10);
console.log(result);
