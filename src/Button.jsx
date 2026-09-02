function handleClick() {
    console.log("Hello!");
    console.log(event);
}
function printBye() {
     console.log("Bye");
}
    export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p onClick={printBye}>this para is for event demo</p>
      <p onMouseOver={printBye}>lorem is my dolor cell will come out ofit to see we are here in new place of a world called something </p>
    </div>
  );
}