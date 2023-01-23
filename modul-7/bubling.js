// event.target -- ссылка на целевой элемент, тот на котором произошло событие (addEventListener), при всплытии "event.target" НЕ меняется;
// event.currentTarget -- текущий элемент, тот на котором словилось событие (addEventListener) при фазе всплытия вверх по иерархии, "event.currentTarget" меняется;

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

parent.addEventListener("click", (event) => {
   console.log("OnParentClick");
   console.log("OnParentClick---> event.target", event.target);
   console.log("OnParentClick---> event.currentTarget", event.currentTarget);
});

child.addEventListener("click", (event) => {
  console.log("OnChildClick");
  console.log("OnChildClick---> event.target", event.target);
  console.log("OnChildClick---> event.currentTarget", event.currentTarget);
});

descendant.addEventListener("click", (event) => {
   console.log("onDescendantClick");
   console.log("onDescendantClick---> event.target", event.target);
   console.log("onDescendantClick---> event.currentTarget", event.currentTarget);
});