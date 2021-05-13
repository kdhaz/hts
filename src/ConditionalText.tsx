import { useState, ChangeEvent } from 'react';

const ConditionalText = () => {
  const [welcome, setWelcome] = useState(' ');
  const UpdateWelcome = (event: ChangeEvent<HTMLInputElement>) => {
    const newWelcome = event.currentTarget.value;
    if (welcome.length >= 6) {
      setWelcome(newWelcome);
    }
  };
  return (
    <section>
      <article>{welcome}</article>
      <section>
        <input type="text" onChange={UpdateWelcome} />
      </section>
    </section>
  );
};

export default ConditionalText;
