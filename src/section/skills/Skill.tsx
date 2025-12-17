type Props = {
  data: string;
}

const Skill = ({ data }: Props) => {

  return (
    <div className={'px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 w-fit'}>
      <p>{data}</p>
    </div>
  );
};

export default Skill;