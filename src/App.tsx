import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";
import Form from "./components/Form";

function App() {
  const inputRef = useRef(null);
  function handleSave(data:unknown){
    const extractedData = data as {name:string,age:string}
    console.log(extractedData)
  }
  return (
    <main>
      <Form onSave={handleSave}  >
        <Input id="name" label="Your Name" type="text" ref={inputRef} />
        <Input id="age" label="Your Age" type="number" />
        <p>
          <Button el="button">Button</Button>
        </p>
      </Form>
      <Container
        as={Button}
        el="button"
        onClick={() => console.log("Click Done")}
      >
        Click ME
      </Container>
    </main>
  );
}

export default App;
