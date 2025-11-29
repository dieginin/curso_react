interface Props {
  title: string
  data: { label: string; value: number }[]
}

export const Chart = ({ title, data }: Props) => {
  const maxValue = Math.max(...data.map((d) => d.value))

  return (
    <div className='p-6 bg-white border border-gray-200 shadow-sm rounded-xl'>
      <h3 className='mb-4 text-lg font-semibold text-gray-900'>{title}</h3>
      <div className='space-y-4'>
        {data.map((item, index) => (
          <div key={index} className='flex items-center space-x-4'>
            <div className='w-20 text-sm font-medium text-gray-600'>
              {item.label}
            </div>
            <div className='flex-1 h-3 bg-gray-200 rounded-full'>
              <div
                className='h-3 transition-all duration-1000 ease-out rounded-full bg-linear-to-r from-blue-500 to-blue-600'
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              ></div>
            </div>
            <div className='w-12 text-sm font-medium text-right text-gray-900'>
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
