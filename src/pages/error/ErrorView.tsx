import { useAppSelector } from "store/redux.hooks";

const ErrorView = () => {
  
  const { loginDetails } = useAppSelector((state:any) => state.auth);

  return (

    <section>
     Error
    </section>
  );
}

export default ErrorView