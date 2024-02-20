import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Returns to the previous page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-red-500">
        404 Not Found
      </h1>
      <p className="text-gray-700 mt-4 text-[15px] sm:text-inherit">
        The page you requested could not be found.
      </p>
      <Button variant="primary"
        className=" font-bold mt-4 "
        onClick={handleGoBack}
      >
        Go Back
      </Button>
    </div>
  );
};

export default PageNotFound;
