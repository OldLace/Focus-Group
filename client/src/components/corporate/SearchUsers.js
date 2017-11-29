import React from 'react'
import SearchResults from './SearchResults'

import '../../App.css'

function SearchUsers(props) {
  return (
    <div className="boxy">
      <div className="search-form">
      <div className="userthings">
        <form onSubmit={(e)=>{props.handleSubmit(e,'searchUsers')}}>
          <div className="search-category">
            <span>Gender: </span>
            <span className="spanpush">
              <label><input name="sex" value="0" type="checkbox" checked={props.searchQuery ? props.searchQuery.sex[0] : false} onChange={props.handleInputChange} />Male</label>
              <label><input name="sex" value="1" type="checkbox" checked={props.searchQuery ? props.searchQuery.sex[1] : false} onChange={props.handleInputChange} />Female</label>
            </span>
          </div>
          <div className="search-category">
            <span>Height:</span>
          <span className="spanpush">
            <label className="search-label"><input name="height" value="0" type="checkbox" checked={props.searchQuery ? props.searchQuery.height[0] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />18"-24"</label>
            <label className="search-label"><input name="height" value="1" type="checkbox" checked={props.searchQuery ? props.searchQuery.height[1] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />25"-34"</label>
            <label className="search-label"><input name="height" value="2" type="checkbox" checked={props.searchQuery ? props.searchQuery.height[2] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />35"-44"</label>
            <label className="search-label"><input name="height" value="3" type="checkbox" checked={props.searchQuery ? props.searchQuery.height[3] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />45"+</label>
         </span>
          </div>
          <div className="search-category">
            <span>Weight:</span>
            <span className="spanpush">
            <label className="search-label"><input name="weight" value="0" type="checkbox" checked={props.searchQuery ? props.searchQuery.weight[0] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />{"<"} 100 lbs</label>
            <label className="search-label"><input name="weight" value="1" type="checkbox" checked={props.searchQuery ? props.searchQuery.weight[1] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />101-150 lbs</label>
            <label className="search-label"><input name="weight" value="2" type="checkbox" checked={props.searchQuery ? props.searchQuery.weight[2] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />151-249 lbs</label>
            <label className="search-label"><input name="weight" value="3" type="checkbox" checked={props.searchQuery ? props.searchQuery.weight[3] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />{'>'} 250 lbs</label>
          </span>
          </div>
          <div className="search-category">
            <span>Age:</span>
            <span className="spanpush">
            <label className="search-label"><input name="age" value="0" type="checkbox" checked={props.searchQuery ? props.searchQuery.age[0] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />10-15 yrs</label>
            <label className="search-label"><input name="age" value="1" type="checkbox" checked={props.searchQuery ? props.searchQuery.age[1] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />25-34 yrs</label>
            <label className="search-label"><input name="age" value="2" type="checkbox" checked={props.searchQuery ? props.searchQuery.age[2] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />35-44 yrs</label>
            <label className="search-label"><input name="age" value="3" type="checkbox" checked={props.searchQuery ? props.searchQuery.age[3] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />{'>'} 44 yrs</label>
          </span>
          </div>
          <div className="search-category">
            <span>Annual Income: </span>
            <span className="spanpush">
            <label><input name="income" value="0" type="checkbox" checked={props.searchQuery ? props.searchQuery.income[0] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />{'<'} $35k</label>
            <label><input name="income" value="1" type="checkbox" checked={props.searchQuery ? props.searchQuery.income[1] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />35-$50k</label>
            <label><input name="income" value="2" type="checkbox" checked={props.searchQuery ? props.searchQuery.income[2] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />50-$100k</label>
            <label><input name="income" value="3" type="checkbox" checked={props.searchQuery ? props.searchQuery.income[3] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />{'>'} $100k</label>
          </span>
          </div>
          <div className="search-category">
            <span>Zip Code:</span>
            <label><input name="zip" value={props.searchQuery ? props.searchQuery.zip : ''} onChange={props.handleInputChange} /></label>
          </div>
          <div className={props.preSearchLoaded ? 'preview-count' : 'preview-count nodisplay'}>
            Number of results for this search: {props.preSearchCount}
          </div>
          <div className="buttondiv">
            <input className="search-form-button" type="submit" value="search" />
            <button className="search-form-button" onClick={props.clearAll}>Clear all fields</button>
          </div>
        </form>
      </div>
      {
        props.searchResultsLoaded || props.searchResultsInvalid ?
          <SearchResults
            searchResults={props.searchResults}
            searchResultsInvalid={props.searchResultsInvalid}
            groups={props.groups}
            groupsLoaded={props.groupsLoaded}
            addToGroup={props.addToGroup}
          />
        : <div className="search-results"></div>
      }
    </div>
   </div>
  )
}

export default SearchUsers
