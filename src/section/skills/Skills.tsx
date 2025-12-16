import Skill from './Skill.tsx';

type Props = {
  data: {
    backend: string[];
    frontend: string[];
    other: string[];
  };
}

const Skills = ({data}: Props) => {

  const getSkillGroup = (skills: string[]) => {
    return skills.map((skill) => {
      return <Skill key={skill} data={skill} />
    })
  }

  return (
    <section>
      <h3>Skills</h3>
      <div className={'flex flex-wrap gap-4 w-width'}>
        {getSkillGroup(data.backend)}
        {getSkillGroup(data.frontend)}
        {getSkillGroup(data.other)}
      </div>
    </section>
  )
}

export default Skills