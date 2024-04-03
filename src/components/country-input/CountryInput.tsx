import { debounce } from "lodash";
import styles from './CountryInput.module.css';
import React, {ChangeEvent, useState} from "react";
import { useAppDispatch } from "../../store/hooks";
import { update } from "../../store/slices/slices";

interface CountryInputProps {
  isDisabled: boolean;
}
export function CountryInput({ isDisabled }: CountryInputProps) {
  const dispatch = useAppDispatch();
  // simple timeout and clear timeout would also work
  const debouncedOnChange = debounce((event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch(update({filter: event.target.value}));
  }, 200);

  return (
    <div className={styles.inputArea}>
      <span>Country filter input </span>
      <input type="text" onChange={debouncedOnChange} disabled={isDisabled} placeholder="country code"/>
    </div>
  )
}