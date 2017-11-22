import React from 'react'

function SearchResults(props) {
  return (
    <div>Placeholder...</div>
  )
}

function SearchUsers(props) {
  return (
    <div>
      <div className="search-form">
        <form onSubmit={(e)=>{props.handleSubmit(e,'searchUsers')}}>
          <div className="search-category">
            <span>Height:</span>
            <label><input name="height" value="0" type="checkbox" checked={props.searchQuery ? props.searchQuery.height[0] : false} onChange={props.handleInputChange} />Less than 4'</label>
            <label><input name="height" value="1" type="checkbox" checked={props.searchQuery ? props.searchQuery.height[1] : false} onChange={props.handleInputChange} />4-5'</label>
            <label><input name="height" value="2" type="checkbox" checked={props.searchQuery ? props.searchQuery.height[2] : false} onChange={props.handleInputChange} />5-6'</label>
            <label><input name="height" value="3" type="checkbox" checked={props.searchQuery ? props.searchQuery.height[3] : false} onChange={props.handleInputChange} />6'+</label>
          </div>
          <div className="search-category">
            <span>Weight:</span>
            <label><input name="weight" value="0" type="checkbox" checked={props.searchQuery ? props.searchQuery.weight[0] : false} onChange={props.handleInputChange} />Less than 90 pounds</label>
            <label><input name="weight" value="1" type="checkbox" checked={props.searchQuery ? props.searchQuery.weight[1] : false} onChange={props.handleInputChange} />90-150 pounds</label>
            <label><input name="weight" value="2" type="checkbox" checked={props.searchQuery ? props.searchQuery.weight[2] : false} onChange={props.handleInputChange} />150-200 pounds</label>
            <label><input name="weight" value="3" type="checkbox" checked={props.searchQuery ? props.searchQuery.weight[3] : false} onChange={props.handleInputChange} />250+ pounds</label>
          </div>
          <div className="search-category">
            <span>Age:</span>
            <label><input name="age" value="0" type="checkbox" checked={props.searchQuery ? props.searchQuery.age[0] : false} onChange={props.handleInputChange} />Younger than 16</label>
            <label><input name="age" value="1" type="checkbox" checked={props.searchQuery ? props.searchQuery.age[1] : false} onChange={props.handleInputChange} />26-25</label>
            <label><input name="age" value="2" type="checkbox" checked={props.searchQuery ? props.searchQuery.age[2] : false} onChange={props.handleInputChange} />25-40</label>
            <label><input name="age" value="3" type="checkbox" checked={props.searchQuery ? props.searchQuery.age[3] : false} onChange={props.handleInputChange} />40 and older</label>
          </div>
          <div className="search-category">
            <span>Annual Income: </span>
            <label><input name="income" value="0" type="checkbox" checked={props.searchQuery ? props.searchQuery.income[0] : false} onChange={props.handleInputChange} />Less than $25,000</label>
            <label><input name="income" value="1" type="checkbox" checked={props.searchQuery ? props.searchQuery.income[1] : false} onChange={props.handleInputChange} />25-$50,000</label>
            <label><input name="income" value="2" type="checkbox" checked={props.searchQuery ? props.searchQuery.income[2] : false} onChange={props.handleInputChange} />50-$100,000</label>
            <label><input name="income" value="3" type="checkbox" checked={props.searchQuery ? props.searchQuery.income[3] : false} onChange={props.handleInputChange} />More than $100,000</label>
          </div>
          <input type="submit" value="search" />
        </form>
      </div>
      {
        props.searchResultsLoaded ? <SearchResults searchResults={props.SearchResults}/> : <div className="search-results">Waiting...</div>
      }
    </div>
  )
}

export default SearchUsers

/*function Select(props) {
  return (
    <label>
      {props.label}
      <select value={props.selectedValue} onChange={(e)=> {props.handleInputChange(e, 'searchQuery')}} name={props.name}>
        <option value={null}>None</option>
        {props.options.map(function(el, index){
          return <option value={el} key={index}>{el}</option>
        })}
      </select>
    </label>
  )
}
const ages = ['5-10','11-13','13-19','19-25','25-30','30-35','35-40','40-45','45-50','50-60','60-70','70%']
const heights = ['less than 4','4-5','5-6','6-6.5','more than 6']
const weights = ['less than 100','100-120','120-150','150-170','170-200','200-250','250-300','350+']
const incomes =[]

*/
