import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Card, DecoratedField, FormField } from 'components';
import './login.scss';
import { Form, reduxForm, initialize } from 'redux-form';
import { LOGIN_FORM } from 'constants/formNames';
import { fields } from './fields';
import { LoadingButton } from '@mui/lab';
import { login } from 'actions/session';

const initialValues = {
    userName: '',
    password: ''
  };
  
  const mapSectionFields = (props) => (field, i) => {
    return (
      <DecoratedField
        key={i + field.name}
        {...field}
        inputcomponent={FormField}
        options={field.options || props[field.name]}
      />
    );
  };
  
  const onSubmit = (formData, dispatch, props) => {
    dispatch(login(formData));
  };
  

const Login = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.session.user);
    const loading = useSelector((state) => state.session.loading);

    useEffect(() => {
        dispatch(initialize(initialValues));
    }, []);

    return (
        <div className="login">
            <Container>
                <div className="card-wrapper">
                    <Card>
                        <h2>Login</h2>
                        <Form autoComplete="off" onSubmit={props.handleSubmit} noValidate>
                          <pre>
                          "email": "eve.holt@reqres.in",
                          "password": "cityslicka"
                          </pre>
                            {fields.map(mapSectionFields(props))}

                            <LoadingButton sx={{ mb: 2 }} fullWidth size="medium" type="submit" variant="contained" loading={loading}>
                                LOGIN
                            </LoadingButton>
                        </Form>
                    </Card>
                </div>                
            </Container>
        </div> 
    ) 
}

export default reduxForm({
    form: LOGIN_FORM,
    onSubmit
  })(Login);
  