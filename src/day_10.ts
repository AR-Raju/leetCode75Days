{
  /**
 Do not return anything, modify nums in-place instead.
 */
  function moveZeroes(nums: number[]): void {
    const n = nums.length;
    let writeIndex = 0;

    for (let i = 0; i < n; i++) {
      if (nums[i] !== 0) {
        nums[writeIndex] = nums[i];
        writeIndex++;
      }
    }
    while (writeIndex < n) {
      nums[writeIndex] = 0;
      writeIndex++;
    }

    console.log(nums);
  }

  moveZeroes([0, 1, 0, 3, 12]);
}
