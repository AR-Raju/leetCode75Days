{
  /* 
1071. Greatest Common Divisor of Strings
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
 

Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.

hints:
Common Substring vs. Common Pattern
A common substring means a part of the string is the same.
A common repeating pattern means both strings can be formed by repeating the same string segment.
In the case of "ABAB" and "ABBA", there isn't a repeating pattern that matches both strings entirely. 
The check ensures that both strings must be able to form each other through repetition of a common substring, 
not just contain a common substring.
*/
}

function gcdOfStrings(str1: string, str2: string): string {
  // Check if str1 and str2 have a common repeating pattern
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  // Calculate the GCD of the lengths of str1 and str2
  const n = gcd(str1.length, str2.length);

  // Return the substring from the start of str1 of length n
  return str1.substring(0, n);
}

// Calculates the Greatest Common Divisor (GCD) of two integers using the Euclidean algorithm
const gcd = (a: number, b: number) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};

console.log("kie");

// Example 1
const result11 = gcdOfStrings("ABCABC", "ABC");
console.log(result11); // Output: "ABC"

// Example 2
const result22 = gcdOfStrings("ABAB", "ABBA");
console.log(result22); // Output: ""

// Example 3
const result33 = gcdOfStrings("XYZXYZ", "XYZ");
console.log(result33); // Output: "XYZ"

// Example 4
const result44 = gcdOfStrings("ABABAB", "ABAB");
console.log(result44); // Output: "AB"

{
  /* 
Other approach for solving this problem:

Brute Force Approach: This method generates all possible substrings and checks if they can 
construct both strings by repeating.

Regular Expressions Approach: Uses regex to find the smallest repeating unit and checks if 
both strings have the same repeating unit.

Greatest Common Prefix Approach: Uses the GCD of the lengths of the strings to find the 
longest possible repeating substring and verifies if it can construct both strings.

String Matching Approach: Iterates through potential lengths that can divide both string 
lengths and checks if substrings of these lengths can construct both strings.

*/
}
