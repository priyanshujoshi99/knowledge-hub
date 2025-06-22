# Basic Strings

## Reverse a string

```java
class Solution {
    public void reverseString(Vector<Character> s) {
        int start = 0; int end = s.size() - 1;

        while(start < end) {
            char ch = s.get(start);
            s.set(start, s.get(end));
            s.set(end, ch);

            start++;
            end--;
        }
    }
}
```

- _Time Complexity:_ O(N)
- _Space Complexity:_ O(1)

---

## Palindrome Check

```java
class Solution {
    public boolean palindromeCheck(String s) {
        int start = 0, end = s.length() - 1;
        while(start < end) {
            if(s.charAt(start) != s.charAt(end)) return false;
            start++;
            end--;
        }
        return true;
    }
}
```

- _Time Complexity:_ O(N)
- _Space Complexity:_ O(1)

---

## Largest odd number in a string

```java
class Solution {
    public String largeOddNum(String s) {
        int index = -1;
        int i;
        for(i = s.length() - 1; i >= 0; i--) {
            if((s.charAt(i) - '0') % 2 == 1 ) {
                index = i;
                break;
            }
        }
        if(index == -1) return "";

        i=0;
        while(i <= index && s.charAt(i) == '0') i++;

        return s.substring(i, index+1);
    }
}
```

- _Time Complexity:_ O(N)
- _Space Complexity:_ O(1)

---

## Longest common prefix

```java
import java.util.Arrays;

class Solution {
    public String longestCommonPrefix(String[] str) {
        String ans = "";

        Arrays.sort(str);

        String first = str[0];
        String last = str[str.length - 1];

        for(int i=0; i< str.length; i++) {
            if(first.charAt(i) != last.charAt(i)) return ans;

            ans += first.charAt(i);
        }

        return ans;
    }
}
```

- _Time Complexity:_ O(NlogN)
- _Space Complexity:_ O(1)

---

## Isomorphic string

```java
import java.util.*;

class Solution {
    public boolean isomorphicString(String s, String t) {
        if (s.length() != t.length()) return false; // Different lengths can't be isomorphic

        Map<Character, Character> mapST = new HashMap<>();
        Map<Character, Character> mapTS = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            char c1 = s.charAt(i);
            char c2 = t.charAt(i);

            // Check if s → t mapping exists and is correct
            if (mapST.containsKey(c1) && mapST.get(c1) != c2) {
                return false;
            }

            // Check if t → s mapping exists and is correct
            if (mapTS.containsKey(c2) && mapTS.get(c2) != c1) {
                return false;
            }

            // Add mappings
            mapST.put(c1, c2);
            mapTS.put(c2, c1);
        }

        return true;
    }
}
```

- _Time Complexity:_ O(N)
- _Space Complexity:_ O(N)

---

## Rotate string

- Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
- A shift on s consists of moving the leftmost character of s to the rightmost position.
- For example, if s = "abcde", then it will be "bcdea" after one shift.

### Example:

```
Input : s = "abcde" , goal = "cdeab"
Output : true

Explanation : After performing 2 shifts we can achieve the goal string from string s.
After first shift the string s is => bcdea
After second shift the string s is => cdeab.
```

### Solution:

```java
class Solution {
    public boolean rotateString(String s, String goal) {
        if(s.length() != goal.length()) return false;

        String temp = s + s;
        return temp.contains(goal);
    }
}
```

- _Time Complexity:_ O(N)
- _Space Complexity:_ O(N)

---

## Valid Anagram

- Given two strings s and t, return true if t is an anagram of s, and false otherwise.
- An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Example:

```
Input : s = "anagram" , t = "nagaram"
Output : true
Explanation : We can rearrange the characters of string s to get string t as frequency of all characters from both strings is same.
```

### Solution:

```java
import java.util.*;

class Solution {
  public boolean anagramStrings(String s, String t) {
    if (s.length() != t.length()) return false;

    Map<Character, Integer> mp = new HashMap<>();

    // Count character frequencies in 's'
    for (int i = 0; i < s.length(); i++) {
      mp.put(s.charAt(i), mp.getOrDefault(s.charAt(i), 0) + 1);
    }

    // Reduce counts based on 't'
    for (int i = 0; i < t.length(); i++) {
      char ch = t.charAt(i);
      if (!mp.containsKey(ch) || mp.get(ch) == 0) {
        return false; // Extra or unmatched character
      }
      mp.put(ch, mp.get(ch) - 1);
    }

    return true;
  }
}
```

- _Time Complexity:_ O(N)
- _Space Complexity:_ O(N)

---

## Sort characters by frequency

- You are given a string s. Return the array of unique characters, sorted by highest to lowest occurring characters.
- If two or more characters have same frequency then arrange them in alphabetic order.

### Example:

```
Input : s = "tree"
Output : ['e', 'r', 't' ]
Explanation : The occurrences of each character are as shown below :
e --> 2
r --> 1
t --> 1.
The r and t have same occurrences , so we arrange them by alphabetic order.
```

### Solution:

```java
import java.util.*;

class Solution {
  public List<Character> frequencySort(String s) {
    Map<Character, Integer> freqMap = new HashMap<>();

    // Step 1: Count character frequencies
    for (char c : s.toCharArray()) {
      freqMap.put(c, freqMap.getOrDefault(c, 0) + 1);
    }

    // Step 2: Convert to List and sort
    List<Character> charList = new ArrayList<>(freqMap.keySet());
    charList.sort(
        (a, b) -> freqMap.get(a).equals(freqMap.get(b)) ? a - b : freqMap.get(b) - freqMap.get(a));

    return charList;
  }
}
```

- _Time Complexity:_ O(NlogN)
- _Space Complexity:_ O(N)

---
