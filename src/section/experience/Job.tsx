import Laptop from '../../assets/laptop.svg';

export interface Job {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  overview: string;
  tech: string[];
}

type Props = {
  data: Job;
}

const JobItem = ({ data }: Props) => {

  return <li key={data.startDate} className={'p-4 rounded-lg bg-neutral-900 hover:bg-neutral-800'}>
    <div className={'lg:flex flex-1 align-bottom justify-between mb-4'}>
      <div className={'lg:flex flex-1 lg:gap-7'}>
        <div className={'lg:flex flex-1 text-nowrap gap-3'}>
          <div className={'flex gap-6'}>
            <img alt={'laptop'} src={Laptop}/>
            <h5 className={'text-md font-bold'}>{data.position}</h5>
          </div>
          <h5 className={'font-thin'}>at {data.company}</h5>
        </div>
        <span className={'text-xs text-nowrap'}>{data.startDate} - {data.endDate}</span>
      </div>
    </div>
    <p className={'text-sm'}>{data.overview}</p>
  </li>;
};

export default JobItem;