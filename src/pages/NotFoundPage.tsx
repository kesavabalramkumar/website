import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-800">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-8 mb-6">Page Not Found</h2>
        <p className="text-xl text-neutral-600 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-primary">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;