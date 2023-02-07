export const getThisState = (stateName) => {
  try{
    console.log('stateName', stateName);
      const serializedState = localStorage.getItem(stateName);
      if(serializedState === null){ return undefined }
      console.log('serializedState', serializedState);
      return JSON.parse(serializedState);
  }catch(err){
      return undefined
  }
}

export const getItem = (itemName) => {
  console.log('itemName', itemName);
  const items = getThisState(itemName)
  console.log('items', items);
  if (items === undefined) {
      return {list : []}
  } else {
      return items
  }
}

export const saveItem = (key,data) => {
  const serializedState = JSON.stringify(data);
  localStorage.setItem(key,serializedState);
}

export const getItemByKey = (key) => {
  try{
      const serializedState = localStorage.getItem(key);
      if(serializedState === null){ return undefined }
      return JSON.parse(serializedState);
  }catch(err){
      return undefined
  }
}

export const deleteItemByKey = (key) => localStorage.setItem(key,null)

export const emptyLocalStorage = (reducerkeys) => {

  try{
      if(undefined != reducerkeys && reducerkeys.length > 0){
          reducerkeys.forEach(key => {
              localStorage.setItem(key,null);
          })
      }
  }catch(err){
      //console.log("ERROR===emptyLocalStorage==>>>")
  }
}

export const clearStorage = () => localStorage.clear();
