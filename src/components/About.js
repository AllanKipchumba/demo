import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1>About Us</h1>
      <p>
        We are a local grocery store committed to providing organic and locally
        sourced products to our community.
      </p>
      <p>
        Our mission is to promote healthy living and sustainability by offering
        high-quality, eco-friendly products.
      </p>
    </div>
  );
};

export default About;

const styles = {
  container: {
    textAlign: 'center',
    maxWidth: '600px',
    margin: 'auto',
  },
};
