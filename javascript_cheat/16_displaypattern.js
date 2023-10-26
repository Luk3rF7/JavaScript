const pattern = (n) => {
  if (n == 0) return
  let star = ""
  for (let i = 0; i < n; i++) star += " *"
  console.log(star)
  pattern(n - 1) // utilizando recursividde
}
pattern(5)