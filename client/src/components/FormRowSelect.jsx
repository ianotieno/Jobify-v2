import React from 'react'
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
const FormRowSelect = ({name,labelText,list,defaultValue='',onChange}) => {
  return (
    <div className="form-row">
            <label htmlFor={name} className="form-label">
                {labelText || name}
              job status
            </label>
            <select
              name={name}
              id={name}
              onAbort={onChange}
              className="form-select"
              defaultValue={defaultValue}
            >
              {list.map((itemValue) => {
                return (
                  <option key={itemValue} value={itemValue}>
                    {itemValue}
                  </option>
                );
              })}
            </select>
          </div>
  )
}

export default FormRowSelect
