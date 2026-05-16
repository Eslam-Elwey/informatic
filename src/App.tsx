import { RouterProvider } from "react-router";
import routes from "./routes";
import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "./contexts/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <RouterProvider router={routes} />
      <Toaster
        gutter={12}
        position="top-center"
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "1.2rem",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--neutral-50)",
            color: "var(--neutral-700)",
          },
        }}
      />
    </DarkModeProvider>
  );
}

export default App;
