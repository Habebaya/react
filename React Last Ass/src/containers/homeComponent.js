import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import { bindActionCreators } from 'redux'
import { getAllStudents } from '../actions'
import StudentList from './student-list'
import Search from '../components/search'
const Home = (props) => {
  console.log("inside Home : ",props)
  let {getAllStudents,match} = props
  let [filterKey,setFilterKey]= useState('');
  useEffect(() => {
    // effect will be called just in mount
    console.log('in mount' ,getAllStudents)
    console.log('in mount' ,match)
    getAllStudents();
    return () => {
      console.log('in Unmount Home')
      // cleanup
    }
  }, [match])

  let updateFilterKey= (key)=>{
    setFilterKey(key)
  }
  return (
    <div>
      <Search onSearch ={updateFilterKey} />
      <StudentList filter ={filterKey}/>
    </div>
  )
}

// no get , fireing actions only
const mapDispatchToProps=(dispatch)=>{
  console.log('insdie map dispatch to Prps')
  let ret =bindActionCreators({getAllStudents},dispatch)
  console.log(ret)
  console.log(getAllStudents)
  return  ret
}


 export default connect(null,mapDispatchToProps)(Home)

