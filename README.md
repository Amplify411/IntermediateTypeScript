# TypeScript + React - Intermediate

- In this code base we have a project that covers a little ndept concept of Typescript on react.
- The concept of creating wrapper components in react using TS is implemented.
- We have also looked into using generic types in generic functions in the Container component
- In the Button component ,we have used the discriminated union type  
- In the input component we have used the ref from the parent to the child component,earlier forwardRef were used but now passing them as props is enough
- The use of ComponentPropsWithoutRef with parameters as the element type is also done in both Buttons,Containers and Forms component. But since in Input component we are passing ref, we used ComponentPropsWithRef in it.
- We created polymorphic component using type script in the Container.tsx file