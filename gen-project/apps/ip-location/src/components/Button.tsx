type Props = {
  label: string;
  onClick: () => void;
};

export const Button = (props: Props) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};
