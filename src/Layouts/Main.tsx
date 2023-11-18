import Cards from "../Components/Cards";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 100%;
  display: grid;
  justify-content: space-evenly;
  align-content: space-evenly;
  // grid-template-columns: auto;
`;
const Main = () => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const user: any = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const id = userData._id
  const getData = async () => {
    try {
      setLoading(true);
      let res = await axios.get(
        `http://localhost:8000/api/v1/tasks/getall/${id}` 
      );
      setTasks(res.data);
      console.log(tasks);
      
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);
  return loading ? (
    <p>loading</p>
  ) : (
    <Container>
      {tasks.map((task: any) => (
        <Cards title={task.title} data={task.data} key={task._id} />
      ))}
    </Container>
  );
};

export default Main;
