import React, { useEffect,useState } from 'react';
import { Navigate } from 'react-router-dom';

const Loading = () => {
  // Use a state variable to track if the redirect should happen
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    // Set redirect to true as soon as the component mounts
    setRedirect(true);
  }, []);

  // Redirect to the desired page
  if (redirect) {
    return <Navigate to="/profile" />;
  }

  // Render a placeholder while the redirect is being performed
  return (
    <div>
      <h1>Redirecting...</h1>
      {/* Optionally, you can include a loading spinner or message here */}
    </div>
  );
};

export default Loading;