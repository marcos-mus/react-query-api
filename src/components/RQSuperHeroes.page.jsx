import { ToastContainer, toast } from "react-toastify";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

const RQSuperHeroesPage = () => {
  const onSuccess = () => {
    toast.success(`Well this is the data`);
  };

  const onError = (error) => {
    console.log(error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      <h2>RQSuperHeroes Page</h2>
      {/* <button onClick={refetch}>Fetch heroes</button> */}
      {/* {data?.data.map((hero, index) => {
        return <div key={index}>{hero.name}</div>;
      })} */}
      {data.map((name) => (
        <div key={name}>{name}</div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default RQSuperHeroesPage;
