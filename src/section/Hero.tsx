import Working from '../assets/working.svg'

type Props = {
  data: {
    name: string,
    surname: string,
    title: string,
    about: string[]
  }
}

const Hero = ({data}: Props) => {
  return (
    <section className={'bg-white text-black flex'}>
      <div className={'w-full md:w-2/3'}>
        <div className={'mb-6 text-lg'}>
        <h3>Hello, I'm {data.name} {data.surname}, {data.title}</h3>
        </div>
        {data.about.map((paragraph) =>
        <p key={paragraph} className={'text-sm text-left wrap-break-word leading-6 my-4'}>
          {paragraph}
        </p>)
        }
      </div>
        <img alt={'avatar'} src={Working} className={'float-right ml-4 mb-4'}/>
    </section>
  );

};

export default Hero;
