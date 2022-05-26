import React from "react";
import useStyles from "@/styles/components/pageChanges";

const PageChange = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        src="/postaenlinea.png"
        alt="Logotipo Posta"
        className={classes.img}
      />
    </div>
  );
};

export default PageChange;
