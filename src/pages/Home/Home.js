import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, PageHeader } from "components";
import { getUsers } from "actions/user";
import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //     dispatch(getUsers());
  // }, [dispatch]);

  // const users = useSelector(state => state.user.users);

  return (
    <div className="home">
      <Container>
        <PageHeader title="Home" />
        <div className="list">
          {/* {users.map((user, i) => (
            <div key={i} className="list-item">
              <div>{user.id}</div>
              <div>
                {user.first_name} {user.last_name}
              </div>
              <div>{user.email}</div>
              <div>
                <img
                  className="avatar"
                  src={user.avatar}
                  width="50"
                  height="50"
                />
              </div>
            </div>
          ))} */}
        </div>
      </Container>
    </div>
  );
};

export default Home;
