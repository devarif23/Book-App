const getStoredBook = () => {
  const storedBookSTP = localStorage.getItem("readList");

  if (storedBookSTP) {
    const storedBookData = JSON.parse(storedBookSTP);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
    const storedBookData = getStoredBook(id);
    if(storedBookData.includes(id)){
        alert('vai ei id alredy exist')
    }else{
        storedBookData.push()
       const data = JSON.stringify(storedBookData);
       localStorage.setItem("readList", data); 
        
    }
};
export {addToStoredDB};