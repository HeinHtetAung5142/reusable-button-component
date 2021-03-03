import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <h3>Buttons</h3>

      <div className='wrapper'>

        <div className='container'>
          <span>{'<'}Button {'/>'}</span>
          <Button>Default</Button>
        </div>
        <div className='container'>
          <span>{'<'}Button variant="outline" {'/>'}</span>
          <Button color='red' variant="outline" >Default</Button>
        </div>
        <div className='container'>
          <span>{'<'}Button variant="text" {'/>'}</span>
          <Button color='darkblue' variant="text">Default</Button>
        </div>
        <div className='container'>
          <span>{'<'}Button disableShadow {'/>'}</span>
          <Button color='darkblue' disableShadow>Default</Button>
        </div>
        <div className='container'>
          <span>{'<'}Button startIcon='favorite_border' {'/>'}</span>
          <Button color='red' startIcon='favorite_border' >Default</Button>
        </div>
        <div className='container'>
          <span>{'<'}Button endIcon='add_shopping_cart' {'/>'}</span>
          <Button color='green' endIcon='add_shopping_cart' >Default</Button>
        </div>
        <div className='container'>
          <span>{'<'}Button size='sm' {'/>'}</span>
          <Button color='green' size='sm' >Default</Button>
        </div>
        <div className='container'>
          <span>{'<'}Button size='md' {'/>'}</span>
          <Button color='darkviolet' size='md' >Default</Button>
        </div>
        <div className='container'>
          <span>{'<'}Button size='lg' {'/>'}</span>
          <Button color='peru' size='lg' >Default</Button>
        </div>
        <div className='container'>
          <span>{'<'}Button color='red' {'/>'}</span>
          <Button color='red' >Default</Button>
        </div>
        <div className='container'>
          <span>{'<'}Button color='blue' {'/>'}</span>
          <Button color='blue' >Default</Button>
        </div>
        <div className='container'>
          <span>{'<'}Button color='#9e7a10' {'/>'}</span>
          <Button color='#9e7a10' >Default</Button>
        </div>
      </div>
      <footer>
        <span>Icons: https://material.io/resources/icons/?style=round</span>
        <br/>
        <span className='made-by'>created by Alexandre Roberto Cordeiro - devChallenges.io</span>
      </footer>
    </div>  
    
  );
}

export default App;