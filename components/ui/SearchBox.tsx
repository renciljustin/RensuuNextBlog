import { useRef } from 'react';
import classes from './SearchBox.module.css';

export default function SearchBox({
  placeholder,
  sendSearchData,
}: {
  placeholder: string;
  sendSearchData: any;
}) {
  const searchRef = useRef<HTMLInputElement>(null);

  function keyUpHandler() {
    sendSearchData(searchRef.current?.value);
  }

  return (
    <input
      type="search"
      placeholder={placeholder}
      className={classes.search}
      onKeyUp={keyUpHandler}
      ref={searchRef}
    ></input>
  );
}
