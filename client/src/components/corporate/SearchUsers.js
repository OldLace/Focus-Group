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
            <span>Height:</span>
          <span className="spanpush">
            <label><input name="height" value="0" type="checkbox" checked={props.searchQuery ? props.searchQuery.height[0] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />18"-24"</label>
            <label><input name="height" value="1" type="checkbox" checked={props.searchQuery ? props.searchQuery.height[1] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />25"-34"</label>
            <label><input name="height" value="2" type="checkbox" checked={props.searchQuery ? props.searchQuery.height[2] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />35"-44"</label>
            <label><input name="height" value="3" type="checkbox" checked={props.searchQuery ? props.searchQuery.height[3] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />45"+</label>
         </span>
          </div>
          <div className="search-category">
            <span>Weight:</span>
            <span className="spanpush">
            <label><input name="weight" value="0" type="checkbox" checked={props.searchQuery ? props.searchQuery.weight[0] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />Less than 100 pounds</label>
            <label><input name="weight" value="1" type="checkbox" checked={props.searchQuery ? props.searchQuery.weight[1] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />101-150 pounds</label>
            <label><input name="weight" value="2" type="checkbox" checked={props.searchQuery ? props.searchQuery.weight[2] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />151-249 pounds</label>
            <label><input name="weight" value="3" type="checkbox" checked={props.searchQuery ? props.searchQuery.weight[3] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />250+ pounds</label>
          </span>
          </div>
          <div className="search-category">
            <span>Age:</span>
            <span className="spanpush">
            <label><input name="age" value="0" type="checkbox" checked={props.searchQuery ? props.searchQuery.age[0] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />10-15</label>
            <label><input name="age" value="1" type="checkbox" checked={props.searchQuery ? props.searchQuery.age[1] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />25-34</label>
            <label><input name="age" value="2" type="checkbox" checked={props.searchQuery ? props.searchQuery.age[2] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />35-44</label>
            <label><input name="age" value="3" type="checkbox" checked={props.searchQuery ? props.searchQuery.age[3] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />45 and older</label>
          </span>
          </div>
          <div className="search-category">
            <span>Annual Income: </span>
            <span className="spanpush">
            <label><input name="income" value="0" type="checkbox" checked={props.searchQuery ? props.searchQuery.income[0] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />Less than $35,000</label>
            <label><input name="income" value="1" type="checkbox" checked={props.searchQuery ? props.searchQuery.income[1] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />35-$50,000</label>
            <label><input name="income" value="2" type="checkbox" checked={props.searchQuery ? props.searchQuery.income[2] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />50-$100,000</label>
            <label><input name="income" value="3" type="checkbox" checked={props.searchQuery ? props.searchQuery.income[3] : false} onChange={(e) => {props.handleInputChange(e); props.handleSubmit(e, 'preSearch');}} />More than $100,000</label>
          </span>
          </div>
          <span>Zip Code:</span>
          <label><input name="zip" value={props.searchQuery ? props.searchQuery.zip : ''} onChange={props.handleInputChange} /></label>
          <div className="search-category">
            <span>Gender: </span>
            <label><input name="sex" value="0" type="checkbox" checked={props.searchQuery ? props.searchQuery.sex[0] : false} onChange={props.handleInputChange} />Male</label>
            <label><input name="sex" value="1" type="checkbox" checked={props.searchQuery ? props.searchQuery.sex[1] : false} onChange={props.handleInputChange} />Female</label>
          </div>
          <div className={props.preSearchLoaded ? '' : 'nodisplay'}>
            Number of results for this search: {props.preSearchCount}
          </div>
          <div className="buttondiv">
            <button className="search-form-button" onClick={props.clearAll}>Clear all fields</button>
            <input className="search-form-button" type="submit" value="search" />
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
