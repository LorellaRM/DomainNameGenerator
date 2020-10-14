let a = ["the", "our"];
let b = ["great", "big"];
let c = ["jogger", "racoon"];
let d = [".com", ".it", ".es"];

for (let g = 0; g < a.length; g++) {
  for (let h = 0; h < b.length; h++) {
    for (let i = 0; i < c.length; i++) {
      for (let j = 0; j < d.length; j++) {
        console.log(a[g] + b[h] + c[i] + d[j]);
      }
    }
  }
}
