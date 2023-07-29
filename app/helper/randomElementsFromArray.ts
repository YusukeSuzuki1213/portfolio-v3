export function randomElementsFromArray<T>(array: T[], count: number): T[] {
  const shuffledArray = array.slice();
  const result: T[] = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * shuffledArray.length);
    const randomElement = shuffledArray.splice(randomIndex, 1)[0];
    result.push(randomElement);
  }

  return result;
}
