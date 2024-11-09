import React from 'react';

const Feedback = () => {
  return (
    <div>
      <h3>Feedback</h3>
      <form>
        <textarea placeholder="Provide feedback..." rows="4" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
