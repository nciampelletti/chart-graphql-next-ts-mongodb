import { Button, Center, Image, Stack, Text, Input } from "@chakra-ui/react"
import { Session } from "next-auth"
import { signIn } from "next-auth/react"
import { useState } from "react"

interface IAuthProps {
  session: Session | null
  reloadSession: () => {}
}

const App: React.FC<IAuthProps> = ({ session, reloadSession }) => {
  const [userName, setUserName] = useState("")

  const onSubmit = async () => {
    try {
      //call createUserName mutation to send our username to GraphQL api
    } catch (error) {
      console.log("onSubmit error", error)
    }
  }

  return (
    <Center height='100vh'>
      <Stack align='center' spacing={8}>
        {session ? (
          <>
            <Text>Create a Username</Text>
            <Input
              placeholder='enter username'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            ></Input>
            <Button onClick={onSubmit}>Save</Button>
          </>
        ) : (
          <>
            <Text fontSize={"3xl"}>Natalia Messanger</Text>
            <Button
              onClick={() => signIn("google")}
              leftIcon={<Image height='20px' src='/images/googlelogo.png' />}
            >
              Continue with Google
            </Button>
          </>
        )}
      </Stack>
    </Center>
  )
}

export default App
