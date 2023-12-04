const myBio = ["Oluwatobi", "Sofela"];

function updateMyBio(newBio, array) {
  const clonedBio = [...array];
  clonedBio[clonedBio.length] = newBio;
  return clonedBio;
}

console.log(updateMyBio("codesweetly.com", myBio));