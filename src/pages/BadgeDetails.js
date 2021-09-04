import React from 'react';
import { Link } from 'react-router-dom'
import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'
import './styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'

//nuestro hook (custom hook)
function useIncreaseCount(max){
  const [count, setCount] =  React.useState(0)
  if (count > max) {
    setCount(0)
  }
  return [count, setCount]
}

function BadgeDetails (props) {
  // const [count, setCount] = React.useState(0)
  const [count, setCount] = useIncreaseCount(4)

  const badge = props.badge
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la Conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>{badge.firstName} {badge.lastName}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              jobTitle={badge.jobTitle}
              twitter={badge.twitter}
              email={badge.email}
              avatarUrl="https://s.gravatar.com/avatar/2c67f94db4ce7d33ae7581e8fdcb6927?s=100"
            />
          </div>
          <div className="col mt-3 mb-3">
            <h2 className="mb-2">Actions</h2>
            <div>
              <div>
                <button onClick={() => {
                  setCount(count + 1)
                }} className="btn btn-primary mb-2">
                  Increase Count: {count}
                </button>
              </div>
              <div>
                <Link className="btn btn-primary mb-2" to={`/badges/${badge.id}/edit`}>Edit</Link>
              </div>
              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BadgeDetails