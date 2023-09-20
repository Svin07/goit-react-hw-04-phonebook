import css from './ContactItem.module.css';

export default function ContactItem({ contact, handleDelete }) {
  const { id, name, number } = contact;
  return (
    <li className={css.contact}>
      <h5 className={css.text}>{name}:</h5>
      <p className={css.text}>{number}</p>
      <button
        type="button"
        className={css.button}
        onClick={() => handleDelete(id)}
      >
        X
      </button>
    </li>
  );
}
