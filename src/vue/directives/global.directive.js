export default {
  name: "myDirective",
  directive: {
    inserted(el) {
      el.addEventListener("click", console.log);
      el.innerText = `“v-my-directive” was used on ${el.innerText}`;
    },
  },
};

