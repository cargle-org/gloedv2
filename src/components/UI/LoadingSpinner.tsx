
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center fixed h-[100vh] top-0 left-0 z-20 w-full bg-black/75">
      <div className="animate-spin rounded-full border-8 border-blue-500 border-dashed h-16 w-16"></div>
    </div>
  )
}

export default LoadingSpinner