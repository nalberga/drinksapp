import React, { Component } from 'react';
import { getProfileData } from '../api/profile';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            first_name: '',
            last_name: '',
            email: '',
            errors: {},
        };
    }

    async componentDidMount() {
        this.setState({ loaded: false });
        const profileData = await getProfileData();
        this.setState({
            loaded: true,
            ...profileData,
        });
    }


    render() {
        if (!this.state.loaded) {
            return <div>Loading</div>;
        }
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                        <tr>
                            <td>Fist Name</td>
                            <td>{this.state.first_name}</td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>{this.state.last_name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{this.state.email}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Profile;