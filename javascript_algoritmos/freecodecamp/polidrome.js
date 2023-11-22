function isPalindrome(word) {
  // Passo 1- Colocar um ponteiro em cada extremo da palavra
  // Passo 2 - Percorrer a string "internamente"
  // Passo 3 - A cada iteração, verificar se os ponteiros 
  // representam valores iguais
  // Se esta condição não for cumprida, a palavra não é um palíndromo
  let left = 0
  let right = word.length - 1

  while (left < right) {
    if (word[left] !== word[right]) return false
    left++
    right--
  }

  return true
}

isPalindrome("neuquen") // true
isPalindrome("Buenos Aires") // false