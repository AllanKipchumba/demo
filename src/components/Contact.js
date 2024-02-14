import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1>Contact Us</h1>
      <p>Have questions or feedback? We'd love to hear from you!</p>
      <p>Address: 123 Main Street, City, State, Zip</p>
      <p>Email: info@example.com</p>
      <p>Phone: (123) 456-7890</p>
    </div>
  );
};

export default Contact;

const styles = {
  container: {
    textAlign: 'center',
    maxWidth: '600px',
    margin: 'auto',
  },
};
