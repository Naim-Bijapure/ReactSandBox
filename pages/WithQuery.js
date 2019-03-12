import React from 'react'

class myQuery extends React.Component {
    static async getInitialProps({query}) {
      console.log('SLUG', query.slug)
      let data=query.slug;
      return {data}
    }
    render() {
      return <h1>My blog post work with express and client for Query parameter wiht Query Data is 
      
      <p style={{color:'red'}}>
      {this.props.data}

      </p>
      
      </h1>
    }
  }
  
  export default myQuery ;