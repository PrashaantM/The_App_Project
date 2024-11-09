import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmitFeedback = () => {
    alert('Feedback submitted successfully!');
  };

  return (
    <div>
      <h3>Submit Feedback</h3>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Share your feedback"
        rows="5"
      />
      <button onClick={handleSubmitFeedback}>Submit Feedback</button>
    </div>
  );
};

export default FeedbackForm;
