import React, {Component} from "react"
import {Navbar} from "react-bootstrap";

export default class Nav extends Component{

    render(){
        return(
       
       
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="/popcorn.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              My React One Page Movie App
            </Navbar.Brand>
          </Navbar>


        )


    }


}