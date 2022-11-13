import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import User from "./User";
import UserForm from "./UserForm";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Aprendiendo react query</h1>
      </div>
      <User />
      <hr />
      <UserForm />
    </QueryClientProvider>
  );
}

export default App;
