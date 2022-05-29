import React, { createContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import Router from "next/router";
import { USER_CURRENT } from "../gql/querys/current";
import { useDispatch } from "react-redux";
import { UpdateUserPayload } from "@/contexts/reducers/user/user.slice.reducer";
import { IContext } from "@/interfaces/index";
type Props = {
  children: React.ReactNode;
};
export const UserContext = createContext<Partial<IContext>>({});

export const UserProvider = ({ children }: Props) => {
  const dispatch = useDispatch();
  const { data, error, refetch } = useQuery(USER_CURRENT, {
    fetchPolicy: "no-cache",
    pollInterval: 10000,
  });

  useEffect(() => {
    if (data && data.userCurrent) {
      const { roleName } = data.userCurrent;
      dispatch(UpdateUserPayload(data.userCurrent));
      if (roleName === "SUPERUSER" || roleName === "ADMIN") {
        Router.push("/dashboard");
      }
    }
    if (data?.userCurrent == null) {
      init();
    }
    if (error && Router.pathname === "/dashboard") {
      init();
    }
  }, [data, error]);

  const init = async () => {
    localStorage.clear();
    Router.push("/");
  };

  return (
    <UserContext.Provider value={{ refreshUser: () => refetch() }}>
      {children}
    </UserContext.Provider>
  );
};
