import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Protected(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('user-det')) {
      navigate('/login');
    }
  }, [navigate]);

  const Cmp = props.Cmp;

  return (
    <>
      <Cmp />
    </>
  );
}

export default Protected;
