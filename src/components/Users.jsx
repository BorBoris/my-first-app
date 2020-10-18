import React from 'react';

export class Users extends React.Component{

    componentDidMount() {

    }

    render() {
        return <div className="col">
            <div className="row">
                <div className="col-2">ID</div>
                <div className="col">Имя Фамилия</div>
                <div className="col">Email</div>
            </div>
            <div className="row">
                <div className="col-2">7</div>
                <div className="col">Иван Иванов</div>
                <div className="col">2@2.com</div>
            </div>
        </div>
    }
}