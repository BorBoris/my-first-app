import React from 'react';

export class Settings extends React.Component{

    componentDidMount() {

    }

    render() {
        return <div className="col">
            <div className="row">
                <div className="col-2">Имя:</div>
                <div className="col-10">Иван</div>
            </div>
            <div className="row">
                <div className="col-2">Фамилия:</div>
                <div className="col-10">Иванов</div>
            </div>
            <div className="row">
                <div className="col-2">Email:</div>
                <div className="col-10">2@2.com</div>
            </div>
            <div className="row">
                <div className="col-2">ID:</div>
                <div className="col-10">7</div>
            </div>
        </div>
    }
}