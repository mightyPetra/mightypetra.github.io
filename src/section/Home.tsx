import Header from './Header.tsx';
import Hero from './Hero.tsx';
import Footer from './Footer.tsx';
import Skills from './skills/Skills.tsx';
import Experience from './experience/Experience.tsx';

type Props = {
  data: any;
}

const Home = ({ data }: Props) => {
  return (
    <div>
      <Header data={data.contact} />
      <Hero data={data.basics}/>
      <Skills data={data.skills} />
      <Experience data={data.experience} />
      <Footer/>
    </div>
  )
}

export default Home;