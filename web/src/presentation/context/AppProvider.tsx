import { MakeAuthProvider } from "@/main/factories/presentation/context/MakeAuthProvider"

export const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <MakeAuthProvider>
      {children}
    </MakeAuthProvider>
  )
}