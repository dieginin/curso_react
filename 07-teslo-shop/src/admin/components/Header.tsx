import { Bell, MessageSquare, Search, Settings } from "lucide-react"

export const Header = () => {
  return (
    <header className='px-6 py-4 bg-white border-b border-gray-200 h-18'>
      <div className='flex items-center justify-between'>
        {/* Search */}
        <div className='flex-1 max-w-md'>
          <div className='relative'>
            <Search
              className='absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2'
              size={20}
            />
            <input
              type='text'
              placeholder='Search...'
              className='w-full py-2 pl-10 pr-4 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>
        </div>

        {/* Actions */}
        <div className='flex items-center space-x-4'>
          <button className='relative p-2 text-gray-600 transition-colors rounded-lg hover:bg-gray-100'>
            <Bell size={20} />
            <span className='absolute w-3 h-3 bg-red-500 rounded-full -top-1 -right-1'></span>
          </button>

          <button className='p-2 text-gray-600 transition-colors rounded-lg hover:bg-gray-100'>
            <MessageSquare size={20} />
          </button>

          <button className='p-2 text-gray-600 transition-colors rounded-lg hover:bg-gray-100'>
            <Settings size={20} />
          </button>

          <div className='flex items-center justify-center w-8 h-8 text-sm font-semibold text-white transition-shadow rounded-full cursor-pointer bg-linear-to-br from-blue-500 to-purple-600 hover:shadow-lg'>
            JD
          </div>
        </div>
      </div>
    </header>
  )
}
