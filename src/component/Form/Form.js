import React from 'react'
import './Form.css'

const Form = (props) => {
  return <form onSubmit={props.onSubmit}>{props.children}</form>;
}

const Controller = (props) => {
    return <div className={"control"}>{props.children}</div>;
  }; 

Form.Controller = Controller;

export default Form