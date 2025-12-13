import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { AuthProvider } from 'react-oidc-context'

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_1mNOWBgO3",
  client_id: "44o0jgjaavlkmnjc98t7bg3e26",
  redirect_uri: "http://localhost:5173",
  response_type: "code",
  scope: "openid email profile",
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </StrictMode>,
)
