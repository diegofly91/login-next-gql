import React, { createContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import Router from "next/router";
import { USER_CURRENT } from "../gql/querys/current";
import { useDispatch, useSelector } from "react-redux";
import { UpdateUserPayload } from "@/contexts/reducers/user/user.slice.reducer";
import { IContext } from "@/interfaces/index";
import { RootState } from '@/contexts/reducers/root.reducers'
type Props = {
  children: React.ReactNode;
};
export const UserContext = createContext<IContext | null>(null);

export const UserProvider = ({ children }: Props) => {
  const dispatch = useDispatch();
  const { roleName } = useSelector((state: RootState) => state.user);
  const { data, error, loading,refetch } = useQuery(USER_CURRENT, {
    fetchPolicy: "no-cache",
    pollInterval: 10000,
  });
  const appContext: IContext = {
    refetch: refetch
  };

  useEffect(() => {
    if (data && data.userCurrent) {
      dispatch(UpdateUserPayload(data.userCurrent));

    }else if(data?.userCurrent == null){
      init()
    }
    if (error && Router.pathname === "/dashboard") {
      init();
    }
  }, [data, error, loading]);

  useEffect(() => {
    if(data?.userCurrent){
        switch( roleName ){
            case "SUPERUSER":
            case "ADMIN":
                Router.push("/dashboard");
              break;
            default:
                init();
              break
        }
    }
    console.log(data)
  }, [roleName, data]);

  const init = async () => {
        console.log("hola mundo")
        refetch()
        localStorage.clear();
        Router.push("/");
  };

  return (
    <UserContext.Provider value={appContext}>{children}</UserContext.Provider>
  );
};
