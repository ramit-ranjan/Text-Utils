import React from 'react'

export default function Alert({alert}) {

    const capitalize = (word) => {
    if (!word) return "";
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    // this below is syntax :
   alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(alert.type)}</strong> : {alert.msg}
</div>
  )
}
