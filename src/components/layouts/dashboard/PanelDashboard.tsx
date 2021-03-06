import React, { useState, useEffect } from "react";
import MiniDrawer from "@/components/drawer/DrawerDashboard";
import MobileDrawer from "@/components/drawer/DrawerMobileDashboard";
import useWindowDimensions from "@/hooks/useWindowDimesion.hook";

type Props = {
  className: any;
};

const Panel = ({ className }: Props) => {
  const { width } = useWindowDimensions();
  const [container, setContainer] = useState(<></>);

  useEffect(() => {
    if (width < 720) {
      setContainer(<MobileDrawer />);
    } else {
      setContainer(<MiniDrawer />);
    }
  }, [width]);

  return <div className={className}>{container}</div>;
};

export default Panel;
