const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads})  {
  const [url, setUrl] = React.useState('')
  const [error, setError] = React.useState('')
  
  const handleChange = (event) => {
    setUrl(event.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    if (url.trim() === '') {
      setError('URL is required')
    } else if (!url.startsWith('http://') && !url.startsWith('https://')) {
      setError('URL must start with http:// or https://')
    } else {
      // Submit the form data to the server
      event.target.submit()
    }
  }
  
  return (
    <Default>
      <h2>Index Page</h2>
      {/* This is a JSX comment. */}
      <ul>
      {
        breads.map((bread, index)=> {
          return (
            <li key={index}>
              <a href={`/breads/${index}`}>
                {bread.name}
              </a>
            </li>
          )
        })
      }
      </ul>
      <div className="newButton">
        <a href="/breads/new"><button>Add a new bread</button></a>
      </div>
      <form action="/action_page.php" onSubmit={handleSubmit}>
        <label htmlFor="url">URL:</label>
        <input type="text" id="url" name="url" value={url} onChange={handleChange} />
        <span>{error}</span>
        <br/><br/>
        <input type="submit" />
      </form>
    </Default>
  )
}

module.exports = Index
