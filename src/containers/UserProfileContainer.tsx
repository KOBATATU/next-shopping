import { ApiContext } from "types/data";

const context: ApiContext = {
  apiRootUrl: "/api/proxy",
};

type UserProfileContainerProps = {
  userId: numner;
  user?: User;
};

const UserProfileContainer = ({
  userId,
  user,
}: UserProfileContainerProps) => {

    const {user:u} = useUser(context, {id:userId:initial:user})
};
