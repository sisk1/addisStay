import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { resolveValue, Toaster, ToastIcon } from "react-hot-toast";
import { Transition } from "@headlessui/react";

import { DarkModeProvider } from "./contexts/DarkModeContext";
import { SidebarProvider } from "./contexts/SidebarContext";

import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Accomodations from "./pages/Accomodations";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import Checkin from "./pages/Checkin";
import Bookings from "./pages/Bookings";
import Booking from "./pages/Booking";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import ProtectedRoute from "./ui/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}

        <DarkModeProvider>
          <SidebarProvider>
            <BrowserRouter>
              <Routes>
                <Route
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate replace to="dashboard" />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="accommodations" element={<Accomodations />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="users" element={<Users />} />
                  <Route path="checkin/:bookingId" element={<Checkin />} />
                  <Route path="bookings" element={<Bookings />} />
                  <Route path="booking/:bookingId" element={<Booking />} />
                  <Route path="account" element={<Account />} />
                </Route>

                <Route path="login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </BrowserRouter>
          </SidebarProvider>
        </DarkModeProvider>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: { duration: 5000 },
          }}
        >
          {(t) => (
            <Transition
              appear
              show={t.visible}
              as="div"
              className="z-50 flex max-w-[500px] items-center gap-4 rounded-md border border-gray-200 bg-gray-100 px-6 py-4 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
              enter="transition-all duration-150"
              enterFrom="opacity-0 scale-50"
              enterTo="opacity-100 scale-100"
              leave="transition-all duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-75"
            >
              <ToastIcon toast={t} />
              <p className="px-2">{resolveValue(t.message)}</p>
            </Transition>
          )}
        </Toaster>
      </QueryClientProvider>
    </>
  );
}

export default App;
