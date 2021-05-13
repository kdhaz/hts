import { useState, ChangeEvent } from 'react';

const Welcome = () => {
  const [welcome, setWelcome] = useState(' ');
  const UpdateWelcome = (event: ChangeEvent<HTMLInputElement>) => {
    const newWelcome = event.currentTarget.value;
    setWelcome(newWelcome);
  };
  return (
    <section>
      <article>:반갑습니다{Welcome}</article>
      <section>
        <input type="text" onChange={UpdateWelcome} />
      </section>
    </section>
  );
};

export default Welcome;
