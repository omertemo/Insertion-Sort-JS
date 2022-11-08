# Javascript ile Insertion Sort

Random olarak belirlenen dizi ->  [ 22, 27, 16, 2, 18, 6 ]

Adımlara göre dizinin değişimini aşağıdaki gibi gözlemleyebilirsiniz

1. [ 22, 27, 16, 2, 18, 6 ]
2. [ 16, 27, 22, 2, 18, 6 ]
3. [ 2, 27, 22, 16, 18, 6 ]
4. [ 2, 27, 22, 16, 18, 6 ]
5. [ 2, 6, 22, 16, 18, 27 ]

Insertion Sort için Big O gösterimi **O(n^2)**'dir.

18 için Time Complexity:
  Average case: Aradığımız sayının ortada olması.         O(n^2)
 Worst case: Aradığımız sayının sonda olması.           O(n^2)
 Best case: Aradığımız sayının dizinin en başında olması. O(n)

********************************************************************************
[7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımı

* 2,3,5,8,7,9,4,15,6
* 2,3,4,8,7,9,5,15,6
* 2,3,4,5,7,9,8,15,6
* 2,3,4,5,6,9,8,15,7
