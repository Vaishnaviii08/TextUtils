import React from 'react'
import PropTypes from 'prop-types'

export default function Alert(props) {

    if(!props.alert) {
        return null;
    }
  return (
    <div>
        <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type.toUpperCase()}</strong> : {props.alert.msg}
        </div>
    </div>
  )
}
