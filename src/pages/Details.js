import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Details = () => {
  const { id } = useParams();
  const { items } = useSelector((store) => store.tasks);
  const item = items.find((tasks) => tasks.id === Number(id));

  return (
    <div>
      <h1>Details for student number {id}</h1>
      <p>{item.name}</p>
      <p>{item.description}</p>
    </div>
  );
};

export default Details;
