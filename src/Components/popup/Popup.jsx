import './Popup.css'
const Popup = ({ onClose }) => {
  return (
    <div className='main-popup'>
      <h1>This is the popup</h1>
      <p>You are beautifull</p>
      <button onClick={onClose}>Close</button>

    </div>
  )
}

export default Popup
