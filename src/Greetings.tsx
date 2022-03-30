import React from 'react';

interface GreetingProps {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void;
}

const Greetings = ({ name, mark, optional, onClick }: GreetingProps) => {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark} {optional && <p>optional</p>}
      <div>
        <button onClick={handleClick}>Click me</button>
      </div>
    </div>
  );
};

Greetings.defaultProps = {
  mark: '!',
};

export default Greetings;
