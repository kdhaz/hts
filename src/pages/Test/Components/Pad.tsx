type PadType = {
  KeyName: string;
  callback: (Key: string) => void;
};

const Pad = (props: PadType) => {
  const { KeyName, callback } = props;
  return <button onClick={() => callback(KeyName)}>{KeyName}</button>;
};

export default Pad;
