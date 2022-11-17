/*
Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

Input:
Array of file sizes (0 <= s <= 100)
Capacity of the HD (0 <= c <= 500)
Output:
Number of files that can be fully saved in the HD.
Examples:
save([4,4,4,3,3], 12) -> 3
# 4+4+4 <= 12, but 4+4+4+3 > 12
save([4,4,4,3,3], 11) -> 2
# 4+4 <= 11, but 4+4+4 > 11
Do not expect any negative or invalid inputs.
*/

// My eh solution:
const save = (sizes, hd) => {
  let count = 0;
  let size = 0;

  for (let i = 0; i < sizes.length; i++) {
    if (size + sizes[i] > hd) return count;
    size += sizes[i];
    count++;
  }

  return count;
};
