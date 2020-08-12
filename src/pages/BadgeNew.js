import React from 'react';
import Badge from '../components/Badge';
import header from '../images/platziconf-logo.svg';
import BadgeForm from '../components/BadgeForm';
import '../components/styles/BadgeNew.css';
import api from '../api';
import PageLoading from '../components/PageLoading';

class BadgeNew extends React.Component  {
    state = {
        loading: false,
        error: null,
        form: {
        firstName:'', 
        lastName:'',
        email:'',
        jobTitle:'',
        instagram:'',
    }};

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({loading: true, error:null })

    try{
         await api.badges.create(this.state.form)
                this.setState({loading: false })
                this.props.history.push('/badges');
            } catch (error) {
                this.setState({loading: false, error:error })
        }
    };

    render() {
        if(this.state.loading){
            return <PageLoading />;
        }
        return( 
         <React.Fragment>
             <div className="BadgeNew__hero">
             <img src={header} className="BadgeNew__hero-image img-fluid" alt="Logo"/>
             </div>
             <div className="container">
                 <div className="row">
                     <div className="col-6">
                         <Badge 
                         firstName={this.state.form.firstName || 'FIRST_NAME'}
                          lastName={this.state.form.lastName || 'LAST_NAME'}
                           jobtitle={this.state.form.jobTitle || 'JPB_TITLE'}
                            instagram={this.state.form.instagram || 'INSTAGRAM'}
                            email={this.state.form.email || 'EMAIL'}  />
                     </div>
                     <div className="col-6"> 
                     <BadgeForm 
                     onChange={this.handleChange} 
                     onSubmit={this.handleSubmit}
                     formValues={this.state.form}
                     error={this.state.error} />
                     </div>
                 </div>
             </div>
        </React.Fragment>
        );
    }
}

export default BadgeNew;