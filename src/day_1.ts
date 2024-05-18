{
  /*Merge Strings Alternately
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.


Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
*/
}

// Approach - 1
function mergeAlternative1(word1: string, word2: string): string {
  let mergeString = "";
  const maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) {
      mergeString += word1[i];
    }
    if (i < word2.length) {
      mergeString += word2[i];
    }
  }
  return mergeString;
}

const result1 = mergeAlternative1("abcdef", "pqr");

// console.log(result1);

// Approach - 2
function mergeAlternativeRecursive(str1: string, str2: string): string {
  if (str1.length === 0) return str2;
  if (str2.length === 0) return str1;

  return (
    str1[0] + str2[0] + mergeAlternativeRecursive(str1.slice(1), str2.slice(1))
  );
}

const resultRecursive = mergeAlternativeRecursive("Aiu", "skr");

// console.log(resultRecursive);

// Approach - 3

function mergeAlternativeReducer(str1: string, str2: string): string {
  return Array.from({
    length: Math.max(str1.length, str2.length),
  }).reduce<string>((acc, _, i) => {
    if (i < str1.length) acc += str1[i];
    if (i < str2.length) acc += str2[i];
    return acc;
  }, "");
}

const resultReducer = mergeAlternativeReducer("Aiu amnRj", "skrRha au");

// console.log(resultReducer);
