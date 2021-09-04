import React from 'react';

class BadgeForm extends React.Component {

  handleClick = (e) => {
    console.log("button click")
  }

  // handleSubmit= (e) => {
  //   e.preventDefault()
  //   console.log("form submit")
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName} />
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName} />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email} />
          </div>

          <div className="mb-3">
            <label className="form-label">Job Title</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle} />
          </div>

          <div className="mb-3">
            <label className="form-label">Twitter</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter} />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary mb-3">Save</button>

          {
            this.props.error && (
              <p className="text-danger">{this.props.error.message}</p>
            )
          }
        </form>
      </div>
    )
  }
}

export default BadgeForm;