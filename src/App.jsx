import "./App.css";

//1. Create a React component called Heading, to display a heading as "React Playground".

const Heading = () => {
  return <h2>React Playground</h2>;
};

//2. Create a React component called Greetings, to display a heading as "Hello, Alice Smith!" where Alice Smith is a dynamic data.

const Greeting = () => {
  const name = "Alice Smith";
  return <h2>Hello, {name}</h2>;
};

//3. Create a React component called ExternalLink, to display the link text "Visit React Examples". Link the text to https://www.reactexamples.com and upon clicking the link it should open in a new tab.

const ExternalLink = () => {
  const link = "www.reactexamples.com";
  return (
    <a href={link} target="_blank">
      Visit React Examples
    </a>
  );
};

//4. Create a React component called Avatar, to display a placeholder image of 200x200.

const Avatar = () => {
  return (
    <div>
      <img src="https://via.placeholder.com/200" alt="image" />
    </div>
  );
};

//5. Create a React component called UserInfo to display the following user info.

const UserInfo = () => {
  const user = {
    name: "Alice Smith",

    age: 28,

    email: "alice.smith@example.com",

    bio: "Passionate about React and building innovative web applications.",
  };

  return (
    <>
      <h2>User Information</h2>
      <p>
        <strong>Name: </strong>
        {user.name}
      </p>
      <p>
        <strong>Age: </strong>
        {user.age}
      </p>
      <p>
        <strong>Email: </strong>
        {user.email}
      </p>
      <p>
        <strong>Bio: </strong>
        {user.bio}
      </p>
    </>
  );
};

export default function App() {
  return (
    <div>
      <Heading />
      <Greeting />
      <ExternalLink />
      <Avatar />
      <UserInfo />
    </div>
  );
}
