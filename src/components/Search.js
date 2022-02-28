import React from 'react';

export default class Search extends React.Component {
  state = {
    search : "panda",
    type : "all"
  }
  handleKey = (e)=>{
  if(e.key === 'Enter'){
    this.props.searchMovies(this.state.search, this.state.type)
  }
  }
  handleFilter = (e) =>{
    this.setState(()=>({type : e.target.dataset.type}), () =>{
      this.props.searchMovies(this.state.search, this.state.type)
    })
  }


  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field ">
            <input 
            id="email_inline" 
            type="search" 
            placeholder='Search'
             className="validate"
             value={this.state.search} 
             onChange={(e) => this.setState({search : e.target.value})}
             onKeyDown={this.handleKey}
             />
          <button className='btn search-btn' onClick={() => this.props.searchMovies(this.state.search,this.state.type)}>Search Movies</button>
          </div>
        </div>
        <div>
        <label>
      <input 
      className="with-gap" 
      name="type" 
      type="radio" 
      onChange={this.handleFilter} 
      data-type="all"
      checked={this.state.type === "all"}
      />
      <span>All</span>
    </label>
    <label>
      <input 
      className="with-gap" 
      name="type" 
      type="radio" 
      onChange={this.handleFilter} 
      data-type="movie"
      checked={this.state.type === "movie"}
      />
      <span>Movies only</span>
    </label>
    <label>
      <input 
      className="with-gap" 
      name="type" 
      type="radio" 
      onChange={this.handleFilter} 
      data-type="series"
      checked={this.state.type === "series"}
      />
      <span>Series only</span>
    </label>
        </div>
      </div>
    );
  }
}


