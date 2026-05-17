
import type { FilterOption } from '../../types/filter.type'
import Filter from '../../ui/Filter'

export default function TodosOperations() {

    const filterOptions : FilterOption[] = [
        {label :'All' , value :'all' } ,
        {label :'Completed' , value :'completed' } ,
        {label :'Pending' , value :'not-completed' } ,
    ]

  return (
    <Filter filterdField='status' options={filterOptions} />
  )
}
