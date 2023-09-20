import css from './Filter.module.css';

export default function Filter({ filterContact }) {
  const handleChange = ({ target: { value } }) => {
    filterContact(value);
  };

  return (
    <div>
      <h6>Find contacts by name</h6>
      <label htmlFor="exampleInputFilter"></label>
      <input
        type="tel"
        className={css.input}
        id="exampleInputFilter"
        name="number"
        onChange={handleChange}
      ></input>
    </div>
  );
}
