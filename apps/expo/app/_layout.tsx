import { Stack } from 'expo-router'
import { Provider } from 'app/provider'

export default function Layout() {
  return (
    <Provider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen
          name="users/[id]"
          options={{
            title: 'User',
          }}
        />
      </Stack>
    </Provider>
  )
}

