
import type { SortOption } from '../../types/sort.type'
import SortBy from '../../ui/SortBy'

export default function UserTableOperations() {

    const sortOptions:SortOption[] =  [
        {label : 'None' , value:'none'} ,
        {label : 'Sort by name (A-Z)' , value:'name-asc'},
        {label : 'Sort by name (Z-A)' , value:'name-desc'},
        {label : 'Sort by company (A-Z)' , value:'company-asc'},
        {label : 'Sort by company (Z-A)' , value:'company-desc'},
    ]

  return (
    <div className='flex items-center'>
        <SortBy options={sortOptions} />
    </div>
  )
}
