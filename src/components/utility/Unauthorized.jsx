import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section>
      <h1>Unauthorized</h1>
      <br />
      <p>You do not have access to the requested page.</p>
      <div>
        <Button text="Go Back" onClick={goBack} />
      </div>
    </section>
  );
};

export default Unauthorized;
