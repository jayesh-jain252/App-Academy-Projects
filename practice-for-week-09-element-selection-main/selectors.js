const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // Your code here
  let seededFruits = document.getElementsByClassName("seed");
  seededFruits = Array.from(seededFruits);
  let names = seededFruits.map((el) => el.innerHTML);
  console.log(names);

  // 2. Get all seedless fruit elements
  // Your code here
  let seedlessFruits = document.getElementsByClassName("seedless");
  console.log(seedlessFruits);

  // 3. Get first seedless fruit element
  // Your code here
  let firstSeedless = seedlessFruits[0];
  console.log(firstSeedless);

  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here
  let div = document.querySelector("#wrapper");
  let span = div.childNodes[1].childNodes[1];
  console.log(span);
  // 5. Get all children of element "wrapper"
  // Your code here
  let childrenOfWrapper = div.childNodes;
  console.log(childrenOfWrapper);

  // 6. Get all odd number list items in the list
  // Your code here

  // 7. Get all even number list items in the list
  // Your code here

  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here

  // 9. Get "Amazon" list element
  // Your code here

  // 10. Get all unicorn list elements (not the image element)
  // Your code here
};

window.onload = select;
