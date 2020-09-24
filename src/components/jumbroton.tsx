import React from "react";

/**
 * Jumbroton takes props
 * @param title
 * @param subtitle
 */
interface Props {
  title: string;
  subtitle: string;
}

const Jumbroton: React.FC<Props> = (props: Props) => (
    <div className="flex-1 flex flex-col text-center bg-gray-100 py-10">
        <h1 className="text-5xl">{props.title}</h1>
        <h4 className="text-lg text-gray-500">{props.subtitle}</h4>
  </div>
);

export default Jumbroton;
