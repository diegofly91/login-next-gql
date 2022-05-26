import React, { createContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import Router from "next/router";
import { USER_CURRENT } from "../gql/querys/current";
import { useDispatch, useSelector } from "react-redux";
import { Reducer } from "redux";
import { UpdateUserPayload } from "@/contexts/reducers/user/user.slice.reducer";
import { IContext } from "@/interfaces/context.user";

type Props = {
  children: React.ReactNode;
};
export const UserContext = createContext<IContext | null>(null);

export const UserProvider = ({ children }: Props) => {
  const dispatch = useDispatch();
  const { roleName } = useSelector((state: Reducer) => state.user);
  const { data, error, refetch } = useQuery(USER_CURRENT, {
    fetchPolicy: "network-only",
    pollInterval: 10000,
  });

  const appContext: IContext = {
    refresh: refetch,
  };

  useEffect(() => {
    if (data && data.userCurrent) {
      dispatch(UpdateUserPayload(data.userCurrent));
    }
    if (error && Router.pathname === "/dashboard") {
      init();
    }
  }, [data, error]);

  useEffect(() => {
    if (roleName === "SUPERUSER" || roleName === "ADMIN") {
      Router.push("/dashboard");
    }
  }, [roleName]);

  const init = async () => {
    if (
      error?.message === "Error: Token error: jwt expired" ||
      !localStorage.getItem("token")
    ) {
      localStorage.clear();
      Router.push("/");
    }
  };

  return (
    <UserContext.Provider value={appContext}>{children}</UserContext.Provider>
  );
};
