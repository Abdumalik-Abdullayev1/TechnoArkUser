import https from './config'
import { AuthCheck } from '@/types/page'
const authRequest:AuthCheck = {
    sign_in: (data)=> https.post('/auth/sign-in', data),
    sign_up: (data)=> https.post('/auth/user/sign-up', data),
}

export default authRequest