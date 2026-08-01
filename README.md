# Practicing-Logic-Questions
Daily JavaScript logic practice and coding challenges with solutions.

## COMPLETED 


*## Phase 1: Pure Logic, Variables & Basic Iteration*
Focus: Mastering simple loops, basic arithmetic operators, and core control flow. [1] 

   1. Print 1 to N: Write a loop that prints numbers from 1 to a given number $N$.
   2. Sum of Natural Numbers: Modify the previous loop to calculate and return the sum of all numbers from 1 to $N$.
   3. Even or Odd: Write a conditional block that checks if a single integer input is even or odd without using loops.
   4. Print Even Numbers up to N: Combine a loop and a conditional statement to print only the even numbers between 1 and $N$.
   5. Count Multiples: Count how many numbers between 1 and $N$ are perfectly divisible by a user-specified divisor $K$.
   6. FizzBuzz Classic: Print numbers 1 to $N$. For multiples of 3 print "Fizz", for multiples of 5 print "Buzz", and for both print "FizzBuzz".
   7. Factorial of a Number: Write an iterative loop to calculate the product of all integers from 1 to $N$ (Factorial).
   8. Power of a Number: Calculate $A$ raised to the power of $B$ ($A^B$) using a basic sequential multiplication loop.
   9. Find All Factors: Find and print every integer that divides a given number $N$ perfectly without leaving a remainder.
   10. Prime Number Check: Determine if a number $N$ is prime by checking if it has any factors other than 1 and itself.

------------------------------
*## Phase 2: String Manipulation & Character Scoping*
Focus: Transitioning from numbers to sequential memory blocks, indexing, and text handling.

   1. Length of a String: Calculate the total number of characters in a string without using the built-in .length property.
   2. Count Vowels and Consonants: Iterate through a string and count how many characters are vowels vs. consonants.
   3. Character Frequency (Targeted): Count how many times one specific character $C$ appears inside a given string.
   4. Find First Occurrence: Return the index of the very first time a specific character appears in a string. Return -1 if not found.
   5. Convert Case Manually: Convert a lowercase string to uppercase without using built-in language methods like .toUpperCase().
   6. String Reversal: Take a string and return its characters completely backwards using a secondary storage variable.
   7. Palindrome String: Check if a string reads the exact same forward and backward (e.g., "radar").
   8. Remove Spaces: Strip away all whitespace characters from a string, joining the remaining words into a single block.
   9. Extract Digits: Parse an alphanumeric string and extract only the numerical characters into a brand-new string.
   10. Substrings Check: Check if a small target word exists inside a larger sentence using basic indexing loops. [7, 8, 9, 10, 11] 

------------------------------
*## Phase 3: Array Traversal, Search & Basic Filtering*
Focus: Managing contiguous memory collections, boundaries, and element mapping.

   1. Sum of Array Elements: Traverse a one-dimensional array of numbers and calculate the total combined sum.
   2. Find Maximum Value: Find and return the largest single numerical element within an unsorted array.
   3. Find Minimum Value: Find and return the smallest single numerical element within an unsorted array.
   4. Average of Array: Calculate the mathematical average of an array. Ensure you handle floating-point decimals correctly.
   5. Linear Search: Search an array sequentially for an element $X$. Return its position index if found, or -1 if missing.
   6. Count Element Occurrences: Count exactly how many times a value $X$ appears inside an unsorted array.
   7. Check for Sorted Array: Check an array from left to right to determine if it is sorted in ascending order.
   8. Reverse an Array: Reverse the order of elements in an array by populating a new, separate array.
   9. Array In-Place Reversal: Reverse the elements of an array without creating a second array, swapping elements within the original memory.
   10. Filter Even Numbers: Take an array of integers and extract only the even numbers into a brand-new filtered array.

------------------------------
*## Phase 4: Intermediate Array Mechanics & Multi-Element Logic*
Focus: Multi-pointer basics, handling structural duplicates, and index matching.

   1. Shift Array Elements: Shift all elements of an array one position to the left. The first element should move to the final slot.
   2. Merge Two Arrays: Combine two independent arrays of differing sizes into one single, contiguous array.
   3. Find Second Largest: Find the second largest number in an array during a single traversal without fully sorting it first.
   4. Remove Duplicates (New Array): Copy elements from a source array into a destination array only if they haven't been copied yet.
   5. Two Sum (Brute Force): Find if there are any two elements in an array whose mathematical sum equals a specific target integer.
   6. Move Zeros to End: Take an array containing mixed numbers and push every single 0 to the very end while maintaining the order of non-zeros.
   7. Array Intersection: Given two different arrays, find and return a list of elements that appear in both of them.
   8. Rotate Array by K Positions: Rotate an array to the right by $K$ steps, where $K$ is a positive user-defined integer.
   9. Find Missing Number: You are given an array containing $N-1$ unique sequential integers from 1 to $N$. Find the one missing integer.
   10. Peak Element: Find a "peak" element in an array—defined as an element that is greater than or equal to its immediate neighbors.

------------------------------
*## Phase 5: Basic Objects, Key-Value Structures & Recursion Intro*
Focus: Mapping real-world entities, object tracking, and structural problem solving.

   1. Count Words in Sentence: Split a string sentence by its spaces and calculate the total number of individual words present.
   2. Object Key Lookup: Given an array of user objects containing { id, name }, find and return the name belonging to a specific target id.
   3. Character Frequency Map: Build a primitive key-value dictionary object tracking how many times every character appears in a string.
   4. Anagram Verification: Use a character frequency tracking strategy to determine if two independent strings are valid anagrams.
   5. Find Unique Element: In an array where every element appears exactly twice except for one unique element, find that single element.
   6. Fibonacci Sequence (Iterative): Generate the first $N$ numbers of the Fibonacci sequence using a tracking loop ($0, 1, 1, 2, 3, 5...$).
   7. Recursive Factorial: Re-solve the Factorial problem (Question 7), replacing loops entirely with programmatic self-recursion.
   8. Recursive Fibonacci: Find the $N$-th specific Fibonacci number using a clean recursive breakdown instead of a running loop.
   9. Binary Search (Sorted Array): Implement a fast, divide-and-conquer search on a pre-sorted array by constantly halving the search space.
   10. Matrix Row Sum: Step into two dimensions. Take a 2D grid matrix of numbers and calculate the independent sum of each individual horizontal row.