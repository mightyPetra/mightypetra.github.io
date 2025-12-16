type Props = {
  data: string;
}

const Skill = ({ data }: Props) => {

  return (
    <div className={'p-4 rounded-lg bg-neutral-900 hover:bg-neutral-800 w-fit'}>
      <p>{data}</p>
    </div>
  );
};

export default Skill;