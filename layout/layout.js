export default function Layout({ children }) {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b-2 border-gray-100 border-dashed bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="px-2 py-3">
          <div className="flex items-center justify-start rtl:justify-end">
            <div className="flex space-x-3">
              <div className="text-3xl p-1 pt-2">🔒</div>
              <span className="text-2xl font-mono font-semibold pt-3 text-white">
                Next-Auth
              </span>
            </div>
          </div>
        </div>
      </nav>
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col min-h-screen w-full items-center justify-center bg-gray-800 text-center">
          {children}
        </div>
      </div>
    </>
  );
}
