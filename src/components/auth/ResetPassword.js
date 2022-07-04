import { Grid, TextField, Button, Box} from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { resetPassword } from "../../redux/actions/userAction";

const ResetPassword = () => {
    const navigate = useNavigate()
    const { id, token } = useParams()
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            password: data.get('password'),
            password_confirmation: data.get('password_confirmation'),
        }
        dispatch(resetPassword({
            password: actualData.password,
            password_confirmation: actualData.password_confirmation,navigate, id, token
        }))
    }
    return <>
        <Grid container justifyContent='center'>
            <Grid item sm={6} xs={12}>
                <h1 className="mt-4">Reset Password</h1>
                <Box component='form' noValidate sx={{ mt: 1 }} id='password-reset-form' onSubmit={handleSubmit}>
                    <TextField margin='normal' required fullWidth id='password' name='password' label='New Password' type='password'  />
                    <TextField margin='normal' required fullWidth id='password_confirmation' name='password_confirmation' label='Confirm New Password' type='password'  />
                    <Box textAlign='center'>
                        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Save</Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </>;
};

export default ResetPassword;