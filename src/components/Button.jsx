import './Button.css'

export function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="add-button">
      { children }
    </button>
  )
}