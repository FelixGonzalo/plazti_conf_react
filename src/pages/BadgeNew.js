import React from 'react';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import header from '../images/platziconf-logo.svg';
import api from '../api'

class BadgeNew extends React.Component {

  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: ''
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({ loading: true, error: null })
    try {
      await api.badges.create(this.state.form)
      this.setState({ loading: false})
      this.props.history.push('/badges')
    } catch (error) {
      this.setState({loading: false, error: error})
    }
  }

  render(){
    if (this.state.loading) {
      return <PageLoading />
    }
    return (
      <>
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                twitter={this.state.form.twitter || 'twitter'}
                email={this.state.form.email || 'EMAIL'}
                avatarUrl="https://s.gravatar.com/avatar/2c67f94db4ce7d33ae7581e8fdcb6927?s=100"
              />
            </div>
            <div className="col-6">
              <h2>New Attendant</h2>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error} />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default BadgeNew;