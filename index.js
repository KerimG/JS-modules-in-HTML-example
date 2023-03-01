import { bar } from "./modules/bar.js";

function foo() {
  console.log("hello from foo");
  bar();
}
export { foo };
