// expo-router manages its own navigation context
// so we don't need a NavigationProvider wrapper on native
export function NavigationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
