import Button from '../component/Button.tsx';
import DownloadIcon from '../assets/download.svg'

type Props = {
  data: {
    email: string,
    phone: string,
    github: string,
    linkedin: string,
  };
}

const Header = ({data}: Props) => {

  return (
    <header className={'flex items-center justify-between'}>
      <h2 className={'text-lg'}>🦄</h2>
      <div className={'flex justify-center gap-5'}>
        <a href={`mailto:${data.email}`}>email</a>
        <a href={data.github}>github</a>
        <a href={data.linkedin}>linkedin</a>
        <a href={`tel:${data.phone}`}>phone</a>
      </div>
      <Button>
        <img alt='download' src={DownloadIcon} />
      </Button>
    </header>
  )
}

export default Header;