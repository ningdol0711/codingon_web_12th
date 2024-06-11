function arrElement<T>(arr: T[], index: number): T | boolean {
  if(arr.length > index) {
    return arr[index];
  }
  else {
    return false;
  }
}

console.log(arrElement<string>(["a", "b", "c", "d"], 6));