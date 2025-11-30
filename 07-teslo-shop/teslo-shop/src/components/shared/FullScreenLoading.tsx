export const FullScreenLoading = () => {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <div className='flex flex-col items-center gap-4'>
        <div className='w-10 h-10 border-4 rounded-full animate-spin border-primary border-t-transparent' />
        <p className='text-lg font-medium'>Espere un momento...</p>
      </div>
    </div>
  )
}
