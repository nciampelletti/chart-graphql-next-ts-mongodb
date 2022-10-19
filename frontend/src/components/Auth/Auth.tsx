import { Button } from "@chakra-ui/react"
import { signIn } from "next-auth/react"

interface IAuthProps {}

const Auth: React.FC<IAuthProps> = (props) => {
  return (
    <div>
      auth
      <Button onClick={() => signIn()}>Signin</Button>
    </div>
  )
}

export default Auth
