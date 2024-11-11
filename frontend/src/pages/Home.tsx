import { Chart } from "../components/LineChart";
import { Transactions } from './Transactions';
import CardBox from '../components/Card';

export const Home = () => {
    return (
        <div>
            <div className='flex justify-between sm:flex-col xl:flex-row'>
                <Chart />
                <CardBox />
            </div>
            <div className='mt-8'>
                <Transactions caption="Recent Transactions" />
            </div>
        </div>
    );
};
