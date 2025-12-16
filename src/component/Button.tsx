import type { ReactNode } from 'react';

type Props = {
  onClick?: () => void;
  children?: ReactNode | ReactNode[] | string;
}

const Button = ({ onClick, children }: Props) => {
  return (
    <button
      className={'rounded-lg px-2 py-2 flex gap-2 items-center text-white bg-black hover:bg-neutral-700'}
      onClick={onClick}>{children}</button>
  );
};

export default Button;