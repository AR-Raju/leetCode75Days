{
  function compress(chars: string[]): number {
    const n = chars.length;
    let writeIndex = 0;
    let i = 0;

    while (i < n) {
      const char = chars[i];
      let count = 0;

      while (i < n && chars[i] == char) {
        count++;
        i++;
      }

      chars[writeIndex] = char;
      writeIndex++;

      if (count > 1) {
        const strCount = count.toString();
        for (const c of strCount) {
          chars[writeIndex] = c;
          writeIndex++;
        }
      }
    }
    console.log(chars.slice(0, writeIndex));
    return writeIndex;
  }

  //   compress(["e", "a", "a", "b", "b", "c", "c", "c"]);
  //   compress(["a"]);
  compress(["a", "a", "b", "b", "a", "c", "c", "c"]);
}
