import { useState, ChangeEvent } from 'react';
import { isPrivateIdentifier } from 'typescript';

const Hidden = () => {
  const [hidden, setHidden] = useState(' ');
  let first: string;
  let last: string;
  let full: string;

  const UpdateHidden = (event: ChangeEvent<HTMLInputElement>) => {
    const newHidden = event.currentTarget.value;
    if (Hidden.length >= 3) {
      first = newHidden.substring(0, 1);
      last = newHidden.substring(newHidden.length - 1, newHidden.length);
      full = first + '*'.repeat(newHidden.length - 2) + last;

      setHidden(full);
    }
  };
  return (
    <section>
      <article>{hidden}</article>
      <section>
        <input type="text" onChange={UpdateHidden} />
      </section>
    </section>
  );
};

export default Hidden;
