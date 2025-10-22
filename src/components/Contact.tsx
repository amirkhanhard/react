const Contact = () => {
  return (
    <div>
      <h1 data-testid="not-empty">Contact Us</h1>
      <form>
        <input placeholder="Enter Username" /><br></br><br></br>
        <input type="password" placeholder="Enter Password" /><br></br><br></br>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
