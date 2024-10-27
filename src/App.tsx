import Loader from 'component/Loader';
import CustomRoute from './routes/routs';
import { useAppSelector } from 'store/redux.hooks';

const App = () => {

  const {isAuthLoginLoading} = useAppSelector((state:any)=>state.auth)

  return (
    <div data-testid="app-component">
      <Loader isLoading={[isAuthLoginLoading, ]}/>
      <CustomRoute />
    </div>

  );
}

export default App;
