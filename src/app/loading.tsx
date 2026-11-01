function LoadingPage() {
  return (
    <div
      className={`w-full py-20 flex flex-col items-center justify-center text-gray-200`}
    >
      <div className="h-8 w-8 rounded-full border-2 border-gray-200 border-t-gray-700 dark:border-gray-800 dark:border-t-gray-200 animate-spin"></div>

      <p className="mt-3 text-sm font-medium text-gray-500 ">{"Loading..."}</p>
    </div>
  );
}

export default LoadingPage;
