import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  const inputRef = useRef(null)
  return (
    <main>
      <Input id="name" label="Your Name" type="text" ref={inputRef} />
      <Input id="age" label="Your Age" type="number" />
      <p>
        <Button el="button">Button</Button>
      </p>
      <p>
        <Button el="anchor">Link</Button>
      </p>
      <Container as={Button} el="button" onClick={()=>console.log("Click Done")}>
        Click ME
      </Container>
    </main>
  );
}

export default App;
