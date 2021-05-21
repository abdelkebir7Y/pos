import './top-header.style.css';
const  TopHeader = () => {
  return (
    <div className='top-header text-bold'>
      <span className='app-logo'>POS-System</span>
      <div className='top-header-right'>
        <input type='search' className='search-input' placeholder='search for items :)' />
        <div>
          <span className='lock-button'>Lock</span>
          <span className='user'>Abdelkebir</span>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;