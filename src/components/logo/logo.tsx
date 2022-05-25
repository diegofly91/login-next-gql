import React from "react";
import Image from "next/image";

type Props = {
  width?: number;
};

const Logo = ({ width }: Props) => {
  return (
    <Image
      src={"/postaenlinea.png"}
      alt="Picture of the author"
      width={width}
      height={width}
    />
  );
};

export default Logo;
