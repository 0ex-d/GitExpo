import React from "react";

/**
 * Dropdown filter button
 * @param icon optional dropdown icon
 * @param label button label
 */
interface Props {
  icon?: string;
  label: string;
}

const FilterButton: React.FC<Props> = (props: Props) => (
  <button type="button" className="flex items-center text-gray-700 px-2 py-1 border font-medium rounded"> 
  {props.label} 
  <svg className="fill-current text-grey-dark h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/></svg>
  
</button>
);

export default FilterButton;
