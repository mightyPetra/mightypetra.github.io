import JobItem, { type Job } from './Job.tsx';

type Props = {
  data: Job[]
}

const Experience = ({ data }: Props) => {

  const experiences = data.map(
    (experience) => <JobItem key={experience.startDate} data={experience}/>
  );

  return (
    <section>
      <h3>Work Experience</h3>
      <ul className={'flex flex-col gap-4'}>
        {experiences}
      </ul>
    </section>
  );
};

export default Experience;