import React from 'react';


class BadgeForm extends React.Component {
    // state = { };
//      handleChange = e => {
//     //     // console.log ({
//     //     // name: e.target.name,
//     //     // value: e.target.value
//         this.setState ({
//         [e.target.name]:e.target.value,
//     });
// };

        handleClick= e => {
        console.log('Button Was Clicked');
    };

    //     handleSubmit= e => {
    //         e.preventDefault();
    //     console.log('Form Was Submited');
    //     console.log(this.state);
    // };

    render() {
        return (
             <div>
            <h1>New Attendant</h1>

            <form onSubmit={this.props.onSubmit}>
                <div className="form-group">
                    <label >First Name</label>
                    <input
                     onChange={this.props.onChange} 
                    className="form-control" 
                    type="text" 
                    name="firstName"
                    value={this.props.formValues.firstName}    />
                </div>
            
                <div className="form-group">
                    <label >Last Name</label>
                    <input 
                    onChange={this.props.onChange} 
                    className="form-control" 
                    type="text" 
                    name="lastName"
                    value={this.props.formValues.lastName}    />
                </div>
                
                <div className="form-group">
                    <label >Email </label>
                    <input onChange={this.props.onChange} 
                    className="form-control" 
                    type="email" 
                    name="email"
                    value={this.props.formValues.email}    />
                </div>

                <div className="form-group">
                    <label >Job Title</label>
                    <input onChange={this.props.onChange} 
                    className="form-control" 
                    type="text" 
                    name="jobTitle"
                    value={this.props.formValues.jobTitle}    />
                </div>

                <div className="form-group">
                    <label >Instagram</label>
                    <input onChange={this.props.onChange} 
                    className="form-control" 
                    type="text" 
                    name="instagram"
                    value={this.props.formValues.instagram}    />
                </div>

                <button  
                onClick={this.handleClick} 
                className="btn btn-primary">
                    Save
                </button>

                {this.props.error && <p className="text-danger">{this.props.error.message}</p>}
            </form>
        </div>
        )
    }
}
export default BadgeForm;